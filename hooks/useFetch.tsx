import { supabase } from "@/config/supabase.config";
import { YouTubeVideo } from "@/type/video.type";
import React, { useEffect, useState } from "react";

function useFetchSupabase(table: string = "videos") {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<YouTubeVideo[]>([]);
  const [error, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { data: videos, error } = await supabase.from(table).select();

      if (error) {
        setErrorMessage(error.message ?? error.code ?? "Got error");
        return;
      }

      if (videos) {
        setData(videos);
      }
    })();

    setLoading(false);

    return () => {
      setLoading(false);
    };
  }, []);

  return {
    loading,
    data,
    error,
  };
}

export default useFetchSupabase;

export function useFetchSelect(table: string = "videos", id: string) {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<YouTubeVideo | null>(null);
  const [error, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { data: videos, error } = await supabase
        .from(table)
        .select()
        .eq("id", id)
        .limit(1);
      if (error) {
        setErrorMessage(error.message ?? error.code ?? "Got error");
        return;
      }

      if (videos) {
        setData(videos[0]);
      }
    })();

    setLoading(false);

    return () => {
      setLoading(false);
    };
  }, []);

  return {
    loading,
    data,
    error,
  };
}
