import UserContentSection from "@/components/user/userContentSection";
import UserTopSection from "@/components/user/userTopSection";
import { Stack } from "expo-router";
import React from "react";
import { View } from "tamagui";

const UserProfileScreen: React.FC = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Channel settings",
        }}
      />

      <View flex={1}>
        <UserTopSection />
        <UserContentSection />
      </View>
    </>
  );
};

export default UserProfileScreen;
