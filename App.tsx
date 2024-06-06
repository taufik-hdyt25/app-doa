import React from "react";
import StackNavigator from "./src/navigator/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "react-native";
import { PaperProvider } from "react-native-paper";

const queryClient = new QueryClient();

function App() {
  return (
    <PaperProvider>
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StatusBar backgroundColor={"white"} barStyle={"dark-content"}  />
        <StackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
    </PaperProvider>
  );
}
export default App;
