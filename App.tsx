import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "./src/navigator/Navigator";
import { TopTabNavigator } from "./src/navigator/TopTabNavigator";
import { AuthProvider } from "./src/context/AuthContext";

import "react-native-gesture-handler";

//* TESTEANDO
import * as Permisions from "expo-permissions";
import * as Notifications from "expo-notifications";

const getToken = async () => {
  const { status } = await Permisions.getAsync(Permisions.NOTIFICATIONS)
  if (status !== 'granted') return;

  const token = await Notifications.getExpoPushTokenAsync()
  console.log('TOKENSITO >> ', token)
  return token;
};

export default function App() {

  getToken()

  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigator />
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
