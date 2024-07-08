import React from "react";
import { View } from "react-native";
import { ScrollView } from "tamagui";

// import { Container } from './styles';

const ScrollableWrapper = ({ children }: { children: any }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        gap: 20,
        pb: 20,
      }}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollableWrapper;
