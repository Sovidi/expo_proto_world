import { StyleSheet, Image, Platform, View, Text, Pressable } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

export default function TabTwoScreen() {
  const [isTouched, setIsTouched] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsTouched(false);
  }, []);

  return (
    <View className={`flex-col items-center justify-center h-full`}>
      <Pressable
        onPress={() => {
          setIsTouched((prev) => {
            return true;
          });
          router.push("/(tabs)/explore");
        }}
      >
        <Image resizeMode="cover" className={``} source={require("@/assets/images/고백짤.png")} />
      </Pressable>
      <Text className={`text-bold48 dark:text-[white]`}>{isTouched ? "나는 왜만져 임마" : "뭐임마"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
