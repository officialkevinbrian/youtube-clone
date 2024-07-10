import React from "react";
import { Avatar, Image, Text, View, XStack, YStack } from "tamagui";
import { TabBarIcon } from "../navigation/TabBarIcon";
import MoreIcon from "@/assets/icons/Add.svg";
import { VideoInterface, YouTubeVideo } from "@/type/video.type";
import { Touchable, TouchableOpacity } from "react-native";
import { router } from "expo-router";

// import { Container } from './styles';

const VideoCard = ({ video }: { video: YouTubeVideo }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.navigate("/(app)/watch");
        router.setParams({
          v: video.videourl,
          id: video.id,
        });
      }}
    >
      <View gap={"$2"}>
        {/* image */}
        <View>
          <Image height={200} src={video?.thumbnailurl} />
          <View
            bg={"$black10"}
            borderRadius={"$2"}
            p={"$1"}
            px={"$2"}
            position="absolute"
            right={0}
            bottom={0}
            m={"$2"}
          >
            <Text fontSize={"$1"} color={"white"}>
              12:40
            </Text>
          </View>
        </View>
        {/* details */}
        <XStack gap={"$2"} px={"$4"}>
          <Avatar circular size="$3">
            <Avatar.Image
              accessibilityLabel="Nate Wienert"
              src={video?.thumbnailurl}
            />
            <Avatar.Fallback delayMs={600} backgroundColor="black" />
          </Avatar>

          <YStack flex={1} gap={"$0"}>
            <Text fontWeight={"bold"}>{video?.title}</Text>
            <XStack>
              <Text color={"$gray9"} fontSize={"$1"}>
                {`${video?.title} - ${video?.views} views`}
              </Text>
            </XStack>
          </YStack>
          {/* <TabBarIcon Icon={MoreIcon} width={20} /> */}
        </XStack>
      </View>
    </TouchableOpacity>
  );
};

export default VideoCard;
