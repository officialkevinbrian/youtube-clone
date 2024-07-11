import { useContentViewModel } from "@/viewModels/contentViewModel";
import { router } from "expo-router";

export const useVideosViewController = () => {
  //logic to view single video
  const handleWatchVideo = (videoUrl: string, videoId: string) => {
    router.push("/watch");
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
