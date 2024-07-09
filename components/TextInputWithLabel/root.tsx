import React from "react";
import { XStack, YStack } from "tamagui";

// import { Container } from './styles';

const TextInputRoot = ({ children, ...rest }: any) => {
  return <YStack {...rest}>{children}</YStack>;
};

export default TextInputRoot;
