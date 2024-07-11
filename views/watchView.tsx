import VideoPlayBackView from "@/components/ui/video-playback/video-playback";
import VideoPlaybackDetails from "@/components/ui/video-playback/video-playback-details";
import { Stack } from "expo-router";
import React from "react";
import { View } from "tamagui";

const WatchView: React.FC = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <VideoPlayBackView />
      <VideoPlaybackDetails />
    </View>
  );
};

export default WatchView;
