import React from "react";
import { Modal } from "react-native";
import { Spinner, View } from "tamagui";

// import { Container } from './styles';

const SpinnerLoader: React.FC = () => {
  return (
    <Modal visible={true}>
      <View flex={1} justifyContent="center" alignItems="center">
        <Spinner color={"black"} size="large" />
      </View>
    </Modal>
  );
};

export default SpinnerLoader;
