import DownloadBtnIcon from "@/assets/icons/Download.svg";
import LikeBtnIcon from "@/assets/icons/Like.svg";
import ShareBtnIcon from "@/assets/icons/Share.svg";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import React from "react";
import { Button, Text, XStack } from "tamagui";

export const AddonButtons = () => {
  const addonButtonsListing = [
    { icon: LikeBtnIcon, value: "652", id: 1, handler: () => {} },
    { icon: ShareBtnIcon, label: "Share", id: 2, handler: () => {} },
    { icon: DownloadBtnIcon, label: "Download", id: 3, handler: () => {} },
  ];

  return (
    <XStack justifyContent="space-between">
      {addonButtonsListing.map((addon) => (
        <Button borderRadius={"$12"} size={"$3"} key={addon.id} bg={"$gray6"}>
          <TabBarIcon Icon={addon.icon} width={20} />
          <Text fontWeight={"bold"}>{addon?.label ?? addon.value}</Text>
        </Button>
      ))}
    </XStack>
  );
};
