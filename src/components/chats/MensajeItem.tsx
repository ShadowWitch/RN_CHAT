import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IMensajes } from "../../screens/appsScreens/Chat";

export const MensajeItem = ({ item }: { item: IMensajes }) => {
  return (
    <View
      style={{
        backgroundColor: "#F1F1F1",
        // borderRadius: 10,
        paddingVertical: 10,
        marginBottom: 10,
        paddingHorizontal: 10,

        //* Sombras
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,

        elevation: 2,
      }}
    >
      <Text>{item.msg}</Text>
      <Text
        style={{
          opacity: 0.5,
          fontSize: 10,
          textAlign: "right",
        }}
      >
        {new Date().toLocaleTimeString()}
        <Ionicons name="checkmark-done-outline" size={10} color="black" />
      </Text>
    </View>
  );
};
