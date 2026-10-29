import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://clnivqqrldxzsfeumkof.supabase.co'
const supabaseKey = 'sb_publishable_qAKbMTh8UdXjJ13nCP1JgQ_Q4xLxMCv'

export const supabase = createClient(supabaseUrl, supabaseKey)

export async function getMyProfile() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data } = await supabase.from('profiles').select('*, branches(name)').eq('id', user.id).single();
  return data;
}

export function usernameToEmail(username) {
  return `${username.toLowerCase().trim()}@system.local`;
}
