import WaveIcon from "@/assets/icons/Movie.svg";
import NotIcon from "@/assets/icons/Notification.svg";
import SearchIcon from "@/assets/icons/Search.svg";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Avatar, Image, Text, View, XStack } from "tamagui";
import { TabBarIcon } from "./TabBarIcon";
import YoutubeIconLabel from "@/assets/icons/YoutubeIconLabel.svg";
import { SearchContext } from "@/context/search.context";
import SearchModal from "../search.modal";

export default function MainHeaderBar() {
  const searchContext = useContext(SearchContext);

  const iconListing = [
    { id: 1, icon: WaveIcon, handler: () => {} },
    { id: 2, icon: NotIcon, handler: () => {} },
    { id: 3, icon: SearchIcon, handler: () => searchContext?.toggleModal() },
  ];

  return (
    <>
      <SearchModal />
      <XStack
        px={"$4"}
        pt={"$6"}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* logo */}
        <View>
          <TabBarIcon Icon={YoutubeIconLabel} width={90} />
        </View>

        {/* icons */}
        <XStack alignItems="center" justifyContent="space-between" gap={"$2.5"}>
          {iconListing.map((item) => (
            <TouchableOpacity key={item.id} onPress={item.handler}>
              <TabBarIcon Icon={item.icon} width={20} />
            </TouchableOpacity>
          ))}
          <Avatar circular size="$2.5">
            <Avatar.Image
              accessibilityLabel="Cam"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
        </XStack>
      </XStack>
    </>
  );
}
