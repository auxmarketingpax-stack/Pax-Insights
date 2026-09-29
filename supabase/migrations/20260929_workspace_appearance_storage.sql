-- Shared workspace appearance is deliberately separate from the task document.
-- It avoids browser-local blob/data URLs and makes the logo and cover available
-- on every computer without exposing task data.
create table if not exists public.task_workspace_appearance (
  workspace_key text primary key check (workspace_key = 'primary'),
  logo_url text,
  cover_image_url text,
  cover_color text,
  updated_at timestamptz not null default timezone('utc'::text, now()),
  updated_by uuid references public.profiles(id)
);

alter table public.task_workspace_appearance enable row level security;

create or replace function public.can_customize_task_workspace()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles profile
    where profile.id = auth.uid()
      and profile.access_status = 'approved'
      and (
        profile.role = 'developer'
        or exists (
          select 1 from public.departments department
          where lower(trim(department.name)) = 'diretoria'
            and department.id in (profile.department_id, profile.department_id_secondary)
        )
      )
  );
$$;

drop policy if exists "approved users read workspace appearance" on public.task_workspace_appearance;
create policy "approved users read workspace appearance"
on public.task_workspace_appearance for select to authenticated
using (exists (select 1 from public.profiles where id = auth.uid() and access_status = 'approved'));

create or replace function public.save_task_workspace_appearance(
  p_logo_url text default null,
  p_cover_image_url text default null,
  p_cover_color text default null,
  p_update_logo boolean default false,
  p_update_cover boolean default false,
  p_update_color boolean default false
)
returns table (logo_url text, cover_image_url text, cover_color text, updated_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.can_customize_task_workspace() then
    raise exception 'Somente Diretoria e controle total podem personalizar a área de trabalho.' using errcode = '42501';
  end if;

  insert into public.task_workspace_appearance as appearance (
    workspace_key, logo_url, cover_image_url, cover_color, updated_by
  ) values (
    'primary',
    case when p_update_logo then nullif(p_logo_url, '') else null end,
    case when p_update_cover then nullif(p_cover_image_url, '') else null end,
    case when p_update_color then nullif(p_cover_color, '') else null end,
    auth.uid()
  )
  on conflict (workspace_key) do update set
    logo_url = case when p_update_logo then nullif(p_logo_url, '') else appearance.logo_url end,
    cover_image_url = case when p_update_cover then nullif(p_cover_image_url, '') else appearance.cover_image_url end,
    cover_color = case when p_update_color then nullif(p_cover_color, '') else appearance.cover_color end,
    updated_at = timezone('utc'::text, now()),
    updated_by = auth.uid();

  return query
  select appearance.logo_url, appearance.cover_image_url, appearance.cover_color, appearance.updated_at
  from public.task_workspace_appearance appearance
  where appearance.workspace_key = 'primary';
end;
$$;

revoke all on function public.can_customize_task_workspace() from public;
revoke all on function public.save_task_workspace_appearance(text, text, text, boolean, boolean, boolean) from public;
grant execute on function public.save_task_workspace_appearance(text, text, text, boolean, boolean, boolean) to authenticated;

-- The helper is used only inside policies/RPCs; it must not be an API endpoint.
revoke execute on function public.can_customize_task_workspace() from authenticated;
-- Clients use the guarded wrapper, never the lower-level audit routine.
revoke execute on function public.save_task_workspace_internal(jsonb, bigint) from authenticated;
revoke all on table public.task_workspace_appearance from anon;
grant select on table public.task_workspace_appearance to authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('pax-workspace-assets', 'pax-workspace-assets', true, 3145728, array['image/png', 'image/jpeg', 'image/webp', 'image/gif'])
on conflict (id) do update set public = true, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "workspace appearance uploads" on storage.objects;
create policy "workspace appearance uploads"
on storage.objects for insert to authenticated
with check (bucket_id = 'pax-workspace-assets' and public.can_customize_task_workspace());

drop policy if exists "workspace appearance updates" on storage.objects;
create policy "workspace appearance updates"
on storage.objects for update to authenticated
using (bucket_id = 'pax-workspace-assets' and public.can_customize_task_workspace())
with check (bucket_id = 'pax-workspace-assets' and public.can_customize_task_workspace());

drop policy if exists "workspace appearance deletes" on storage.objects;
create policy "workspace appearance deletes"
on storage.objects for delete to authenticated
using (bucket_id = 'pax-workspace-assets' and public.can_customize_task_workspace());
