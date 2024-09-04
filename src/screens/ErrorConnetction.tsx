import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import { Text, View } from "react-native";

const ErrorConnectionScreen = () => {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Icon name="wifi-off" size={44} />
      <Text>No Internet Connection</Text>
    </View>
  );
};

export default ErrorConnectionScreen;
