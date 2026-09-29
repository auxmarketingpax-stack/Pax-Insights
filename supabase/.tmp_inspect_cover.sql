select schemaname, tablename, policyname, cmd, qual, with_check
from pg_policies
where (schemaname = 'storage' and tablename = 'objects')
   or (schemaname = 'public' and tablename = 'task_workspace_appearance')
order by schemaname, tablename, policyname;

select pg_get_functiondef('public.save_task_workspace_appearance(text,text,text,boolean,boolean,boolean)'::regprocedure);
