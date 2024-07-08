import { router, Stack } from "expo-router";
import React from "react";
import { useWindowDimensions } from "react-native";
import { Button, Heading, Image, Text, View, XStack, YStack } from "tamagui";

const AuthHomeScreen: React.FC = () => {
  const height = useWindowDimensions().height;

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View flex={1} bg={"white"}>
        <View flex={1}>
          <Image
            flex={1}
            source={{
              uri: "https://images.pexels.com/photos/5077064/pexels-photo-5077064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
        </View>
        <View
          p={"$5"}
          bg={"white"}
          flex={0.4}
          justifyContent="space-between"
          //   borderRadius={"$9"}
          borderTopLeftRadius={"$9"}
          borderTopRightRadius={"$9"}
          position="relative"
          bottom={"$8"}
        >
          <View>
            <YStack>
              <Heading fontWeight={"bold"} fontSize={"$9"}>
                Welcome to
              </Heading>
              <Heading fontWeight={"900"} fontSize={"$9"} color={"red"}>
                Youtube
              </Heading>
            </YStack>
            <Text color={"$gray10"}>The most streaming platform today!</Text>
          </View>
          <XStack borderWidth={1} borderRadius={"$12"}>
            <Button
              onPress={() => router.push("/sign-in")}
              borderRadius={"$12"}
              bg={"black"}
              color={"white"}
              flex={1}
            >
              Sign up
            </Button>
            <Button
              onPress={() => router.push("/sign-in")}
              borderRadius={"$12"}
              flex={1}
              bg={"$colorTransparent"}
            >
              Sign in
            </Button>
          </XStack>
        </View>
      </View>
    </>
  );
};

export default AuthHomeScreen;
