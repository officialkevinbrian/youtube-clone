import VideoCard from "@/components/ui/video-card";
import { YouTubeVideo } from "@/type/video.type";
import { useVideosViewController } from "@/viewControllers/useVideosViewController";
import React from "react";
import { View } from "tamagui";

const VideosView: React.FC = () => {
  const { videos } = useVideosViewController() as any;

  return (
    <View>
      {videos.map((video: YouTubeVideo) => (
        <VideoCard video={video} key={video.id} />
      ))}
    </View>
  );
};

export default VideosView;
