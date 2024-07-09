import { createClient } from "@supabase/supabase-js";
import * as AsyncStorage from "@react-native-async-storage/async-storage";

const SupabaseUrl = process.env.SUPABASE_URL as any;
const SupabaseApiKey = process.env.SUPABASE_API_KEY as any;

export const supabase = createClient(SupabaseUrl, SupabaseApiKey);
