import { useWatchController } from "@/viewControllers/useWatchController";
import { ResizeMode, Video } from "expo-av";
import * as React from "react";
import { Spinner, View, XStack } from "tamagui";
import PlayBackWrapper from "../../video-playback/playback.wrapper";

export default function VideoPlayBackView() {
  const {
    data,
    loading,
    videoRef,
    videoStatus,
    windowDimension,
    onPlaybackStatusUpdate,
    onReadyForDisplay,
  } = useWatchController();

  if (!data || loading) return <Spinner />;

  return (
    <>
      <View gap={"$2.5"}>
        <XStack onPress={() => {}}>
          <Video
            ref={videoRef}
            style={{
              borderWidth: 0,
              width: windowDimension.width,
              height: (windowDimension.height / 100) * 35,
              alignSelf: "center",
              flex: 1,
            }}
            source={{
              uri: data?.videourl,
            }}
            useNativeControls={false}
            resizeMode={ResizeMode.COVER}
            isLooping
            onPlaybackStatusUpdate={onPlaybackStatusUpdate}
            onReadyForDisplay={onReadyForDisplay}
          />

          <PlayBackWrapper videoStatus={videoStatus} videoRef={videoRef} />
        </XStack>
      </View>
    </>
  );
}
