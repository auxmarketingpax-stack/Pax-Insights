-- Structured Pax Tasks messages: a concise subject makes notifications scannable.
alter table public.task_user_notifications
  add column if not exists subject text not null default 'Mensagem da Pax Rio Verde'
  check (char_length(subject) between 1 and 120);

create or replace function public.send_task_message(
  p_recipient_id uuid,
  p_body text,
  p_subject text default 'Mensagem da Pax Rio Verde'
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
  v_subject text := btrim(coalesce(p_subject, 'Mensagem da Pax Rio Verde'));
begin
  select * into v_sender from public.profiles where id = auth.uid() and access_status = 'approved';
  if not found then raise exception 'Acesso não aprovado.' using errcode = '42501'; end if;
  if p_recipient_id = v_sender.id then raise exception 'Escolha outro colaborador.' using errcode = '22023'; end if;
  if char_length(v_body) < 1 or char_length(v_body) > 1500 then raise exception 'A mensagem deve ter entre 1 e 1500 caracteres.' using errcode = '22023'; end if;
  if char_length(v_subject) < 1 or char_length(v_subject) > 120 then raise exception 'O assunto deve ter entre 1 e 120 caracteres.' using errcode = '22023'; end if;
  if not exists (select 1 from public.profiles where id = p_recipient_id and access_status = 'approved') then raise exception 'Destinatário indisponível.' using errcode = '22023'; end if;
  insert into public.task_user_notifications (recipient_id, sender_id, subject, body) values (p_recipient_id, v_sender.id, v_subject, v_body) returning id into v_message_id;
  return v_message_id;
end;
$$;

revoke all on function public.send_task_message(uuid, text, text) from public;
grant execute on function public.send_task_message(uuid, text, text) to authenticated;
