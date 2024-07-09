import LinkIcon from "@/assets/icons/Link.svg";
import RemarkIcon from "@/assets/icons/Remarks.svg";
import React from "react";
import { Button, Input, Sheet, Stack, Text, XStack } from "tamagui";
import TextInputCustom from "../TextInputWithLabel";
import { TabBarIcon } from "../navigation/TabBarIcon";
import { useLocalSearchParams } from "expo-router";

const EditInputSheet = ({ open, toggle }: { open: boolean; toggle?: any }) => {
  const { labelName, fieldName, value, currentValue } = useLocalSearchParams();

  return (
    <Sheet
      dismissOnSnapToBottom
      modal={true}
      snapPoints={[60, 50]}
      open={open}
      animation={"medium"}
      onOpenChange={(value: any) => toggle()}
    >
      <Sheet.Overlay />
      <Sheet.Handle />
      <Sheet.Frame>
        <Stack p={"$4"} gap={"$3"} justifyContent="flex-start" flex={1}>
          <TextInputCustom.Root gap={"$2"}>
            <Text fontWeight={"bold"} fontSize={"$7"}>
              {labelName}
            </Text>
            <Input
              autoFocus={true}
              value={currentValue}
              borderColor={"black"}
              borderWidth={"$1"}
              bg={"white"}
              focusStyle={{
                borderColor: "black",
                borderWidth: "$1",
              }}
            />
          </TextInputCustom.Root>

          <Stack gap={"$3"}>
            <XStack gap={"$2"} alignItems="center">
              <TabBarIcon Icon={LinkIcon} width={15} height={15} />
              <Text>Visible to anyone on YouTube</Text>
            </XStack>

            <XStack gap={"$2"} alignItems="flex-start">
              <TabBarIcon Icon={RemarkIcon} width={15} height={15} />
              <Text
                flexWrap="wrap"
                fontWeight={"$1"}
                textBreakStrategy="balanced"
              >
                Changes to your name will be reflected only on YouTube. You can
                change your name twice in 14 days.
              </Text>
            </XStack>
          </Stack>

          <Button size={"$4"} bg={"black"} color={"white"} borderRadius={"$12"}>
            Save
          </Button>
        </Stack>
      </Sheet.Frame>
    </Sheet>
  );
};

export default EditInputSheet;
