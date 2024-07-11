import FilterListingTab from "@/components/navigation/FilterBar";
import MainHeaderBar from "@/components/navigation/MainHeaderBar";
import ContentView from "@/views/contentView";
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
      <ContentView />
    </>
  );
}

export default HomeScreen;
