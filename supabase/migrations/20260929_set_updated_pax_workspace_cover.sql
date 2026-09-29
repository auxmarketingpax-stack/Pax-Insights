-- Shared public cover chosen for the Pax Rio Verde workspace.
insert into public.task_workspace_appearance (workspace_key, cover_image_url)
values ('primary', './workspace-cover-pax-rio-verde-2.png')
on conflict (workspace_key) do update
set cover_image_url = excluded.cover_image_url,
    updated_at = timezone('utc', now());
