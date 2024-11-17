import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL: string = process.env.EXPO_PUBLIC_SUPABASE_URL ?? '';
const SUPABASE_KEY: string = process.env.EXPO_PUBLIC_SUPABASE_KEY ?? '';

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error(`Supabase URL and Key are required.`);
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

