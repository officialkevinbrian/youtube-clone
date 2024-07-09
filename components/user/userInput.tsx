import EditIcon from "@/assets/icons/Edit.svg";
import React from "react";
import { Separator, YStack } from "tamagui";
import { TabBarIcon } from "../navigation/TabBarIcon";
import TextInputCustom from "../TextInputWithLabel";

const UserInput: React.FC = () => {
  return (
    <YStack pt={"$3"}>
      <TextInputCustom.Root px={"$4"}>
        <TextInputCustom.Label label="Name" />
        <TextInputCustom.Input
          borderWidth={1}
          borderColor={"$colorTransparent"}
          focusStyle={{
            borderWidth: 1,
            borderColor: "$colorTransparent",
          }}
          placeholder={"Kevin Brian"}
          leftIcon={<TabBarIcon Icon={EditIcon} width={25} height={25} />}
        />
      </TextInputCustom.Root>
      <Separator borderColor={"black"} />
    </YStack>
  );
};

export default UserInput;
