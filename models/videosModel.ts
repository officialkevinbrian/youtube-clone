import { supabase } from "@/config/supabase.config";

export const fetchVideos = async () => {
  try {
    let response = await supabase.from("videos").select();
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
