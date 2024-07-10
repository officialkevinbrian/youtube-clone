import MainHeaderBar from "@/components/navigation/MainHeaderBar";
import SpinnerLoader from "@/components/ui/loader";
import VideoCard from "@/components/ui/video-card";
import { SearchContext } from "@/context/search.context";
import useFetchSupabase from "@/hooks/useFetch";
import { YouTubeVideo } from "@/type/video.type";
import { Stack } from "expo-router";
import { debounce, isEmpty } from "lodash";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { ScrollView, Spinner, Text, View } from "tamagui";

const SearchScreen = () => {
  const searchContext = useContext(SearchContext);
  const [data, setData] = useState<YouTubeVideo[] | null>(null);
  const { loading, data: videoListing, error } = useFetchSupabase("videos");

  // Debounced version of the search query
  const debouncedSearchQuery = useMemo(() => {
    return debounce((query) => {
      if (query && videoListing) {
        const filterData = videoListing.filter((video: YouTubeVideo) =>
          video?.title.toLowerCase().includes(query.toLowerCase())
        );
        setData(filterData);
      } else {
        setData(videoListing);
      }
    }, 300);
  }, [videoListing]);

  useEffect(() => {
    if (searchContext?.query) {
      debouncedSearchQuery(searchContext.query);
    } else {
      setData(videoListing);
    }

    return () => {
      debouncedSearchQuery.cancel();
    };
  }, [searchContext?.query, videoListing, debouncedSearchQuery]);

  if (loading) {
    return <SpinnerLoader />;
  }

  if (error) {
    return <Text>Error: {error?.message}</Text>;
  }

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
      <View>{isEmpty(data) && <Spinner />}</View>
      {data?.map((video, index) => (
        <VideoCard video={video} key={index} />
      ))}
    </ScrollView>
  );
};

export default SearchScreen;
