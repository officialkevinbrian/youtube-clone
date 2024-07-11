import { useFetchSelect } from "@/hooks/useFetch";
import { AVPlaybackStatus, VideoReadyForDisplayEvent } from "expo-av";
import { useLocalSearchParams } from "expo-router";
import { useRef, useState } from "react";
import { useWindowDimensions } from "react-native";

export const useWatchController = () => {
  //we need to fetch the single video
  const localParams = useLocalSearchParams() as any;

  //get single video
  const { data: video, loading } = useFetchSelect("videos", localParams?.id);

  //
  const videoRef = useRef(null);

  //screen dimension
  const windowDimension = useWindowDimensions();

  const [videoStatus, setVideoStatus] = useState<AVPlaybackStatus | {}>(
    {} as unknown as AVPlaybackStatus
  );

  //onPlaybackStatusUpdate
  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setVideoStatus({
        playbackInstancePosition: status.positionMillis,
        playbackInstanceDuration: status.durationMillis,
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        isBuffering: status.isBuffering,
        rate: status.rate,
        muted: status.isMuted,
        volume: status.volume,
        // loopingType: status.isLooping ? LOOPING_TYPE_ONE : LOOPING_TYPE_ALL,
        shouldCorrectPitch: status.shouldCorrectPitch,
      });
    }
  };

  //onReadyForDisplay
  const onReadyForDisplay = (event: VideoReadyForDisplayEvent) => {
    // console.log("Read to display", event);
  };

  return {
    data: video,
    loading,
    videoRef,
    videoStatus,
    windowDimension,
    onPlaybackStatusUpdate,
    onReadyForDisplay,
  };
};
