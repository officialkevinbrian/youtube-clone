import SpinnerLoader from "@/components/ui/loader";
import { router } from "expo-router";
import videosListing from "@/data/video-list.json";
import useFetchSupabase from "@/hooks/useFetch";

export const useVideosViewController = () => {
  //list the videos from the view model
  const { data: videos, loading } = useFetchSupabase();

  //logic to view single video
  const handleWatchVideo = (videoUrl: string, videoId: string) => {
    router.push("/watch");
    router.setParams({
      v: videoUrl,
      id: videoId,
    });
  };

  //

  return {
    handleWatchVideo,
    videos,
    loading,
  };
};
