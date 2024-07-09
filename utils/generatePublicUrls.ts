import { supabase } from "@/config/supabase.config";
import React from "react";

export default async function generatePublicUrls(input: any) {
  //
  const urls: any = {};

  //loop thought out the inputs data
  for (const field in input) {
    const { data, error } = await supabase.storage
      .from("images")
      .upload(`${field}-${Date.now()}.png`, input[field], {
        cacheControl: "3600",
        upsert: false,
        contentType: "image/png",
      });

    const {
      data: { publicUrl },
    } = supabase.storage.from("images").getPublicUrl(`${data?.path}`);

    //set new urls
    urls[field] = publicUrl;
  }

  return urls;
}
