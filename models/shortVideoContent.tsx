import ShortVideosIcon from "@/assets/icons/ShortVideosIcon.svg";
import { YouTubeShort } from "@/type/video.type";
import React from "react";
import { FlatList } from "react-native";
import { Heading, XStack, YStack } from "tamagui";
import { TabBarIcon } from "../components/navigation/TabBarIcon";
import ShortVideoCard from "../components/ui/short-video.card";

const ShortVideosContentView = ({ data }: { data: any }) => {
  return (
    <YStack px={"$3"}>
      <HeaderTitle />
      <FlatList
        horizontal
        data={data}
        contentContainerStyle={{
          gap: 10,
        }}
        renderItem={({
          item: { content: video },
        }: {
          item: { content: YouTubeShort };
        }) => <ShortVideoCard key={video.id} video={video} />}
      />
    </YStack>
  );
};

export default ShortVideosContentView;

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
