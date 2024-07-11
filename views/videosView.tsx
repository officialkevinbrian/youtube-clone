import VideoCard from "@/components/ui/video-card";
import { YouTubeVideo } from "@/type/video.type";
import { useVideosViewController } from "@/viewControllers/useVideosViewController";
import React from "react";
import { FlatList } from "react-native";
import { Text, View } from "tamagui";

const VideosView: React.FC = () => {
  const { videos, loading } = useVideosViewController() as any;

  return (
    <View>
      <FlatList
        contentContainerStyle={{
          gap: 20,
        }}
        data={videos}
        refreshing={loading}
        onRefresh={() => alert("Refreshed")}
        ListEmptyComponent={<Text>No Videos Found</Text>}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: YouTubeVideo }) => (
          <VideoCard video={item} />
        )}
      />
    </View>
  );
};

export default VideosView;
