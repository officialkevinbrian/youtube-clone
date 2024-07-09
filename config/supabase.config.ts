import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SupabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL as any;
const SupabaseApiKey = process.env.EXPO_PUBLIC_SUPABASE_API_KEY as any;

export const supabase = createClient(SupabaseUrl, SupabaseApiKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
