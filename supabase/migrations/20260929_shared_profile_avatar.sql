-- A profile photo is part of the employee directory, not only the browser
-- session. This lets it be rendered beside the person's name for every user.
alter table public.profiles
  add column if not exists avatar_url text;

comment on column public.profiles.avatar_url is
  'Shared personal avatar displayed to collaborators in CRM and Tarefas.';

-- Preserve photos that were saved before the shared directory field existed.
update public.profiles as profile
set avatar_url = nullif(user_account.raw_user_meta_data ->> 'avatar_url', '')
from auth.users as user_account
where user_account.id = profile.id
  and coalesce(profile.avatar_url, '') = ''
  and nullif(user_account.raw_user_meta_data ->> 'avatar_url', '') is not null;
