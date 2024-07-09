import YouTubeIcon from "@/assets/icons/YoutubeIconLabel.svg";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { supabase } from "@/config/supabase.config";
import { AuthContext } from "@/providers/AuthProvider";
import { router, Stack } from "expo-router";
import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Heading, Input, Spinner, Text, View, YStack } from "tamagui";

const SignUpScreen = () => {
  const form = useForm();

  // I could have used tanstack react query
  // but for small projects I preferred to not use too many dependencies

  //hold loading & errors
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const authUser = useContext(AuthContext);

  const handleSubmitForm = async (inputData: any) => {
    console.log("Submitted");
    //form submitted
    if (!inputData) {
      alert("Invalid data");
      return;
    }

    //set loading indicator
    setLoading(true);

    //call supabase function to register the user
    const { data, error } = await supabase.auth.signUp({
      email: inputData?.email,
      password: inputData?.password,
    });

    //stop loader
    setLoading(false);

    if (data?.session) {
      //update session
      await supabase.auth.setSession(data.session);
      data?.session;

      //send user to home screen
      router.navigate("/(tabs)");
    }

    if (error) {
      console.log("We got an error dudes", error);
      setError(error.message);
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
        <YStack gap={"$4"} alignItems="center">
          <TabBarIcon Icon={YouTubeIcon} />
          <Heading lineHeight={"$1"} textAlign="center">
            Create New YouTube Account
          </Heading>
          <Text>Sign up with your email here</Text>
        </YStack>

        <YStack gap={"$3"}>
          {inputsList.map((item) => (
            <Controller
              key={item.id}
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

          <View
            borderColor={"red"}
            borderWidth={1}
            p={"$2"}
            borderRadius={"$2"}
            bg={"$red2"}
            opacity={error ? 1 : 0}
          >
            <Text fontWeight={"bold"} color={"red"}>
              {error}
            </Text>
          </View>
          <Button
            onPress={form.handleSubmit(handleSubmitForm, (err) =>
              alert("Invalid data")
            )}
            disabled={loading}
            disabledStyle={{
              backgroundColor: "black",
            }}
            bg={"black"}
            color={"white"}
            borderRadius={"$12"}
          >
            {loading ? <Spinner color={"white"} /> : "Sign Up"}
          </Button>
        </YStack>
      </View>
    </>
  );
};

export default SignUpScreen;

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
