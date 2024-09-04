import TabNavigator from "./TabNavigator";
import DetailScreen from "../screens/DetailScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { Image, StyleSheet, Text, View } from "react-native";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import TremsScreen from "../screens/TermsScreen";
import { useNetInfo } from "@react-native-community/netinfo";
import ErrorConnectionScreen from "../screens/ErrorConnetction";

const Stack = createStackNavigator();

function StackNavigator() {
  const { isConnected } = useNetInfo();

  if (isConnected === null || !isConnected) {
    return <ErrorConnectionScreen />;
  }

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
          backgroundColor: "#2D3250",
        },
      }}
    >
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

      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Privacy Policy",
          headerTintColor: "white",
        }}
        name="Privacy"
        component={PrivacyPolicy}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Terms & Conditions",
          headerTintColor: "white",
        }}
        name="Trems"
        component={TremsScreen}
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
    fontFamily: "Poppins-SemiBold",
  },
});
