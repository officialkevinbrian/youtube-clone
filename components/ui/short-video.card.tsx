import MoreIcon from "@/assets/icons/MoreIcon.svg";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground } from "react-native";
import { Text, View, XStack, YStack } from "tamagui";
import { TabBarIcon } from "../navigation/TabBarIcon";
import { VideoInterface } from "@/type/video.type";

function ShortVideoCard({ video }: { video: VideoInterface }) {
  return (
    <View borderRadius={"$3"} overflow="hidden">
      <ImageBackground
        resizeMode="cover"
        resizeMethod="scale"
        source={{
          uri: "https://i.ytimg.com/vi/EgGrPReAdDw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoECeii-d9KqbrIcBP1lWFBghEtg",
        }}
      >
        <LinearGradient
          // Button Linear Gradient
          colors={["transparent", "transparent", "black"]}
          style={{
            height: 264,
            width: 158,
          }}
        >
          <YStack justifyContent="space-between" flex={1}>
            <XStack justifyContent="flex-end">
              <TabBarIcon Icon={MoreIcon} />
            </XStack>

            <XStack p={"$2"}>
              <Text
                color={"white"}
                textBreakStrategy="highQuality"
                lineBreakMode="middle"
              >
                {video?.video_title}
              </Text>
            </XStack>
          </YStack>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

export default ShortVideoCard;