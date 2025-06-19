import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tpjyejgrnwssnbnuxsfq.supabase.co';
// Expo only exposes environment variables prefixed with `EXPO_PUBLIC_` at runtime
// so we read the key from `EXPO_PUBLIC_SUPABASE_KEY`.
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY ?? '';

export const supabase = createClient(supabaseUrl, supabaseKey);
