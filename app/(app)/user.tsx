import UserContentSection from "@/components/user/userContentSection";
import UserTopSection from "@/components/user/userTopSection";
import { supabase } from "@/config/supabase.config";
import { AuthContext } from "@/providers/AuthProvider";
import { Stack } from "expo-router";
import React, { useContext } from "react";
import { Button, View, XStack } from "tamagui";

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
        <XStack p={"$2"}>
          <Button
            onPress={async () => {
              // await supabase.auth.signOut();
              alert("Under Development");
            }}
            bg={"black"}
            color={"white"}
          >
            SignOut
          </Button>
        </XStack>
        <UserContentSection />
      </View>
    </>
  );
};

export default UserProfileScreen;
