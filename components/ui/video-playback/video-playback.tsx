import { useWatchController } from "@/viewControllers/useWatchController";
import { ResizeMode, Video } from "expo-av";
import * as React from "react";
import { Slider, View, XStack } from "tamagui";

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

  // if (!data || loading) return <SpinnerLoader />;

  // console.log(videoStatus?.playbackInstancePosition);

  return (
    <>
      <View gap={"$2.5"} bg={"$black5"}>
        <XStack bg={"black"}>
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
            useNativeControls={true}
            resizeMode={ResizeMode.COVER}
            isLooping
            onPlaybackStatusUpdate={onPlaybackStatusUpdate}
            onReadyForDisplay={onReadyForDisplay}
            posterSource={{ uri: data?.thumbnailurl }}
            usePoster={true}
            posterStyle={{
              resizeMode: "cover",
            }}
          />

          {/* <PlayBackWrapper videoStatus={videoStatus} videoRef={videoRef} /> */}
        </XStack>
        {false && (
          <View p={"$2"} position="relative" bottom={"$2"} mx={"$2"}>
            <Slider
              min={0}
              // max={
              //   videoStatus?.playbackInstancePosition
              //     ? videoStatus?.playbackInstancePosition
              //     : 0
              // }
              onValueChange={(value) =>
                videoRef?.current?.setPositionAsync(value)
              }
              value={[videoStatus?.playbackInstancePosition]}
            >
              <Slider.Track h={2} bg={"black"}>
                <Slider.TrackActive />
              </Slider.Track>
              <Slider.Thumb
                index={0}
                size={"$1.5"}
                bg={"red"}
                circular
                borderWidth={0}
              />
            </Slider>
          </View>
        )}
      </View>
    </>
  );
}
