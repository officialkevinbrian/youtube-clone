import EditIcon from "@/assets/icons/Edit.svg";
import CopyIcon from "@/assets/icons/Save.svg";
import React, { useState } from "react";
import { Separator, Text, XStack, YStack } from "tamagui";
import { TabBarIcon } from "../navigation/TabBarIcon";
import TextInputCustom from "../TextInputWithLabel";
import EditInputSheet from "./editInput";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

interface userDataType {
  id: number;
  label: string;
  currentValue: string;
  hasCopyBtn: boolean;
  fieldName: string;
}
[];

const UserInput = ({ data }: { data: userDataType }) => {
  const [openSheet, setOpenSheet] = useState<boolean>(false);

  const toggleSheet = () => {
    setOpenSheet((prev) => !prev);
  };

  //this methods sets the router params to be used in sheet form
  const handleSetParams = ({
    fieldName,
    value,
    currentValue,
    labelName,
  }: {
    fieldName: string;
    value?: string;
    currentValue: string;
    labelName: string;
  }) => {
    toggleSheet();
    router.setParams({
      labelName,
      fieldName,
      value,
      currentValue,
    });
  };

  return (
    <>
      <EditInputSheet open={openSheet} toggle={toggleSheet} />
      <YStack pt={"$3"}>
        <TextInputCustom.Root px={"$4"}>
          <TextInputCustom.Label label={data?.label} />
          <XStack justifyContent="space-between" alignItems="center" py={"$2"}>
            <Text numberOfLines={1} color={"$gray10"}>
              {data?.currentValue}
            </Text>
            {data?.hasCopyBtn ? (
              <TouchableOpacity
                onPress={() => {
                  alert("Text Copied");
                }}
              >
                <TabBarIcon Icon={CopyIcon} width={25} height={25} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  handleSetParams({
                    labelName: data?.label,
                    fieldName: data?.fieldName,
                    currentValue: data?.currentValue,
                    value: data?.currentValue,
                  });
                }}
              >
                <TabBarIcon Icon={EditIcon} width={25} height={25} />
              </TouchableOpacity>
            )}
          </XStack>
        </TextInputCustom.Root>
        <Separator borderColor={"black"} />
      </YStack>
    </>
  );
};

export default UserInput;
