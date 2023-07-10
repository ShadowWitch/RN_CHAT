import React from "react";

import { View, Text } from "react-native";
import { Item } from "../../screens/GastosDetalles";

export const ItemList = ({ item }: { item: Item }) => {
  return (
    <View
      style={{
        backgroundColor: "#F9F9F9",
        height: 100,
        marginHorizontal: 10,
        borderRadius: 10,
        justifyContent: "flex-end",
      }}
    >
      <Text>{item.name}</Text>
      <Text
        style={{
          color: item.precio > 90 ? "red" : "black",
          opacity: 0.5,
        }}
      >
        L. {item.precio}
      </Text>
      <Text
        style={{
          opacity: 0.2,
          fontSize: 10,
          // backgroundColor: "red",
          textAlign: "right",
        }}
      >
        {item.fecha.toLocaleDateString()}
      </Text>
    </View>
  );
};
