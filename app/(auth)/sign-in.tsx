import YouTubeIcon from "@/assets/icons/YoutubeIconLabel.svg";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { router, Stack } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Heading, Input, Text, View, YStack } from "tamagui";

const SignInScreen = () => {
  const form = useForm();

  const handleSubmitForm = (data: any) => {
    //form submitted
    if (!data) {
      alert("Invalid data");
      return;
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View bg={"white"} flex={1} justifyContent="center" p={"$4"} gap={"$6"}>
        <YStack>
          <TabBarIcon Icon={YouTubeIcon} />
          <Heading>Let's sign you in</Heading>
          <Text>Sign up with your email here</Text>
        </YStack>

        <YStack gap={"$3"}>
          {inputsList.map((item) => (
            <Controller
              name={item.fieldName}
              control={form.control}
              render={({ field }) => (
                <InputWithLabel
                  key={item.label}
                  label={item.label}
                  onBlur={field.onBlur}
                  value={field.value}
                  placeholder={item?.placeholder}
                  onChangeText={field.onChange}
                />
              )}
            />
          ))}
          <Button
            onPress={form.handleSubmit(handleSubmitForm, (err) =>
              alert("Invalid data")
            )}
            bg={"black"}
            color={"white"}
            borderRadius={"$12"}
          >
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

export const InputWithLabel = ({ label, ...rest }: any) => {
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
        outlineColor={"$colorTransparent"}
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
        {...rest}
      />
    </YStack>
  );
};

const inputsList = [
  { id: 1, label: "Email", placeholder: "Email", fieldName: "email" },
  { id: 2, label: "Password", placeholder: "Password", fieldName: "password" },
];
