import UserContentSection from "@/components/user/userContentSection";
import UserTopSection from "@/components/user/userTopSection";
import { router, Stack, useNavigation, useSegments } from "expo-router";
import React, { useEffect, useLayoutEffect } from "react";
import { View } from "tamagui";

const UserProfileScreen = () => {
  // if (true) {
  //   router.push("/(auth)");
  // }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "User Settings",
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
