-- Shared initial cover supplied by Pax Rio Verde. It uses a relative URL so
-- the same shared setting works on GitHub Pages and on the internal server.
insert into public.task_workspace_appearance as appearance (
  workspace_key, cover_image_url, updated_at
)
values (
  'primary', './workspace-cover-pax-rio-verde.png', timezone('utc'::text, now())
)
on conflict (workspace_key) do update set
  cover_image_url = excluded.cover_image_url,
  updated_at = excluded.updated_at;
