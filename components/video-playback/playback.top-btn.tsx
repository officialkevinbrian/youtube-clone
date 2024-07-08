import CastIcon from "@/assets/icons/Cast.svg";
import DropDownIcon from "@/assets/icons/Down.svg";
import SettingsIcon from "@/assets/icons/Settings.svg";
import CCIcons from "@/assets/icons/Subtitle.svg";
import * as React from "react";
import { XStack } from "tamagui";
import { TabBarIcon } from "../navigation/TabBarIcon";
import { router } from "expo-router";

function PlaybackTopBtn() {
  const addonsTopBtns = [
    { icon: CastIcon, id: 2, handler: () => {} },
    { icon: CCIcons, id: 3, handler: () => {} },
    { icon: SettingsIcon, id: 4, handler: () => {} },
  ];

  return (
    <XStack
      alignItems="center"
      justifyContent="space-between"
      px={"$5"}
      pt={"$6"}
    >
      <TabBarIcon
        onPress={() => router.back()}
        Icon={DropDownIcon}
        width={20}
      />
      <XStack gap={"$2"} justifyContent="flex-end" alignItems="center" flex={1}>
        {addonsTopBtns.map((item) => (
          <TabBarIcon
            onPress={item.handler}
            Icon={item.icon}
            width={25}
            key={item.id}
          />
        ))}
      </XStack>
    </XStack>
  );
}

export default PlaybackTopBtn;
