import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ingresos } from "../screens/appsScreens/Ingresos";
import { IngresosDetalles } from "../screens/appsScreens/IngresosDetalles";
const Stack = createStackNavigator();

export const StackNavigatorIngresos = () => {
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
      <Stack.Screen name="Ingresos" component={Ingresos} />
      <Stack.Screen name="IngresosDetalles" component={IngresosDetalles} />
    </Stack.Navigator>
  );
};
