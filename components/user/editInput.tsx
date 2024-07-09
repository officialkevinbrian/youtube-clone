import LinkIcon from "@/assets/icons/Link.svg";
import RemarkIcon from "@/assets/icons/Remarks.svg";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Input, Sheet, Stack, Text, XStack } from "tamagui";
import TextInputCustom from "../TextInputWithLabel";
import { TabBarIcon } from "../navigation/TabBarIcon";

const EditInputSheet = ({ open, toggle }: { open: boolean; toggle?: any }) => {
  const params = useLocalSearchParams() as unknown as any;
  const form = useForm({
    defaultValues: {
      [params.fieldName]: params?.currentValue,
    },
  });

  //form handler
  const handleSubmit = (data: any) => {
    alert("Submitted");
  };

  return (
    <Sheet
      dismissOnSnapToBottom
      modal={true}
      snapPoints={[60, 50]}
      open={open}
      animation={"medium"}
      onOpenChange={(value: any) => {
        if (!value) {
          toggle(false);
          return;
        }
      }}
    >
      <Sheet.Overlay />
      <Sheet.Handle />
      <Sheet.Frame>
        <Stack p={"$4"} gap={"$3"} justifyContent="flex-start" flex={1}>
          <Controller
            name={params?.fieldName}
            defaultValue={params?.currentValue ?? params.value}
            control={form.control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputCustom.Root gap={"$2"}>
                <Text fontWeight={"bold"} fontSize={"$7"}>
                  {params?.labelName}
                </Text>
                <Input
                  onChangeText={onChange}
                  onBlur={onBlur}
                  // autoFocus={true}
                  value={value}
                  borderColor={"black"}
                  borderWidth={"$1"}
                  bg={"white"}
                  focusStyle={{
                    borderColor: "black",
                    borderWidth: "$1",
                  }}
                />
              </TextInputCustom.Root>
            )}
          />

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

          <Button
            onPress={form.handleSubmit(handleSubmit, (err) =>
              alert("Got an error")
            )}
            size={"$4"}
            bg={"black"}
            color={"white"}
            borderRadius={"$12"}
          >
            Save
          </Button>
        </Stack>
      </Sheet.Frame>
    </Sheet>
  );
};

export default EditInputSheet;
