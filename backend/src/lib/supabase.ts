import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.warn('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables.');
}

export const supabase = createClient(
  supabaseUrl || 'https://mock.supabase.co',
  supabaseServiceRoleKey || 'mock-key',
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);
