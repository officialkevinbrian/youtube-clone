import React from "react";
import { View } from "react-native";
import { Text } from "tamagui";

// import { Container } from './styles';

const InputLabel = ({ label }: { label: string }) => {
  return <Text>{label}</Text>;
};

export default InputLabel;
