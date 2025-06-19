import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tpjyejgrnwssnbnuxsfq.supabase.co';
const EXPO_PUBLIC_SUPABASE_KEY = process.env.SUPABASE_KEY ?? '';

export const supabase = createClient(supabaseUrl, EXPO_PUBLIC_SUPABASE_KEY);
