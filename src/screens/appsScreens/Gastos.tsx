import React, { useState } from "react";
import { View, Text, TouchableOpacity, RefreshControl, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";

interface Props extends StackScreenProps<any, any> { }

export const Gastos = ({ navigation, route }: Props) => {
  const [refreshing, setRefreshing] = useState(false);
  const example = [2, 1, 2];
  const example2 = [2, 1];

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  };

  return (

    <View
      style={{
        justifyContent: "center",
        // alignItems: "center",
        flex: 1,
        // backgroundColor: "gray",
      }}
    >
      <View
        style={{
          // backgroundColor: "green",
          margin: 10,
        }}
      >
        {example.map((e, index) => (
          <View
            key={index}
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
              margin: 5,
            }}
          >
            {example2.map((e, index) => (
              <TouchableOpacity
                activeOpacity={0.8}
                key={index}
                style={{
                  width: 150,
                  height: 150,
                  backgroundColor: "#F9F9F9",
                  borderRadius: 20,
                  justifyContent: "space-evenly",
                  alignItems: "center",

                  //* Shadow
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,

                  elevation: 2,
                }}
                onPress={() => navigation.navigate("GastosDetalles")}
              >
                <FontAwesome5 name={"poop"} size={50} />
                <Text>Hola</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};
