import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StackNavigator } from "./StackNavigator";
import { StackNavigatorIngresos } from "./StackNavigatorIngresos";
import { Home } from "../screens/appsScreens/Home";
import Ionicons from "@expo/vector-icons/FontAwesome5";
import { Chat } from "../screens/appsScreens/Chat";

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        // backgroundColor: "red",
        paddingTop: top,
      }}
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
      screenOptions={(props) => ({
        tabBarStyle: {
          elevation: 0,
          // backgroundColor: "red",
        },

        tabBarIcon: ({ focused, color }) => {
          let iconName: string = "";
          switch (props.route.name) {
            case "Home":
              iconName = "home";
              break;
            case "StackNavigatorIngresos":
              iconName = "money-bill-wave";
              break;
            case "StackNavigatorGastos":
              iconName = "money-check";
              break;
            case "Chat":
              iconName = "money-check";
              break;
          }
          return <Ionicons name={iconName} size={20} />;
        },

        // tabBarIconStyle: {
        //   backgroundColor: "red",
        // },
        tabBarLabelStyle: {
          fontSize: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Ingresos" component={Ingresos} /> */}

      <Tab.Screen
        name="StackNavigatorIngresos"
        component={StackNavigatorIngresos}
        options={{ title: "Ingresos" }}
      />
      <Tab.Screen
        name="StackNavigatorGastos"
        component={StackNavigator}
        options={{ title: "Gastos" }}
      />

      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
};
