import { YouTubeVideo } from "@/type/video.type";
import React from "react";
import { Avatar, Text, XStack, YStack } from "tamagui";

export const ChannelPreview = ({ video }: { video?: YouTubeVideo }) => {
  return (
    <YStack gap={"$3"}>
      <XStack alignItems="center" gap={"$2"}>
        <Avatar circular size="$3">
          <Avatar.Image
            accessibilityLabel="Nate Wienert"
            src={video?.thumbnailurl}
          />
          <Avatar.Fallback delayMs={600} backgroundColor="black" />
        </Avatar>
        <Text fontWeight={"bold"}>
          {video?.channelname} <Text>62.4K</Text>
        </Text>
      </XStack>
    </YStack>
  );
};
