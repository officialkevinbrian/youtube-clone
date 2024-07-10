import MoreIcon from "@/assets/icons/MoreIcon.svg";
import { YouTubeShort } from "@/type/video.type";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { Text, View, XStack, YStack } from "tamagui";
import { TabBarIcon } from "../navigation/TabBarIcon";

function ShortVideoCard({ video }: { video: YouTubeShort }) {
  return (
    <TouchableOpacity onPress={() => router.navigate("/shorts")}>
      <View borderRadius={"$3"} overflow="hidden">
        <ImageBackground
          resizeMode="cover"
          resizeMethod="scale"
          source={{
            uri: video?.thumbnailurl,
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
                  {video?.title}
                </Text>
              </XStack>
            </YStack>
          </LinearGradient>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

export default ShortVideoCard;
