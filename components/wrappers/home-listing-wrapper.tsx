import React from "react";
import { ScrollView, Text, View } from "tamagui";
import videoListing from "@/data/video-list.json";
import VideoCard from "../ui/video-card";
import { VideoInterface } from "@/type/video.type";
import ShortVideosWrapper from "./short-videos.wrapper";
import ScrollableWrapper from "./scrollable-wrapper";

function HomePlaylistWrapper() {
  if (!videoListing) return <Text>No Videos</Text>;

  return (
    <ScrollableWrapper>
      {videoListing.map((video: VideoInterface, index: number) => {
        if (index == 1) {
          return <ShortVideosWrapper key={index} />;
        }
        return <VideoCard video={video} key={index} />;
      })}
    </ScrollableWrapper>
  );
}

export default HomePlaylistWrapper;
