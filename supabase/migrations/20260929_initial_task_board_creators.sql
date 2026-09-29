-- Attribute only the initial structural boards for clearer history. New boards
-- keep their real `createdBy` value from the authenticated creator.
with rebuilt as (
  select jsonb_agg(
    case
      when board.value ->> 'scope' = 'personal'
        and coalesce(board.value ->> 'displayCreatorId', '') = ''
        then board.value || jsonb_build_object('displayCreatorId', board.value -> 'personalOwnerId')
      when board.value ->> 'scope' = 'department'
        and coalesce(board.value ->> 'displayCreatorId', '') = ''
        and leader.id is not null
        then board.value || jsonb_build_object('displayCreatorId', to_jsonb(leader.id::text))
      else board.value
    end
    order by board.ordinality
  ) as boards
  from public.task_shared_workspaces workspace
  cross join lateral jsonb_array_elements(workspace.workspace_data -> 'boards') with ordinality as board(value, ordinality)
  left join lateral (
    select profile.id
    from public.profiles profile
    where profile.access_status = 'approved'
      and (profile.department_id::text = board.value ->> 'departmentId' or profile.department_id_secondary::text = board.value ->> 'departmentId')
      and profile.role in ('developer', 'management', 'admin')
    order by case profile.role when 'developer' then 1 when 'management' then 2 when 'admin' then 3 else 4 end, profile.full_name
    limit 1
  ) leader on board.value ->> 'scope' = 'department'
  where workspace.workspace_key = 'primary'
)
update public.task_shared_workspaces workspace
set workspace_data = jsonb_set(workspace.workspace_data, '{boards}', rebuilt.boards, true),
    revision = workspace.revision + 1,
    updated_at = timezone('utc'::text, now())
from rebuilt
where workspace.workspace_key = 'primary';
