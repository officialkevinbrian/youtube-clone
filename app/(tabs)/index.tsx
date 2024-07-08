import MainHeaderBar from "@/components/navigation/MainHeaderBar";
import { Stack } from "expo-router";
import React from "react";
import { Text } from "react-native";

function HomeScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <MainHeaderBar />,
        }}
      />
      <Text>HomeScreen</Text>
    </>
  );
}

export default HomeScreen;
