import { AuthContext } from "@/providers/AuthProvider";
import React, { useContext } from "react";
import { View } from "tamagui";
import UserInput from "./userInput";

const UserContentSection = () => {
  const { session } = useContext(AuthContext);

  if (!session) return null;

  const {
    user: { user_metadata: data },
  } = session;

  const userData = [
    {
      id: 1,
      label: "Name",
      currentValue: data?.username ?? "Your name here...",
      fieldName: "username",
    },
    {
      id: 2,
      label: "Email",
      currentValue: data?.email,
      fieldName: "email",
    },
    {
      id: 3,
      label: "Channel URL",
      currentValue: `https://www.youtube.com/${data?.username ?? ""}`,
      hasCopyBtn: true,
      fieldName: "channel_url",
    },
    {
      id: 4,
      label: "Description",
      fieldName: "channel_description",
      currentValue: data?.channel_description ?? "Your bio here...",
    },
  ];

  return (
    <View flex={1} gap={"$1"}>
      {userData.map((item: any) => (
        <UserInput key={item.id} data={item} />
      ))}
    </View>
  );
};

export default UserContentSection;
