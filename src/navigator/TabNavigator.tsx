import HomeScreen from "../screens/HomeScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SettingScreen from "../screens/SettingsScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarStyle: {
          backgroundColor: "#6379EA",
          paddingTop:5
        },
        tabBarLabelStyle: {
          color: "white",
          paddingBottom: 5,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: 'rgba(255,255,255, 0.5)',
        
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }: any) => (
            <MaterialIcons name="home" color={color} size={25} />
            ),
          
        }}
      />

      <Tab.Screen
        name="Tentang App"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color }: any) => (
            <MaterialIcons name="info" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
