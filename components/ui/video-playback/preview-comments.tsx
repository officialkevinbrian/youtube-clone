import React from "react";
import { Avatar, Text, View, XStack } from "tamagui";

export const PreviewComments = () => {
  return (
    <View gap={"$2"} padding={"$2"} borderRadius={"$3"} bg={"$gray6"}>
      <XStack alignItems="center" gap={"$2"}>
        <Text fontWeight={"bold"}>Comments</Text>
        <Text color={"$gray10"} fontSize={"$1"}>
          18
        </Text>
      </XStack>
      <XStack gap={"$2"} overflow="hidden">
        <Avatar circular size="$3">
          <Avatar.Image
            accessibilityLabel="Nate Wienert"
            src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
          />
          <Avatar.Fallback delayMs={600} backgroundColor="black" />
        </Avatar>
        <Text
          fontSize={"$1"}
          lineBreakMode="head"
          color={"$gray10"}
          textBreakStrategy="balanced"
        >
          Will AI Replace this Ui Ux Designers Skills and Jobs if they take What
          The Purpose of Learning New Skills
        </Text>
      </XStack>
    </View>
  );
};
