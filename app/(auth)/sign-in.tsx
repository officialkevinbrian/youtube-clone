import YoutubeIcon from "@/assets/icons/YoutubeIconLabel.svg";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { router, Stack } from "expo-router";
import React from "react";
import { Button, Heading, Input, Text, View, YStack } from "tamagui";

const SignInScreen: React.FC = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View bg={"white"} flex={1} justifyContent="center" p={"$4"} gap={"$6"}>
        <YStack>
          <TabBarIcon Icon={YoutubeIcon} />
          <Heading>Let's sign you in</Heading>
          <Text>Sign up with your email here</Text>
        </YStack>

        <YStack gap={"$3"}>
          <InputWithLabel
            label="Email"
            placeholder={"Enter your email here..."}
          />
          <InputWithLabel label="Password" placeholder={"Password"} />
          <Button bg={"black"} color={"white"} borderRadius={"$12"}>
            Sign in
          </Button>

          <Button
            onPress={() => router.navigate("/(tabs)/")}
            bg={"$gray5"}
            color={"$gray9"}
            borderRadius={"$12"}
          >
            Skip
          </Button>
        </YStack>
      </View>
    </>
  );
};

export default SignInScreen;

const InputWithLabel = ({ label, ...rest }: { label: string; rest?: any }) => {
  return (
    <YStack>
      <Text>{label}</Text>
      <Input
        bg={"$colorTransparent"}
        borderRadius={"$0"}
        borderBottomWidth={1}
        borderBottomColor={"$gray8"}
        borderLeftColor={"$colorTransparent"}
        borderRightColor={"$colorTransparent"}
        borderTopColor={"$colorTransparent"}
        placeholder="email@gmail.com"
        outlineColor={"$colorTransparent"}
        {...rest}
        focusStyle={{
          borderRadius: "$0",
          borderBottomWidth: 1,
          borderBottomColor: "black",
          borderLeftColor: "$colorTransparent",
          borderRightColor: "$colorTransparent",
          borderTopColor: "$colorTransparent",
          outlineColor: "$colorTransparent",
        }}
        p={"$0"}
      />
    </YStack>
  );
};
