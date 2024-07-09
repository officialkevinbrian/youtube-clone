import { useSegments } from "expo-router";
import React from "react";
import { Heading, Text, View } from "tamagui";

// import { Container } from './styles';

const EmptyScreen: React.FC = () => {
  const segment = useSegments()[2];
  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Heading color={"black"} fontSize={"$9"}>
        Feature Coming
      </Heading>
      <Heading color={"red"} fontSize={"$9"}>
        Soon
      </Heading>
      <Heading color={"gray"} fontSize={"$8"}>
        {segment} page
      </Heading>
    </View>
  );
};

export default EmptyScreen;
