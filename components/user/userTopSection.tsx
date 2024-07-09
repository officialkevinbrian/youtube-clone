import React from "react";
import { ImageBackground, useWindowDimensions } from "react-native";
import { Avatar, Text, View, XStack } from "tamagui";
import { TabBarIcon } from "../navigation/TabBarIcon";
import CameraIcon from "@/assets/icons/Camera_bold.svg";

const UserTopSection = () => {
  // console.log("-------->", );

  const width = useWindowDimensions().width;

  return (
    <View flex={0.3} bg={"black"} justifyContent="center" alignItems="center">
      <ImageBackground
        style={{
          flex: 1,
          width,
        }}
        resizeMode="cover"
        src="https://i.ytimg.com/vi/EgGrPReAdDw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoECeii-d9KqbrIcBP1lWFBghEtg"
      >
        <View bg={"rgba(1, 1, 1, 0.6)"} flex={1}>
          <XStack p={"$3"} justifyContent="flex-end">
            <TabBarIcon Icon={CameraIcon} width={20} height={20} />
          </XStack>

          <XStack alignItems="center" justifyContent="center">
            <XStack>
              <Avatar circular size="$8">
                <Avatar.Image
                  accessibilityLabel="Nate Wienert"
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
                />
                <Avatar.Fallback delayMs={600} backgroundColor="black" />
              </Avatar>
              <View
                borderRadius={"$12"}
                borderColor={"white"}
                borderWidth={1}
                width={"100%"}
                height={"100%"}
                bg={"rgba(1, 1, 1, 0.3)"}
                position="absolute"
                alignItems="center"
                justifyContent="center"
              >
                <TabBarIcon Icon={CameraIcon} width={25} height={25} />
              </View>
            </XStack>
          </XStack>
        </View>
      </ImageBackground>
    </View>
  );
};

export default UserTopSection;
