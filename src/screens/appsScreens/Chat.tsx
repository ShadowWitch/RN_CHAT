import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Chart } from "../../components/charts/Chart";
import { Ionicons } from "@expo/vector-icons";
import { MensajeItem } from "../../components/chats/MensajeItem";
import { TouchableOpacity } from "react-native-gesture-handler";
import { io } from "socket.io-client";

const socket = io("https://chat-hn-prueba.onrender.com/");

interface Props extends BottomTabScreenProps<any, any> {}

export interface IMensajes {
  id: string;
  msg: string;
}

export const Chat = ({ navigation, route }: Props) => {
  const { top } = useSafeAreaInsets();
  const [listMessage, setListMessage] = useState<IMensajes[]>([]);
  const [message, setMessage] = useState("");

  const onChangeMessage = (e: any) => {
    setMessage(e);
  };

  const sendMessage = () => {
    if (message.trim().length === 0) return;

    socket.emit("chat_message", {
      id: socket.id,
      msg: message,
    });

    setMessage("");
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Conectado!");
    });

    socket.on("chat_message", (data) => {
      setListMessage((listMessage) => [...listMessage, data]);
    });

    return () => {
      socket.off("connect");
      socket.off("chat_message");
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: "grey",
        paddingHorizontal: 5,
        paddingVertical: 10,
      }}
    >
      <FlatList
        data={listMessage}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <MensajeItem item={item} />}
      />

      <View
        style={{
          //   backgroundColor: "red",
          //   justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "#E7E7E7",
            // height: 300,
            // maxHeight: 300,
            borderRadius: 100,
            paddingHorizontal: 10,
            flex: 1,
          }}
        >
          <TextInput
            onChangeText={onChangeMessage}
            multiline
            numberOfLines={2}
            scrollEnabled={true}
            value={message}
            //   cursorColor={"black"}
            placeholder="Mensaje"
            placeholderTextColor={"#D7D7D7"}
            style={{
              //   backgroundColor: "green",
              maxHeight: 100,
            }}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: "#159E46",
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            marginHorizontal: 5,
          }}
          onPress={sendMessage}
        >
          <Ionicons name="send-sharp" size={20} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
