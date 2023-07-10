import React, { useContext } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Gastos } from "../screens/appsScreens/Gastos";
import { GastosDetalles } from "../screens/appsScreens/GastosDetalles";
import { LoginScreen } from "../screens/authScreens/LoginScreen";
import { TopTabNavigator } from "./TopTabNavigator";
import { AuthContext } from "../context/AuthContext";
import { LoadingScreen } from "../screens/globalScreens/LoadingScreen";

const Stack = createStackNavigator();

export const Navigator = () => {
  const { status, signIn } = useContext(AuthContext);

  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  setTimeout(() => {
    signIn({
      username: "pedro",
      password: "pedro123",
    });
  }, 100);

  if (status === "checking")
    return <LoadingScreen title="Verificando sesión" />;

  return (
    <Stack.Navigator
      screenOptions={(props) => ({
        headerShown: false,

        cardStyle: {
          backgroundColor: "white",
        },
      })}
    >
      {status !== "authenticated" ? (
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      ) : (
        <Stack.Screen name="MainApp" component={TopTabNavigator} />
      )}
    </Stack.Navigator>
  );
};
