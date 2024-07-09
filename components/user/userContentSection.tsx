import React from "react";
import { Text, View } from "tamagui";
import UserInput from "./userInput";

const UserContentSection = () => {
  const userData = [
    {
      id: 1,
      label: "Name",
      currentValue: "realkevinbrian",
    },
    {
      id: 2,
      label: "Handle",
      currentValue: "@realkevinbrian",
    },
    {
      id: 3,
      label: "Channel URL",
      currentValue: "https://www.youtube.com/@realkevinbrian",
    },
    {
      id: 4,
      label: "Description",
      currentValue:
        "Build your design system - Lesson 3 : Introduction to design systems",
    },
  ];

  return (
    <View flex={1} gap={"$1"}>
      {userData.map((item) => (
        <UserInput key={item.id} data={item} />
      ))}
    </View>
  );
};

export default UserContentSection;
