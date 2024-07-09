import { VideoInterface } from "@/type/video.type";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground } from "react-native";
import { Avatar, Button, Text, View, XStack, YStack } from "tamagui";
import SearchIcon from "@/assets/icons/Search.svg";
import LikeIcon from "@/assets/icons/Like_Fill.svg";
import CameraIcon from "@/assets/icons/Camera_bold.svg";
import MoreIcon from "@/assets/icons/MoreIcon.svg";
import MusicIcon from "@/assets/icons/Music.svg";
import MovieIcon from "@/assets/icons/Movie.svg";
import ShareIcon from "@/assets/icons/Share.svg";
import { TabBarIcon } from "../navigation/TabBarIcon";

const image = require("@/assets/images/banner.webp");

const ShortVideoFull = ({ video }: { video: VideoInterface }) => {
  return (
    <View flex={1}>
      <ImageBackground
        // src={image}
        resizeMode="cover"
        source={{
          uri: "https://i.ytimg.com/vi/EgGrPReAdDw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoECeii-d9KqbrIcBP1lWFBghEtg",
        }}
        style={{
          flex: 1,
        }}
      >
        <LinearGradient
          // Button Linear Gradient
          colors={["transparent", "transparent", "black"]}
          style={{
            flex: 1,
            // backgroundColor: "red",
          }}
        >
          <View flex={1}>
            <XStack
              flex={0.1}
              alignItems="flex-end"
              justifyContent="flex-end"
              gap={"$2"}
            >
              {topButtons.map((item) => (
                <TabBarIcon
                  Icon={item.Icon}
                  key={item.id}
                  width={25}
                  height={25}
                />
              ))}
            </XStack>

            <XStack flex={1} p={"$3.5"}>
              <YStack flex={1} justifyContent="flex-end">
                <XStack alignItems="center" gap={"$2"}>
                  <Avatar circular size="$4">
                    <Avatar.Image
                      accessibilityLabel="Nate Wienert"
                      src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
                    />
                    <Avatar.Fallback delayMs={600} backgroundColor="black" />
                  </Avatar>

                  <Text color={"white"}>@stevenhechinese</Text>

                  <Button size={"$2"} bg={"red"} color={"white"}>
                    Subscribe
                  </Button>
                </XStack>
                <Text color={"white"} numberOfLines={2}>
                  {video.video_title}
                </Text>
              </YStack>
              <YStack alignItems="center" justifyContent="center" gap={"$4"}>
                {leftSideButtons.map((item) => (
                  <Button
                    key={item.id}
                    size={"$2"}
                    bg={"white"}
                    borderRadius={"$12"}
                  >
                    <TabBarIcon Icon={item.Icon} width={25} height={25} />
                  </Button>
                ))}
              </YStack>
            </XStack>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default ShortVideoFull;

const topButtons = [
  { id: 1, Icon: SearchIcon },
  { id: 2, Icon: CameraIcon },
  { id: 3, Icon: MoreIcon },
];

const leftSideButtons = [
  { id: 1, Icon: LikeIcon },
  { id: 2, Icon: MusicIcon },
  { id: 3, Icon: MovieIcon },
  { id: 4, Icon: ShareIcon },
];
