import { supabase } from "@/config/supabase.config";

export const fetchShorts = async () => {
  try {
    let response = await supabase.from("shorts").select();
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
