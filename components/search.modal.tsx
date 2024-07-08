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
import { Button, Input, View, XStack } from "tamagui";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { isEmpty } from "lodash";

function SearchModal() {
  const searchContext = useContext(SearchContext);
  const [localQuery, setLocalQuery] = useState<string | null>("");
  return (
    <View flex={1}>
      <Modal visible={searchContext?.openModal}>
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
              style={{ flexShrink: 1, borderWidth: 0, paddingVertical: 5 }}
              onChangeText={(text) => setLocalQuery(text)}
            />
            <TouchableHighlight
              onPress={() => searchContext?.updateQuery(localQuery)}
            >
              <TabBarIcon Icon={SearchIcon} width={20} height={20} flex={0} />
            </TouchableHighlight>
          </XStack>

          {isEmpty(localQuery) && (
            <Button size={"$2"} borderRadius={100}>
              <TabBarIcon Icon={MicroIcon} width={20} height={20} />
            </Button>
          )}
        </XStack>
      </Modal>
    </View>
  );
}

export default SearchModal;
