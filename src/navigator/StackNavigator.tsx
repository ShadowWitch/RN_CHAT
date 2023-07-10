import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Gastos } from "../screens/appsScreens/Gastos";
import { GastosDetalles } from "../screens/appsScreens/GastosDetalles";
const Stack = createStackNavigator();

export const StackNavigator = () => {
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

  return (
    <Stack.Navigator
      screenOptions={(props) => ({
        headerShown: false,

        cardStyle: {
          backgroundColor: "white",
        },
      })}
    >
      <Stack.Screen name="Gastos" component={Gastos} />
      <Stack.Screen name="GastosDetalles" component={GastosDetalles} />
    </Stack.Navigator>
  );
};
