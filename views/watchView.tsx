import VideoPlayBackView from "@/components/ui/video-playback/video-playback";
import VideoPlaybackDetails from "@/components/ui/video-playback/video-playback-details";
import React from "react";
import { View } from "tamagui";

const WatchView: React.FC = () => {
  return (
    <View>
      <VideoPlayBackView />
      <VideoPlaybackDetails />
    </View>
  );
};

export default WatchView;
