import { useContentViewModel } from "@/viewModels/contentViewModel";
import { router } from "expo-router";

export const useVideosViewController = () => {
  //logic to view single video
  const handleWatchVideo = (
    videoUrl: string,
    videoId: string,
    videoType: string
  ) => {
    router.push(videoType === "video" ? "/watch" : "/short");
    router.setParams({
      v: videoUrl,
      id: videoId,
    });
  };

  //
  const { sections, loading } = useContentViewModel();

  return {
    handleWatchVideo,
    loading,
    sections,
  };
};
