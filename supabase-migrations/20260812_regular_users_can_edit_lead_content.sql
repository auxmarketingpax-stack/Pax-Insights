begin;

create or replace function public.app_can_edit_funnel_content(target_funnel_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.app_is_approved_user()
    and public.app_funnel_access_level(target_funnel_id) = 'edit';
$$;

grant execute on function public.app_can_edit_funnel_content(uuid) to authenticated;

comment on function public.app_can_edit_funnel_content(uuid)
is 'Permite editar conteúdo operacional do funil para qualquer usuário aprovado com acesso edit, sem liberar edição estrutural/admin.';

commit;
