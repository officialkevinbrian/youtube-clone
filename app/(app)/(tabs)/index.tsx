import FilterListingTab from "@/components/navigation/FilterBar";
import MainHeaderBar from "@/components/navigation/MainHeaderBar";
import HomePlaylistWrapper from "@/components/wrappers/home-listing-wrapper";
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
      <HomePlaylistWrapper />
    </>
  );
}

export default HomeScreen;
