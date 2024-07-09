import React from "react";
import { Text, View } from "tamagui";
import UserInput from "./userInput";

const UserContentSection = () => {
  const userData = [
    {
      id: 1,
      label: "Name",
      currentValue: "realkevinbrian",
      fieldName: "username",
    },
    {
      id: 2,
      label: "Channel Name",
      currentValue: "@realkevinbrian",
      fieldName: "channel_name",
    },
    {
      id: 3,
      label: "Channel URL",
      currentValue: "https://www.youtube.com/@realkevinbrian",
      hasCopyBtn: true,
      fieldName: "channel_url",
    },
    {
      id: 4,
      label: "Description",
      fieldName: "channel_description",
      currentValue:
        "Build your design system - Lesson 3 : Introduction to design systems",
    },
  ];

  return (
    <View flex={1} gap={"$1"}>
      {userData.map((item: any) => (
        <UserInput key={item.id} data={item} />
      ))}
    </View>
  );
};

export default UserContentSection;
