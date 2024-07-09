import EditIcon from "@/assets/icons/Edit.svg";
import React from "react";
import { Separator, YStack } from "tamagui";
import { TabBarIcon } from "../navigation/TabBarIcon";
import TextInputCustom from "../TextInputWithLabel";

interface userDataType {
  id: number;
  label: string;
  currentValue: string;
}
[];

const UserInput = ({ data }: { data: userDataType }) => {
  return (
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
          leftIcon={<TabBarIcon Icon={EditIcon} width={25} height={25} />}
        />
      </TextInputCustom.Root>
      <Separator borderColor={"black"} />
    </YStack>
  );
};

export default UserInput;
