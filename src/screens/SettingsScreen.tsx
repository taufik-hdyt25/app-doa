import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SettingScreen = ({ navigation }: any) => {
  return (
    <View style={style.container}>
      <Text style={style.version}>Version 1.0.0</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Privacy")}
        style={{ backgroundColor: "#6379EA", padding: 10, borderRadius: 10 }}
      >
        <Text style={{ color: "white" }}>Privacy Policy</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Trems")}
        style={{ backgroundColor: "#6379EA", padding: 10, borderRadius: 10 }}
      >
        <Text style={{ color: "white" }}>Terms & Conditions</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;

const style = StyleSheet.create({
  container: {
    padding: 10,
    gap: 5,
  },
  version: {
    textAlign: "right",
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: "#31304D",
  },
});
