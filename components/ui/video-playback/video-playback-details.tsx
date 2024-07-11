import DownloadBtnIcon from "@/assets/icons/Download.svg";
import LikeBtnIcon from "@/assets/icons/Like.svg";
import ShareBtnIcon from "@/assets/icons/Share.svg";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { YouTubeVideo } from "@/type/video.type";
import React from "react";
import { Avatar, Button, Stack, Text, View, XStack, YStack } from "tamagui";
import { ChannelPreview } from "./channel-preview";

const VideoPlaybackDetails: React.FC = () => {
  return (
    <Stack px={"$4"} gap={"$3"} py={"$3"}>
      <YStack>
        <Text fontWeight={"bold"}>The First Video on Youtube</Text>
        <XStack>
          <Text fontWeight={"$1"} color={"$gray9"} numberOfLines={1}>
            {`10k views `} 3 days ago
          </Text>
        </XStack>
      </YStack>
      <ChannelPreview />
      <AddonButtons />
      <PreviewComments />
    </Stack>
  );
};

export default VideoPlaybackDetails;

const AddonButtons = () => {
  const addonButtonsListing = [
    { icon: LikeBtnIcon, value: "652", id: 1, handler: () => {} },
    { icon: ShareBtnIcon, label: "Share", id: 2, handler: () => {} },
    { icon: DownloadBtnIcon, label: "Download", id: 3, handler: () => {} },
  ];

  return (
    <XStack justifyContent="space-between">
      {addonButtonsListing.map((addon) => (
        <Button borderRadius={"$12"} size={"$3"} key={addon.id} bg={"$gray6"}>
          <TabBarIcon Icon={addon.icon} width={20} />
          <Text fontWeight={"bold"}>{addon?.label ?? addon.value}</Text>
        </Button>
      ))}
    </XStack>
  );
};

const PreviewComments = () => {
  return (
    <View gap={"$2"} padding={"$2"} borderRadius={"$3"} bg={"$gray6"}>
      <XStack alignItems="center" gap={"$2"}>
        <Text fontWeight={"bold"}>Comments</Text>
        <Text color={"$gray10"} fontSize={"$1"}>
          18
        </Text>
      </XStack>
      <XStack gap={"$2"} overflow="hidden">
        <Avatar circular size="$3">
          <Avatar.Image
            accessibilityLabel="Nate Wienert"
            src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
          />
          <Avatar.Fallback delayMs={600} backgroundColor="black" />
        </Avatar>
        <Text
          fontSize={"$1"}
          lineBreakMode="head"
          color={"$gray10"}
          textBreakStrategy="balanced"
        >
          Will AI Replace this Ui Ux Designers Skills and Jobs if they take What
          The Purpose of Learning New Skills
        </Text>
      </XStack>
    </View>
  );
};
