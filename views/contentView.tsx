import VideoCard from "@/components/ui/video-card";
import ShortVideosContentView from "@/models/shortVideoContent";
import { useVideosViewController } from "@/viewControllers/useVideosViewController";
import React from "react";
import { SectionList } from "react-native";
import { View } from "tamagui";

const ContentView: React.FC = () => {
  const { loading, sections } = useVideosViewController() as any;

  return (
    <View>
      <SectionList
        sections={sections}
        refreshing={loading}
        contentContainerStyle={{
          gap: 20,
        }}
        renderItem={({ item: { type, content } }) => {
          if (type === "video") {
            return <VideoCard video={content} />;
          }
          return null;
        }}
        renderSectionHeader={({ section: { title, data, type } }) => {
          return <ShortVideosContentView data={data} />;
        }}
      />
    </View>
  );
};

export default ContentView;
