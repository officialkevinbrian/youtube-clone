import DownloadBtnIcon from "@/assets/icons/Download.svg";
import LikeBtnIcon from "@/assets/icons/Like.svg";
import ShareBtnIcon from "@/assets/icons/Share.svg";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { YouTubeVideo } from "@/type/video.type";
import React from "react";
import { Avatar, Button, Stack, Text, View, XStack, YStack } from "tamagui";
import { ChannelPreview } from "./channel-preview";
import { useWatchController } from "@/viewControllers/useWatchController";
import { AddonButtons } from "./action-buttons";
import { PreviewComments } from "./preview-comments";

const VideoPlaybackDetails: React.FC = () => {
  const { data } = useWatchController();

  return (
    <Stack px={"$4"} gap={"$3"} py={"$3"}>
      <YStack>
        <Text fontWeight={"bold"}>{data?.title}</Text>
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
