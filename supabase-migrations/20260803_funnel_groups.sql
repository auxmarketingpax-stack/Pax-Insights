begin;

create extension if not exists pgcrypto with schema extensions;

create table if not exists public.crm_funnel_groups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null check (category in ('B2B', 'B2C')),
  owner_department_id uuid references public.departments (id) on delete set null,
  created_by uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  archived_at timestamptz
);

create unique index if not exists idx_crm_funnel_groups_name_category_active
  on public.crm_funnel_groups (category, lower(name))
  where archived_at is null;

create index if not exists idx_crm_funnel_groups_owner_department_id
  on public.crm_funnel_groups (owner_department_id);

alter table public.crm_funnels
  add column if not exists group_id uuid references public.crm_funnel_groups (id) on delete set null;

alter table public.crm_funnels
  add column if not exists owner_department_id uuid references public.departments (id) on delete set null;

create index if not exists idx_crm_funnels_group_id
  on public.crm_funnels (group_id);

create index if not exists idx_crm_funnels_owner_department_id
  on public.crm_funnels (owner_department_id);

create table if not exists public.crm_funnel_group_department_permissions (
  group_id uuid not null references public.crm_funnel_groups (id) on delete cascade,
  department_id uuid not null references public.departments (id) on delete cascade,
  access_level text not null default 'view',
  created_at timestamptz not null default timezone('utc', now()),
  primary key (group_id, department_id)
);

alter table public.crm_funnel_group_department_permissions
  drop constraint if exists crm_funnel_group_department_permissions_access_level_check;

alter table public.crm_funnel_group_department_permissions
  add constraint crm_funnel_group_department_permissions_access_level_check
  check (access_level in ('view', 'edit'));

create index if not exists idx_crm_funnel_group_department_permissions_department_level
  on public.crm_funnel_group_department_permissions (department_id, access_level);

drop trigger if exists trg_crm_funnel_groups_set_updated_at on public.crm_funnel_groups;
create trigger trg_crm_funnel_groups_set_updated_at
before update on public.crm_funnel_groups
for each row execute function public.set_updated_at();

grant select, insert, update, delete on public.crm_funnel_groups to authenticated;
grant select, insert, update, delete on public.crm_funnel_group_department_permissions to authenticated;

grant all on public.crm_funnel_groups to service_role;
grant all on public.crm_funnel_group_department_permissions to service_role;

alter table public.crm_funnel_groups enable row level security;
alter table public.crm_funnel_group_department_permissions enable row level security;

create or replace function public.app_can_view_funnel_group(target_group_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.app_is_approved_user()
    and exists (
      select 1
      from public.crm_funnel_groups g
      where g.id = target_group_id
        and g.archived_at is null
        and (
          public.app_is_developer()
          or public.app_is_admin()
          or g.created_by = auth.uid()
          or exists (
            select 1
            from public.crm_funnels f
            where f.group_id = g.id
              and public.app_can_view_funnel(f.id)
          )
        )
    );
$$;

create or replace function public.app_can_edit_funnel_group(target_group_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.app_is_approved_user()
    and exists (
      select 1
      from public.crm_funnel_groups g
      where g.id = target_group_id
        and g.archived_at is null
        and (
          public.app_is_developer()
          or public.app_is_admin()
        )
    );
$$;

grant execute on function public.app_can_view_funnel_group(uuid) to authenticated;
grant execute on function public.app_can_edit_funnel_group(uuid) to authenticated;

drop policy if exists crm_funnel_groups_select_visible on public.crm_funnel_groups;
create policy crm_funnel_groups_select_visible
on public.crm_funnel_groups
for select
to authenticated
using (public.app_can_view_funnel_group(id));

drop policy if exists crm_funnel_groups_admin_manage on public.crm_funnel_groups;
create policy crm_funnel_groups_admin_manage
on public.crm_funnel_groups
for all
to authenticated
using (public.app_can_edit_funnel_group(id))
with check (
  public.app_is_approved_user()
  and (
    public.app_is_developer()
    or public.app_is_admin()
  )
);

drop policy if exists crm_funnel_group_department_permissions_select_visible on public.crm_funnel_group_department_permissions;
create policy crm_funnel_group_department_permissions_select_visible
on public.crm_funnel_group_department_permissions
for select
to authenticated
using (public.app_can_view_funnel_group(group_id));

drop policy if exists crm_funnel_group_department_permissions_admin_manage on public.crm_funnel_group_department_permissions;
create policy crm_funnel_group_department_permissions_admin_manage
on public.crm_funnel_group_department_permissions
for all
to authenticated
using (public.app_can_edit_funnel_group(group_id))
with check (public.app_can_edit_funnel_group(group_id));

commit;
