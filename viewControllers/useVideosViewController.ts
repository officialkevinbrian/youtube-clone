import { router } from "expo-router";
import videosListing from "@/data/video-list.json";

export const useVideosViewController = () => {
  //list the videos from the view model
  const { videos } = {
    videos: videosListing,
  };

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
  };
};
