import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://clnivqqrldxzsfeumkof.supabase.co'
const supabaseKey = 'sb_publishable_qAKbMTh8UdXjJ13nCP1JgQ_Q4xLxMCv'

export const supabase = createClient(supabaseUrl, supabaseKey)
