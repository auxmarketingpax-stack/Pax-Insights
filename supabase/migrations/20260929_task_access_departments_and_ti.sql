-- Tasks has its own access list: disabling a person here never disables their
-- CRM account or removes their CRM data.
create table if not exists public.task_user_access (
  profile_id uuid primary key references public.profiles(id) on delete cascade,
  enabled boolean not null default true,
  updated_at timestamptz not null default timezone('utc'::text, now()),
  updated_by uuid references public.profiles(id)
);

alter table public.task_user_access enable row level security;
revoke all on public.task_user_access from anon;
grant select on public.task_user_access to authenticated;

drop policy if exists "approved users read task access" on public.task_user_access;
create policy "approved users read task access"
on public.task_user_access for select to authenticated
using (exists (select 1 from public.profiles where id = auth.uid() and access_status = 'approved'));

-- WILLYAN remains an approved CRM user, but no longer appears in or accesses
-- the Tarefas workspace.
insert into public.task_user_access (profile_id, enabled, updated_at)
values ('406abb6a-2783-4587-9e93-b6b6ebc64270'::uuid, false, timezone('utc'::text, now()))
on conflict (profile_id) do update set enabled = false, updated_at = excluded.updated_at;

-- New organizational folders requested for the Pax workspace. Existing names
-- are retained and this is idempotent when the migration is re-run.
insert into public.departments (name)
select requested.name
from (values
  ('RH'), ('DP'), ('Financeiro'), ('Convênios'), ('Logística'), ('TI'), ('Refeitório')
) as requested(name)
where not exists (
  select 1 from public.departments department
  where lower(trim(department.name)) = lower(trim(requested.name))
);

-- TI is an explicit full-control department. The trigger applies the role at
-- the source whenever a profile is assigned to TI, including future users.
create or replace function public.apply_ti_full_control_role()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if exists (
    select 1 from public.departments department
    where lower(trim(department.name)) = 'ti'
      and department.id in (new.department_id, new.department_id_secondary)
  ) then
    new.role := 'developer';
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_assign_ti_full_control on public.profiles;
create trigger profiles_assign_ti_full_control
before insert or update of department_id, department_id_secondary on public.profiles
for each row execute function public.apply_ti_full_control_role();

update public.profiles profile
set role = 'developer'
where exists (
  select 1 from public.departments department
  where lower(trim(department.name)) = 'ti'
    and department.id in (profile.department_id, profile.department_id_secondary)
);
