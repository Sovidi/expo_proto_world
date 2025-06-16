import React, { useEffect } from "react";
import Chat from "@/components/chat";
import { Text, View } from "react-native";
import { Platform } from "react-native";

const Connect = () => {
  return (
    <View className={`pt-50 ${Platform.OS === "ios" ? "pb-100" : ""} flex-col justify-center items-center h-full`}>
      <Chat />
    </View>
  );
};

export default Connect;
