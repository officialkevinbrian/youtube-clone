import FilterListingTab from "@/components/navigation/FilterBar";
import MainHeaderBar from "@/components/navigation/MainHeaderBar";
import VideosView from "@/views/videosView";
import { Stack } from "expo-router";
import React from "react";

function HomeScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <MainHeaderBar />,
        }}
      />
      <FilterListingTab />
      <VideosView />
    </>
  );
}

export default HomeScreen;
