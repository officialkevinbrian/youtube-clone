import EditIcon from "@/assets/icons/Edit.svg";
import React, { useState } from "react";
import { Separator, YStack } from "tamagui";
import { TabBarIcon } from "../navigation/TabBarIcon";
import TextInputCustom from "../TextInputWithLabel";
import EditInputSheet from "./editInput";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

interface userDataType {
  id: number;
  label: string;
  currentValue: string;
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
  }: {
    fieldName: any;
    value: any;
    currentValue: any;
  }) => {
    toggleSheet();
    router.setParams({
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
          <TextInputCustom.Input
            borderWidth={1}
            readOnly={true}
            borderColor={"$colorTransparent"}
            numberOfLines={1}
            focusStyle={{
              borderWidth: 1,
              borderColor: "$colorTransparent",
            }}
            // placeholder={"Kevin Brian"}
            value={data?.currentValue}
            leftIcon={
              <TouchableOpacity
                onPress={() => {
                  handleSetParams({
                    fieldName: "name",
                    currentValue: data?.currentValue,
                    value: "",
                  });
                }}
              >
                <TabBarIcon Icon={EditIcon} width={25} height={25} />
              </TouchableOpacity>
            }
          />
        </TextInputCustom.Root>
        <Separator borderColor={"black"} />
      </YStack>
    </>
  );
};

export default UserInput;
