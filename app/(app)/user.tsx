import SpinnerLoader from "@/components/ui/loader";
import UserContentSection from "@/components/user/userContentSection";
import UserTopSection from "@/components/user/userTopSection";
import { supabase } from "@/config/supabase.config";
import { AuthContext } from "@/providers/AuthProvider";
import { UserMetadata } from "@supabase/supabase-js";
import { router, Stack, useNavigation, useSegments } from "expo-router";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Spinner, View } from "tamagui";

const UserProfileScreen = () => {
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
