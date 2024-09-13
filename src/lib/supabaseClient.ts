import { createClient } from '@supabase/supabase-js';

// SupabaseのURLと公開APIキーを設定
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Supabaseクライアントの作成
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
