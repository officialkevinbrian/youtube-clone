import React from "react";
import { ScrollView, Text, View } from "tamagui";
import videoListing from "@/data/video-list.json";
import VideoCard from "./video-card";
import { VideoInterface } from "@/type/video.type";

function HomePlaylistWrapper() {
  if (!videoListing) return <Text>No Videos</Text>;

  return (
    <ScrollView
      contentContainerStyle={{
        gap: 20,
        pb: 20,
      }}
    >
      {videoListing.map((video: VideoInterface) => (
        <VideoCard video={video} />
      ))}
    </ScrollView>
  );
}

export default HomePlaylistWrapper;
