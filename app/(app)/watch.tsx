import VideosView from "@/views/contentView";
import WatchView from "@/views/watchView";
import React from "react";
import { View } from "tamagui";

// import { Container } from './styles';

const WatchScreen: React.FC = () => {
  return (
    <View flex={1}>
      <WatchView />
      <VideosView />
    </View>
  );
};

export default WatchScreen;
