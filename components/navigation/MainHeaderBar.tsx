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
import { router } from "expo-router";
import { AuthContext } from "@/providers/AuthProvider";

export default function MainHeaderBar() {
  const searchContext = useContext(SearchContext);
  const { session } = useContext(AuthContext);

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
          <Avatar
            circular
            size="$2.5"
            bg={"black"}
            onPress={() => router.navigate("/user")}
          >
            <Avatar.Image
              bg={"black"}
              accessibilityLabel="Cam"
              src={
                session?.user?.user_metadata?.profile_img ??
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHFGgx8C-UHJdCNIPAE3SvMwQPGN_pjuu4tA&s"
              }
            />
            <Avatar.Fallback backgroundColor="black" />
          </Avatar>
        </XStack>
      </XStack>
    </>
  );
}
