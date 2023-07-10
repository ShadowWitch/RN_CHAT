import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import { ItemList } from "../../components/gastos/ItemList";

interface Props extends StackScreenProps<any, any> { }

export interface Item {
  id: number;
  name: string;
  description: string;
  precio: number;
  fecha: Date;
}

export const IngresosDetalles = ({ navigation, route }: Props) => {
  const [data, setData] = useState<Item[]>([
    // {
    //   id: 0,
    //   name: "Comida",
    //   description: "Desc comida",
    //   precio: 100.0,
    //   fecha: new Date(),
    // },
  ]);

  const loadMore = () => {
    const newArr: Item[] = [];

    for (let i = 0; i < 5; i++) {
      newArr[i] = {
        id: data.length + i,
        name: "Mas comida",
        description: "Desc mas comida",
        precio: 100.0,
        fecha: new Date(),
      };
    }

    setTimeout(() => {
      setData([...data, ...newArr]);
    }, 200);
  };

  return (
    <View
      style={{
        // backgroundColor: "red",
        flex: 1,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.2}
        style={{
          position: "absolute",
          zIndex: 1,
          bottom: 30,
          right: 20,
          backgroundColor: "grey",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,
          padding: 15,
          opacity: 0.5,
        }}
        onPress={() => navigation.pop()}
      >
        <AntDesign name="back" size={30} />
      </TouchableOpacity>

      <View
        style={{
          // backgroundColor: "grey",
          flex: 1,
        }}
      >
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ItemList item={item} />}
          ItemSeparatorComponent={() => (
            <View
              style={{
                borderBottomWidth: 1,
                opacity: 0.2,
                marginVertical: 1,
                marginHorizontal: 10,
              }}
            />
          )}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() => (
            <View
              style={{
                height: 150,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size={30} color={"#5856D6"} />
            </View>
          )}
        />
      </View>
    </View>
  );
};
