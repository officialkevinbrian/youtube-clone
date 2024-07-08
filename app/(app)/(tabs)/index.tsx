import FilterListingTab from "@/components/navigation/FilterBar";
import MainHeaderBar from "@/components/navigation/MainHeaderBar";
import HomePlaylistWrapper from "@/components/wrappers/home-listing-wrapper";
import { router, Stack } from "expo-router";
import React, { useEffect } from "react";
import { XStack } from "tamagui";

function HomeScreen() {
  useEffect(() => {
    if (true) {
      return router.navigate("/(auth)/");
    }

    return () => {};
  }, []);

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
