import { VideoInterface, YouTubeVideo } from "@/type/video.type";
import React from "react";
import { Text, XStack } from "tamagui";
import VideoCard from "../ui/video-card";
import ShortVideosWrapper from "../wrappers/short-videos.wrapper";
import useFetchSupabase from "@/hooks/useFetch";
import SpinnerLoader from "./loader";

export default function RecommendVideosList() {
  const { loading, data: videoListing, error } = useFetchSupabase();

  if (loading) return <SpinnerLoader />;

  if (!videoListing) return <Text>No Videos</Text>;

  return (
    <>
      {videoListing.map((video: YouTubeVideo, index: number) => {
        if (index == 1) {
          return <ShortVideosWrapper />;
        }
        return <VideoCard video={video} key={video?.id} />;
      })}
    </>
  );
}
