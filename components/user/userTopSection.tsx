import CameraIcon from "@/assets/icons/Camera_bold.svg";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import {
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Avatar, Button, View, XStack } from "tamagui";
import { TabBarIcon } from "../navigation/TabBarIcon";

const UserTopSection = () => {
  //collect data wit react hook forms
  const form = useForm({
    defaultValues: {
      banner_img:
        "https://i.ytimg.com/vi/EgGrPReAdDw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoECeii-d9KqbrIcBP1lWFBghEtg",
      profile_img:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80",
    },
  });
  const width = useWindowDimensions().width;
  const [changed, setChanged] = useState<boolean>(false);
  const { banner_img, profile_img } = useWatch({
    control: form.control,
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    //check if not canceled
    if (!result.canceled) {
      const uri = result.assets[0].uri;
      form.setValue("profile_img", uri);
      setChanged(true); //this will make sure the save button appears
    }
  };

  const pickBannerImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    //check if not canceled
    if (!result.canceled) {
      const uri = result.assets[0].uri;
      form.setValue("banner_img", uri);
      setChanged(true); //this will make sure the save button appears
    }
  };

  //handle
  const handleUpdate = () => {
    const input = {
      profile_img,
      banner_img,
    };

    alert("Updated");

    // ! Implement SupaBase Image Uploading and save to user profile
  };

  return (
    <View flex={0.4} bg={"black"} justifyContent="center" alignItems="center">
      <ImageBackground
        style={{
          flex: 1,
          width,
        }}
        resizeMode="cover"
        src={banner_img}
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
                    src={profile_img}
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

          {changed && (
            <XStack alignItems="center" justifyContent="center" p={"$3"}>
              <Button
                onPress={form.handleSubmit(handleUpdate, (err) =>
                  alert("Failed to update")
                )}
                size={"$3"}
                borderRadius={"$12"}
              >
                Save
              </Button>
            </XStack>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default UserTopSection;
