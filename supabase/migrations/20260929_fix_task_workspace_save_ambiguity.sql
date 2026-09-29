-- The output column names of these RPCs shadowed table columns in PL/pgSQL.
-- Qualify the columns in the current audited definitions while preserving their
-- authorization and audit logic.
do $$
declare
  definition text;
begin
  select pg_get_functiondef('public.save_task_workspace_internal(jsonb,bigint)'::regprocedure) into definition;
  definition := replace(
    definition,
    'select workspace_data, revision into v_current_workspace, v_current_revision',
    'select task_shared_workspaces.workspace_data, task_shared_workspaces.revision into v_current_workspace, v_current_revision'
  );
  definition := replace(
    definition,
    'update public.task_shared_workspaces
    set workspace_data = p_workspace_data, revision = revision + 1
    where workspace_key = ''primary''
    returning revision into v_current_revision;',
    'update public.task_shared_workspaces as shared
    set workspace_data = p_workspace_data, revision = shared.revision + 1
    where shared.workspace_key = ''primary''
    returning shared.revision into v_current_revision;'
  );
  execute definition;

  select pg_get_functiondef('public.save_task_workspace(jsonb,bigint)'::regprocedure) into definition;
  definition := replace(
    definition,
    'select workspace_data into v_current',
    'select task_shared_workspaces.workspace_data into v_current'
  );
  execute definition;
end;
$$;
