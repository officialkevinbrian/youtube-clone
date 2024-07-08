import React from "react";
import { Avatar, Image, Text, View, XStack, YStack } from "tamagui";
import { TabBarIcon } from "../navigation/TabBarIcon";
import MoreIcon from "@/assets/icons/Add.svg";
import { VideoInterface } from "@/type/video.type";
import { Touchable, TouchableOpacity } from "react-native";
import { router } from "expo-router";

// import { Container } from './styles';

const VideoCard = ({ video }: { video: VideoInterface }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.navigate("/(app)/watch");
        router.setParams({
          v: "1234Vxekjekel",
        });
      }}
    >
      <View gap={"$2"}>
        {/* image */}
        <View>
          <Image
            height={200}
            src={
              "https://i.ytimg.com/vi/EgGrPReAdDw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoECeii-d9KqbrIcBP1lWFBghEtg"
            }
          />
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
              src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
            />
            <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
          </Avatar>

          <YStack flex={1} gap={"$0"}>
            <Text fontWeight={"bold"}>{video?.video_title}</Text>
            <XStack>
              <Text color={"$gray9"} fontSize={"$1"}>
                {`${video?.channel?.name} - ${video?.views} - ${video?.published_at}`}
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
