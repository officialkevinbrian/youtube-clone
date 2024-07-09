import CameraIcon from "@/assets/icons/Camera_bold.svg";
import { supabase } from "@/config/supabase.config";
import { AuthContext } from "@/providers/AuthProvider";
import generatePublicUrls from "@/utils/generatePublicUrls";
import { convertToArrayBuffer } from "@/utils/toArrayBuffer";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useContext, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import {
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Avatar, Button, Spinner, View, XStack } from "tamagui";
import { TabBarIcon } from "../navigation/TabBarIcon";

const UserTopSection = () => {
  const { session } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  if (!session) return null;

  const {
    user: { user_metadata },
  } = session;

  //collect data wit react hook forms
  const form = useForm({
    defaultValues: {
      banner_img:
        user_metadata?.banner_img ??
        "https://images.pexels.com/photos/221181/pexels-photo-221181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      profile_img:
        user_metadata?.profile_img ??
        "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
      base64: true,
    });

    //check if not canceled
    if (!result.canceled) {
      const uri = result.assets[0].uri;
      form.setValue("banner_img", uri);
      setChanged(true); //this will make sure the save button appears
    }
  };

  //handle
  const handleUpdate = async () => {
    setLoading(true);

    //group as object
    const input = {
      profile_img: await convertToArrayBuffer(profile_img),
      banner_img: await convertToArrayBuffer(banner_img),
    };

    //refactoring
    const urls = await generatePublicUrls(input);

    //Update User Profile and Banner
    await supabase.auth.updateUser({
      data: urls,
    });

    //stop loading
    setLoading(false);

    //force navigate back (🔴BUG) after updating it redirects to tabs
    router.navigate("/user");
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
                disabled={loading}
                bg="white"
              >
                {loading ? <Spinner color={"black"} /> : "Save"}
              </Button>
            </XStack>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default UserTopSection;
