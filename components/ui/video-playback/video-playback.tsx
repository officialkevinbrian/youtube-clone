import FullScreenIcon from "@/assets/icons/Full Screen.svg";
import { ResizeMode, Video } from "expo-av";
import { Stack } from "expo-router";
import * as React from "react";
import { ActivityIndicator, useWindowDimensions } from "react-native";
import { Text, View, XStack } from "tamagui";
import { TabBarIcon } from "../../navigation/TabBarIcon";
import PlaybackMiddleButtons from "../../video-playback/playback.middle";
import PlaybackTopBtn from "../../video-playback/playback.top-btn";
import PlayBackWrapper from "../../video-playback/playback.wrapper";

export default function VideoPlayBackView() {
  const videoRef = React.useRef(null);

  const widthScreen = useWindowDimensions().width;
  const heightScreen = useWindowDimensions().height;

  const [status, setStatus] = React.useState(false);

  return (
    <>
      <View gap={"$2.5"} bg="red">
        <XStack onPress={() => {}}>
          <Video
            ref={videoRef}
            style={{
              borderWidth: 0,
              width: widthScreen,
              height: (heightScreen / 100) * 35,
              alignSelf: "center",
              flex: 1,
            }}
            source={{
              uri: "",
            }}
            useNativeControls={true}
            resizeMode={ResizeMode.COVER}
            isLooping
            // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />

          <PlayBackWrapper videoStatus={status} videoRef={videoRef}>
            <PlaybackTopBtn />
            {true ? (
              <ActivityIndicator />
            ) : (
              <PlaybackMiddleButtons videoRef={videoRef} videoStatus={status} />
            )}
            <XStack p={"$3"} justifyContent="space-between">
              <Text color={"white"}>0:07 / 47:25</Text>
              <TabBarIcon Icon={FullScreenIcon} width={20} />
            </XStack>
          </PlayBackWrapper>
        </XStack>
      </View>
    </>
  );
}
