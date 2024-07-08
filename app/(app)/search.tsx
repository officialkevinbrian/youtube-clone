import MainHeaderBar from "@/components/navigation/MainHeaderBar";
import VideoCard from "@/components/ui/video-card";
import { SearchContext } from "@/context/search.context";
import videosData from "@/data/video-list.json";
import { VideoInterface } from "@/type/video.type";
import { Stack } from "expo-router";
import { isEmpty } from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { Heading, ScrollView, View } from "tamagui";

const SearchScreen = () => {
  const [data, setData] = useState<VideoInterface[] | null>([]);
  const searchContext = useContext(SearchContext);

  useEffect(() => {
    //
    if (searchContext?.query) {
      const filterData = videosData.filter((video) =>
        video.video_title
          .toLowerCase()
          .includes(searchContext?.query.toLowerCase())
      );
      setData(filterData);
      return;
    }

    //
    setData([]);

    return () => {
      console.log("🔴🔴🔴 UnMounting");
    };
  }, [searchContext?.query]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        gap: 15,
      }}
    >
      <Stack.Screen
        options={{
          header: () => <MainHeaderBar />,
        }}
      />
      <View>
        {isEmpty(data) && (
          <Heading py={"$5"} color={"gray"}>
            Try to such another video
          </Heading>
        )}
      </View>
      {data?.map((video, index) => (
        <VideoCard video={video} key={index} />
      ))}
    </ScrollView>
  );
};

export default SearchScreen;
