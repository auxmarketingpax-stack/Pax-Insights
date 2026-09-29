-- Task-only access: disabling a person here never touches their CRM profile.
create or replace function public.task_user_is_enabled(p_profile_id uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((select enabled from public.task_user_access where profile_id = p_profile_id), true);
$$;

revoke all on function public.task_user_is_enabled(uuid) from public;
grant execute on function public.task_user_is_enabled(uuid) to authenticated;

drop policy if exists task_shared_workspaces_read_approved on public.task_shared_workspaces;
create policy task_shared_workspaces_read_enabled
on public.task_shared_workspaces
for select to authenticated
using (public.is_approved_user() and public.task_user_is_enabled());

-- Preserve the existing, detailed workspace validation and add the Tasks-only
-- gate before it executes.  This also blocks direct RPC calls from disabled users.
do $$
declare
  definition text;
begin
  select pg_get_functiondef('public.save_task_workspace(jsonb,bigint)'::regprocedure) into definition;
  definition := replace(
    definition,
    $needle$  if auth.uid() is null then
    raise exception 'Sessão inválida.' using errcode = '42501';
  end if;$needle$,
    $replacement$  if auth.uid() is null then
    raise exception 'Sessão inválida.' using errcode = '42501';
  end if;
  if not public.task_user_is_enabled(auth.uid()) then
    raise exception 'Seu acesso a Tarefas está desativado.' using errcode = '42501';
  end if;$replacement$
  );
  execute definition;
end;
$$;

alter table public.task_user_notifications
  add column if not exists subject text;

-- Replace the legacy two-argument endpoint.  The new signature stores a
-- separate subject, validates both Task accounts and creates one durable,
-- sender/recipient-visible conversation record.
drop function if exists public.send_task_message(uuid, text);
create function public.send_task_message(
  p_recipient_id uuid,
  p_body text,
  p_subject text
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_sender public.profiles%rowtype;
  v_message_id uuid;
  v_body text := btrim(coalesce(p_body, ''));
  v_subject text := left(btrim(coalesce(p_subject, '')), 120);
begin
  select * into v_sender
  from public.profiles
  where id = auth.uid() and access_status = 'approved';
  if not found or not public.task_user_is_enabled(auth.uid()) then
    raise exception 'Acesso às mensagens não aprovado.' using errcode = '42501';
  end if;
  if p_recipient_id = v_sender.id then
    raise exception 'Escolha outro colaborador.' using errcode = '22023';
  end if;
  if char_length(v_body) < 1 or char_length(v_body) > 1500 then
    raise exception 'A mensagem deve ter entre 1 e 1500 caracteres.' using errcode = '22023';
  end if;
  if not exists (
    select 1 from public.profiles
    where id = p_recipient_id
      and access_status = 'approved'
      and public.task_user_is_enabled(id)
  ) then
    raise exception 'Destinatário indisponível em Tarefas.' using errcode = '22023';
  end if;

  insert into public.task_user_notifications (recipient_id, sender_id, subject, body)
  values (p_recipient_id, v_sender.id, nullif(v_subject, ''), v_body)
  returning id into v_message_id;
  return v_message_id;
end;
$$;

revoke all on function public.send_task_message(uuid, text, text) from public;
grant execute on function public.send_task_message(uuid, text, text) to authenticated;
