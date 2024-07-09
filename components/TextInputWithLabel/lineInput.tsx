import React from "react";
import { View } from "react-native";
import { Input, XStack } from "tamagui";

// import { Container } from './styles';

const TextLineInput = ({ leftIcon, ...props }: any) => {
  return (
    <XStack
      alignItems="center"
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
      {...props}
    >
      <Input
        flex={1}
        borderRadius={"$0"}
        borderWidth={0}
        borderColor={"$colorTransparent"}
        focusStyle={{
          borderWidth: 0,
          borderColor: "$colorTransparent",
        }}
        placeholder="email@gmail.com"
        bg={"$colorTransparent"}
        {...props}
        p={"$0"}
      />
      {leftIcon}
    </XStack>
  );
};

export default TextLineInput;
