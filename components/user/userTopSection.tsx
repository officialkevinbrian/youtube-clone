import CameraIcon from "@/assets/icons/Camera_bold.svg";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Avatar, View, XStack } from "tamagui";
import { TabBarIcon } from "../navigation/TabBarIcon";

const UserTopSection = () => {
  const width = useWindowDimensions().width;
  const [image, setImage] = useState<string | null>(null);
  const [bannerImage, setBannerImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    //check if not canceled
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickBannerImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    //check if not canceled
    if (!result.canceled) {
      setBannerImage(result.assets[0].uri);
    }
  };

  return (
    <View flex={0.4} bg={"black"} justifyContent="center" alignItems="center">
      <ImageBackground
        style={{
          flex: 1,
          width,
        }}
        resizeMode="cover"
        src={
          bannerImage ??
          "https://i.ytimg.com/vi/EgGrPReAdDw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoECeii-d9KqbrIcBP1lWFBghEtg"
        }
      >
        <View bg={"rgba(1, 1, 1, 0.6)"} flex={1}>
          <XStack p={"$3"} justifyContent="flex-end">
            <TouchableOpacity onPress={pickBannerImage}>
              <TabBarIcon Icon={CameraIcon} width={25} height={25} />
            </TouchableOpacity>
          </XStack>

          <TouchableOpacity onPress={pickImage}>
            <XStack alignItems="center" justifyContent="center">
              <XStack>
                <Avatar circular size="$8">
                  <Avatar.Image
                    accessibilityLabel="Nate Wienert"
                    src={
                      image ??
                      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
                    }
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
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default UserTopSection;
