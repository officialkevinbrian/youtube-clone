// import videoListing from "@/data/video-list.json";
import { VideoInterface, YouTubeVideo } from "@/type/video.type";
import React from "react";
import { Text } from "tamagui";
import VideoCard from "../ui/video-card";
import ScrollableWrapper from "./scrollable-wrapper";
import ShortVideosWrapper from "./short-videos.wrapper";
import useFetchSupabase from "@/hooks/useFetch";
import SpinnerLoader from "../ui/loader";

function HomePlaylistWrapper() {
  const { loading, data: videoListing, error } = useFetchSupabase();

  if (loading) return <SpinnerLoader />;

  if (!videoListing) return <Text>No Videos</Text>;

  return (
    <ScrollableWrapper>
      {videoListing.map((video: YouTubeVideo, index: number) => {
        if (index == 1) {
          return <ShortVideosWrapper key={index} />;
        }
        return <VideoCard video={video} key={index} />;
      })}
    </ScrollableWrapper>
  );
}

export default HomePlaylistWrapper;
