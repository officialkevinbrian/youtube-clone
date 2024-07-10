import ShortVideosIcon from "@/assets/icons/ShortVideosIcon.svg";
import useFetchSupabase from "@/hooks/useFetch";
import { YouTubeShort } from "@/type/video.type";
import React from "react";
import { Heading, ScrollView, Spinner, XStack, YStack } from "tamagui";
import { TabBarIcon } from "../navigation/TabBarIcon";
import ShortVideoCard from "../ui/short-video.card";
import SpinnerLoader from "../ui/loader";

const ShortVideosWrapper = () => {
  const { loading, data: shortVideosData, error } = useFetchSupabase("shorts");

  if (loading) return <SpinnerLoader />;

  return (
    <YStack p={"$3"}>
      <HeaderTitle />
      <ScrollView
        contentContainerStyle={{
          gap: 10,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {shortVideosData.map((video: YouTubeShort, index) => (
          <ShortVideoCard key={video.id} video={video} />
        ))}
      </ScrollView>
    </YStack>
  );
};

export default ShortVideosWrapper;

const HeaderTitle = ({ title }: { title?: string }) => {
  return (
    <XStack alignItems="center">
      <TabBarIcon Icon={ShortVideosIcon} />
      <Heading fontSize={"$3"} fontWeight={"bold"}>
        Shorts
      </Heading>
    </XStack>
  );
};
