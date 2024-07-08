import { View, Text } from "react-native";
import React from "react";
import { Heading, ScrollView, XStack, YStack } from "tamagui";
import { TabBarIcon } from "../navigation/TabBarIcon";
import ShortVideosIcon from "@/assets/icons/ShortVideosIcon.svg";
import shortVideosData from "@/data/video-list.json";
import ShortVideoCard from "../ui/short-video.card";

const ShortVideosWrapper = () => {
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
        {shortVideosData.map((video, index) => (
          <ShortVideoCard key={index} video={video} />
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
