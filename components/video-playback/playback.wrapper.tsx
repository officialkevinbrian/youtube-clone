import React, { useState } from "react";
import { View, YStack } from "tamagui";

// import { Container } from './styles';

const PlayBackWrapper = ({
  children,
  videoStatus,
  videoRef,
}: {
  children: any;
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
      {children}
    </YStack>
  );
};

export default PlayBackWrapper;
