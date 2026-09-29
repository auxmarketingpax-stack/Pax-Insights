-- The audited save routine also needs to recognise the full-control role.
-- Without this, the first shared workspace save rejected a Director/full-control
-- user's assigned tasks, leaving logo and cover changes trapped in one browser.
do $$
declare
  definition text;
begin
  select pg_get_functiondef('public.save_task_workspace_internal(jsonb,bigint)'::regprocedure)
    into definition;

  definition := replace(
    definition,
    'v_actor.role not in (''admin'', ''management'')',
    'v_actor.role not in (''admin'', ''management'', ''developer'')'
  );
  execute definition;
end;
$$;
