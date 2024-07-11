import { YouTubeVideo } from "@/type/video.type";
import { useWatchController } from "@/viewControllers/useWatchController";
import React from "react";
import { Avatar, Text, XStack, YStack } from "tamagui";

export const ChannelPreview = () => {
  const { data } = useWatchController();

  return (
    <YStack gap={"$3"}>
      <XStack alignItems="center" gap={"$2"}>
        <Avatar circular size="$3">
          <Avatar.Image
            accessibilityLabel="Nate Wienert"
            src={data?.thumbnailurl}
          />
          <Avatar.Fallback delayMs={600} backgroundColor="black" />
        </Avatar>
        <Text fontWeight={"bold"}>
          {data?.channelname} <Text>{data?.views}K</Text>
        </Text>
      </XStack>
    </YStack>
  );
};
