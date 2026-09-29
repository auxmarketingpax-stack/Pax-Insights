-- Archiving is per user: it hides a message from that person's active inbox
-- while keeping the original conversation intact for history and auditing.
create table if not exists public.task_user_message_archives (
  profile_id uuid not null references public.profiles(id) on delete cascade,
  message_id uuid not null references public.task_user_notifications(id) on delete cascade,
  archived_at timestamptz not null default timezone('utc', now()),
  primary key (profile_id, message_id)
);

alter table public.task_user_message_archives enable row level security;

drop policy if exists "users read own archived task messages" on public.task_user_message_archives;
create policy "users read own archived task messages"
on public.task_user_message_archives
for select to authenticated
using (profile_id = auth.uid());

create or replace function public.archive_task_messages(p_message_ids uuid[])
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_count integer;
begin
  if auth.uid() is null or not public.task_user_is_enabled(auth.uid()) then
    raise exception 'Acesso às mensagens não aprovado.' using errcode = '42501';
  end if;

  insert into public.task_user_message_archives (profile_id, message_id)
  select auth.uid(), notification.id
  from public.task_user_notifications notification
  where notification.id = any(coalesce(p_message_ids, '{}'::uuid[]))
    and auth.uid() in (notification.sender_id, notification.recipient_id)
  on conflict (profile_id, message_id) do nothing;

  get diagnostics v_count = row_count;
  return v_count;
end;
$$;

revoke all on function public.archive_task_messages(uuid[]) from public;
grant execute on function public.archive_task_messages(uuid[]) to authenticated;
