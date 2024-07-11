import FullScreenIcon from "@/assets/icons/Full Screen.svg";
import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { Text, XStack, YStack } from "tamagui";
import { TabBarIcon } from "../navigation/TabBarIcon";
import PlaybackMiddleButtons from "./playback.middle";
import PlaybackTopBtn from "./playback.top-btn";

// import { Container } from './styles';

const PlayBackWrapper = ({
  videoStatus,
  videoRef,
}: {
  videoStatus: any;
  videoRef: any;
}) => {
  const [isPlaybackHidden, updatePlayback] = useState(true);
  return (
    <YStack
      onPress={() => updatePlayback((prev) => !prev)}
      justifyContent="space-between"
      position="absolute"
      height={"100%"}
      width={"100%"}
      bg={"rgba(52, 52, 52, 0.7)"}
      opacity={isPlaybackHidden ? 1 : 0}
    >
      <PlaybackTopBtn />
      {videoStatus?.isBuffering && <ActivityIndicator />}
      {videoStatus?.isBuffering ||
        (isPlaybackHidden && (
          <PlaybackMiddleButtons
            videoRef={videoRef}
            videoStatus={videoStatus}
          />
        ))}
      <XStack p={"$3"} justifyContent="space-between">
        <Text color={"white"}>0:07 / 47:25</Text>
        <TabBarIcon Icon={FullScreenIcon} width={20} />
      </XStack>
    </YStack>
  );
};

export default PlayBackWrapper;
