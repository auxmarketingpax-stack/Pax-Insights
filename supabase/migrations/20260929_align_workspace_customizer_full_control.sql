-- Keep the server-side workspace rule aligned with the established full-control
-- Pax Insights account.  Without this, the UI allowed the editor to open but
-- Storage rejected the cover upload.
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
        or lower(trim(coalesce(profile.email, ''))) = 'auxmarketingpax@gmail.com'
        or exists (
          select 1 from public.departments department
          where lower(trim(department.name)) = 'diretoria'
            and department.id in (profile.department_id, profile.department_id_secondary)
        )
      )
  );
$$;
