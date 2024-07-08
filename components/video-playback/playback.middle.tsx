import NextIcon from "@/assets/icons/NextIcon.svg";
import PauseIcon from "@/assets/icons/PauseIcon.svg";
import PrevIcon from "@/assets/icons/Previous.svg";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import React from "react";
import { TouchableOpacity } from "react-native";
import { View, XStack } from "tamagui";

const PlaybackMiddleButtons = ({
  videoRef,
  videoStatus,
}: {
  videoRef: any;
  videoStatus: any;
}) => {
  console.log("video reference--->", videoStatus.isBuffering);

  const middleBtnAddons = [
    { icon: PrevIcon, id: 2, handler: () => {} },
    {
      icon: PauseIcon,
      id: 3,
      handler: () =>
        videoStatus.isPlaying
          ? videoRef.current.pauseAsync()
          : videoRef.current.playAsync(),
    },
    { icon: NextIcon, id: 4, handler: () => {} },
  ];

  return <View />;
  return (
    <XStack flex={1} justifyContent="center" alignItems="center" gap={"$5"}>
      {middleBtnAddons.map((item) => (
        <TouchableOpacity
          onPress={item.handler}
          style={{
            backgroundColor: "rgba(52, 52, 52, 0.9)",
            padding: 15,
            borderRadius: 100,
          }}
          key={item.id}
        >
          <TabBarIcon Icon={item.icon} />
        </TouchableOpacity>
      ))}
    </XStack>
  );
};

export default PlaybackMiddleButtons;
