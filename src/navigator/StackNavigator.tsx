import SplashScreen from "../screens/SplashScreen";
import TabNavigator from "./TabNavigator";
import DetailScreen from "../screens/DetailScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { Image, StyleSheet, Text, View } from "react-native";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        headerTitleStyle: {
          fontFamily: "Poppins-Regular",
          fontSize: 16,
          paddingVertical: 10,
        },
        headerStyle: {
          height: 50,
          backgroundColor: "#6379EA",
        },
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTintColor: "white",
          title: "Back",
        }}
        name="DetailScreen"
        component={DetailScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: () => (
            <View style={style.headerHome}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../assets/logo.png")}
              />
              <Text style={style.titleHome}>Kumpulan Doa Lengkap</Text>
            </View>
          ),

          headerTintColor: "white",
        }}
        name="HomeScreen"
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;

const style = StyleSheet.create({
  headerHome: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
  },
  titleHome: {
    color: "white",
    fontSize: 16,
  },
});