import { createBrowserClient } from "@supabase/ssr";

/**
 * Creates an interactive Supabase client for client-side React components.
 * Adheres to SECURITY.md: only uses the public anonymous key, preserving RLS barriers.
 */
export function createClient() {
  const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const isValidUrl = rawUrl.startsWith("http://") || rawUrl.startsWith("https://");
  const supabaseUrl = isValidUrl ? rawUrl : "https://placeholder-xanso.supabase.co";
  const supabaseAnonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
