// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { SVGProps } from "react";
import { View } from "react-native";

export const TabBarIcon = ({
  Icon,
  ...rest
}: {
  rest?: any;
  Icon: SVGProps<any>;
}) => {
  return (
    <View>
      <Icon {...rest} />
    </View>
  );
};
