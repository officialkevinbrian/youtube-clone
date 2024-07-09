import React from "react";
import { Text, View } from "tamagui";
import UserInput from "./userInput";

const UserContentSection = () => {
  return (
    <View flex={1} gap={"$1"}>
      {[1, 2, 3, 4].map((item) => (
        <UserInput key={item} />
      ))}
    </View>
  );
};

export default UserContentSection;
