import { View } from "react-native";

export const TabBarIcon = ({ Icon, ...rest }: any) => {
  return (
    <View>
      <Icon {...rest} />
    </View>
  );
};
