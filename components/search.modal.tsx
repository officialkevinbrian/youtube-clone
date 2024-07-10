import ArrowLeft from "@/assets/icons/ArrowLeft.svg";
import MicroIcon from "@/assets/icons/Dic.svg";
import SearchIcon from "@/assets/icons/Search.svg";
import { SearchContext } from "@/context/search.context";
import React, { useContext, useState } from "react";
import {
  Modal,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Button, Input, Stack, Text, View, XStack } from "tamagui";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { isEmpty } from "lodash";
import { router } from "expo-router";
import PlaybackIcon from "@/assets/icons/Play Back.svg";
import JumpToIcon from "@/assets/icons/Jump.svg";

function SearchModal() {
  const searchContext = useContext(SearchContext);
  const [localQuery, setLocalQuery] = useState<string>("");

  return (
    <View flex={1}>
      <Modal
        visible={searchContext?.openModal}
        style={{
          flex: 1,
          padding: 10,
        }}
      >
        <XStack alignItems="center" gap={"$2"} p={"$3"}>
          <TouchableOpacity onPress={() => searchContext?.toggleModal()}>
            <TabBarIcon Icon={ArrowLeft} />
          </TouchableOpacity>
          <XStack
            borderWidth={1}
            flexGrow={1}
            flexDirection={"row"}
            alignItems="center"
            justifyContent="space-between"
            px={"$2.5"}
            borderRadius={"$12"}
            borderColor={"$gray2"}
            bg={"$gray3"}
          >
            <TextInput
              placeholder="Search on Youtube"
              style={{
                borderWidth: 0,
                paddingVertical: 5,
                display: "flex",
                minWidth: "58%",
              }}
              onChangeText={(text) => setLocalQuery(text)}
            />
            <TouchableOpacity
              onPress={() => {
                searchContext?.updateQuery(localQuery);
              }}
            >
              <TabBarIcon Icon={SearchIcon} width={20} height={20} />
            </TouchableOpacity>
          </XStack>

          {isEmpty(localQuery) && (
            <Button size={"$2"} borderRadius={100}>
              <TabBarIcon Icon={MicroIcon} width={20} height={20} />
            </Button>
          )}
        </XStack>

        <Stack padding={"$3"} gap={"$3"}>
          {searchContext?.queryHistory?.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => searchContext.updateQuery(item)}
            >
              <XStack gap={"$2"}>
                <TabBarIcon Icon={PlaybackIcon} width={20} height={20} />
                <Text flex={1}>{item}</Text>
                <TabBarIcon Icon={JumpToIcon} width={20} height={20} />
              </XStack>
            </TouchableOpacity>
          ))}
        </Stack>
      </Modal>
    </View>
  );
}

export default SearchModal;
