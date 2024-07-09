import videoListing from "@/data/video-list.json";
import { VideoInterface } from "@/type/video.type";
import React from "react";
import { Text, XStack } from "tamagui";
import VideoCard from "../ui/video-card";
import ShortVideosWrapper from "../wrappers/short-videos.wrapper";

export default function RecommendVideosList() {
  if (!videoListing) return <Text>No Videos</Text>;

  return (
    <>
      {videoListing.map((video: VideoInterface, index: number) => {
        if (index == 1) {
          return <ShortVideosWrapper key={video.video_title} />;
        }
        return <VideoCard video={video} key={video.video_title} />;
      })}
    </>
  );
}
