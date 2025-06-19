import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, TextInput, View } from "react-native";
import ChatCard from "@/components/chatCard";
import useFetchComp from "@/hooks/fetchComp";
import useWebsocketFetchComp from "@/hooks/websocketFetchComp";
import useScrollCounter from "@/hooks/useScrollCounter";

const Chat = () => {
  const { data, fetchFn } = useFetchComp();
  const { chatData, socket } = useWebsocketFetchComp();
  const [reversedChatData, setReversedChatData] = useState([]);
  const { isScrolled, counting } = useScrollCounter();
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    fetchFn("GET");
  }, []);

  useEffect(() => {
    if (chatData.length > 0) {
      setReversedChatData(data.slice().reverse());
    }
  }, [chatData]);

  const txtDataSubmit = async () => {
    if (inputText.trim() === "") {
      return;
    }
    const key = Math.random().toString(36).substring(2, 15);
    socket.emit("submitMessage", JSON.stringify({ txt: inputText, key }));

    setInputText("");
  };

  return (
    <View className={"h-full w-full flex-col justify-center items-center px-20"}>
      <FlatList
        onScroll={() => {
          counting();
        }}
        className={"w-full h-full"}
        data={data}
        renderItem={({ item }) => <ChatCard item={item} isScrolled={isScrolled} />}
        keyExtractor={(item) => item.key}
      />
      <View className={"w-full h-fit py-10 flex-row justify-between items-center mb-10"}>
        <TextInput className={`w-full h-full bg-pink text-[black] dark:text-[white]`} onSubmitEditing={txtDataSubmit} placeholder="암거나 적으세용" value={inputText} onChangeText={setInputText} />
      </View>
    </View>
  );
};

export default Chat;
