import { Image, StyleSheet, Platform, View, Text, FlatList, Pressable } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";

const dogsList = [
  { id: 1, name: "Dog 1", image: require("@/assets/images/dogs/1.png") },
  { id: 2, name: "Dog 2", image: require("@/assets/images/dogs/2.png") },
  { id: 3, name: "Dog 3", image: require("@/assets/images/dogs/3.png") },
  { id: 4, name: "Dog 4", image: require("@/assets/images/dogs/4.png") },
  { id: 5, name: "Dog 5", image: require("@/assets/images/dogs/5.png") },
  { id: 6, name: "Dog 6", image: require("@/assets/images/dogs/6.png") },
  { id: 7, name: "Dog 7", image: require("@/assets/images/dogs/7.png") },
  { id: 8, name: "Dog 8", image: require("@/assets/images/dogs/8.png") },
  { id: 9, name: "Dog 9", image: require("@/assets/images/dogs/9.png") },
  { id: 10, name: "Dog 10", image: require("@/assets/images/dogs/10.png") },
  { id: 11, name: "Dog 11", image: require("@/assets/images/dogs/11.png") },
  { id: 12, name: "Dog 12", image: require("@/assets/images/dogs/12.png") },
  { id: 13, name: "Dog 13", image: require("@/assets/images/dogs/13.png") },
  { id: 14, name: "Dog 14", image: require("@/assets/images/dogs/14.png") },
  { id: 15, name: "Dog 15", image: require("@/assets/images/dogs/15.png") },
  { id: 16, name: "Dog 16", image: require("@/assets/images/dogs/16.png") },
  { id: 17, name: "Dog 17", image: require("@/assets/images/dogs/17.png") },
  { id: 18, name: "Dog 18", image: require("@/assets/images/dogs/18.png") },
  { id: 19, name: "Dog 19", image: require("@/assets/images/dogs/19.png") },
  { id: 20, name: "Dog 20", image: require("@/assets/images/dogs/20.png") },
  { id: 21, name: "Dog 21", image: require("@/assets/images/dogs/21.png") },
  { id: 22, name: "Dog 22", image: require("@/assets/images/dogs/22.png") },
  { id: 23, name: "Dog 23", image: require("@/assets/images/dogs/23.png") },
  { id: 24, name: "Dog 24", image: require("@/assets/images/dogs/24.png") },
  { id: 25, name: "Dog 25", image: require("@/assets/images/dogs/25.png") },
  { id: 26, name: "Dog 26", image: require("@/assets/images/dogs/26.png") },
  { id: 27, name: "Dog 27", image: require("@/assets/images/dogs/27.png") },
  { id: 28, name: "Dog 28", image: require("@/assets/images/dogs/28.png") },
  { id: 29, name: "Dog 29", image: require("@/assets/images/dogs/29.png") },
  { id: 30, name: "Dog 30", image: require("@/assets/images/dogs/30.png") },
  { id: 31, name: "Dog 31", image: require("@/assets/images/dogs/31.png") },
  { id: 32, name: "Dog 32", image: require("@/assets/images/dogs/32.png") },
  { id: 33, name: "Dog 33", image: require("@/assets/images/dogs/33.png") },
  { id: 34, name: "Dog 34", image: require("@/assets/images/dogs/34.png") },
  { id: 35, name: "Dog 35", image: require("@/assets/images/dogs/35.png") },
  { id: 36, name: "Dog 36", image: require("@/assets/images/dogs/36.png") },
  { id: 37, name: "Dog 37", image: require("@/assets/images/dogs/37.png") },
  { id: 38, name: "Dog 38", image: require("@/assets/images/dogs/38.png") },
  { id: 39, name: "Dog 39", image: require("@/assets/images/dogs/39.png") },
  { id: 40, name: "Dog 40", image: require("@/assets/images/dogs/40.png") },
  { id: 41, name: "Dog 41", image: require("@/assets/images/dogs/41.png") },
  { id: 42, name: "Dog 42", image: require("@/assets/images/dogs/42.png") },
  { id: 43, name: "Dog 43", image: require("@/assets/images/dogs/43.png") },
  { id: 44, name: "Dog 44", image: require("@/assets/images/dogs/44.png") },
  { id: 45, name: "Dog 45", image: require("@/assets/images/dogs/45.png") },
  { id: 46, name: "Dog 46", image: require("@/assets/images/dogs/46.png") },
  { id: 47, name: "Dog 47", image: require("@/assets/images/dogs/47.png") },
  { id: 48, name: "Dog 48", image: require("@/assets/images/dogs/48.png") },
  { id: 49, name: "Dog 49", image: require("@/assets/images/dogs/49.png") },
  { id: 50, name: "Dog 50", image: require("@/assets/images/dogs/50.png") },
  { id: 51, name: "Dog 51", image: require("@/assets/images/dogs/51.png") },
  { id: 52, name: "Dog 52", image: require("@/assets/images/dogs/52.png") },
  { id: 53, name: "Dog 53", image: require("@/assets/images/dogs/53.png") },
  { id: 54, name: "Dog 54", image: require("@/assets/images/dogs/54.png") },
  { id: 55, name: "Dog 55", image: require("@/assets/images/dogs/55.png") },
  { id: 56, name: "Dog 56", image: require("@/assets/images/dogs/56.png") },
  { id: 57, name: "Dog 57", image: require("@/assets/images/dogs/57.png") },
  { id: 58, name: "Dog 58", image: require("@/assets/images/dogs/58.png") },
  { id: 59, name: "Dog 59", image: require("@/assets/images/dogs/59.png") },
  { id: 60, name: "Dog 60", image: require("@/assets/images/dogs/60.png") },
  { id: 61, name: "Dog 61", image: require("@/assets/images/dogs/61.png") },
  { id: 62, name: "Dog 62", image: require("@/assets/images/dogs/62.png") },
  { id: 63, name: "Dog 63", image: require("@/assets/images/dogs/63.png") },
  { id: 64, name: "Dog 64", image: require("@/assets/images/dogs/64.png") },
  { id: 65, name: "Dog 65", image: require("@/assets/images/dogs/65.png") },
  { id: 66, name: "Dog 66", image: require("@/assets/images/dogs/66.png") },
  { id: 67, name: "Dog 67", image: require("@/assets/images/dogs/67.png") },
  { id: 68, name: "Dog 68", image: require("@/assets/images/dogs/68.png") },
  { id: 69, name: "Dog 69", image: require("@/assets/images/dogs/69.png") },
  { id: 70, name: "Dog 70", image: require("@/assets/images/dogs/70.png") },
  { id: 71, name: "Dog 71", image: require("@/assets/images/dogs/71.png") },
  { id: 72, name: "Dog 72", image: require("@/assets/images/dogs/72.png") },
  { id: 73, name: "Dog 73", image: require("@/assets/images/dogs/73.png") },
];

export default function HomeScreen() {
  const [selectedDog, setSelectedDog] = useState({});
  const [touched, setTouched] = useState(0);

  useEffect(() => {
    setSelectedDog(dogsList.filter((dog) => dog.id === 1));
  }, []);

  const randomDog = () => {
    const mixing = dogsList[Math.floor(Math.random() * dogsList.length)];
    console.log(mixing);
    setSelectedDog(dogsList.filter((dog) => dog.id === mixing.id));
  };

  return (
    <View className={`justify-center items-center h-full`}>
      <Pressable
        onPress={() => {
          randomDog();
          setTouched((prev) => prev + 1);
        }}
        className={`h-[200px]`}
      >
        <FlatList data={selectedDog} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <Image resizeMode="cover" className={`w-[200px] aspect-1`} source={item.image} />} />
        {/* <Image className={`w-[300px] h-[300px]`} source={require("@/assets/images/dogs/14.png")} /> */}
      </Pressable>
      <Text className={`text-regular60 dark:text-white-solid`}>{touched > 5 ? (touched > 10 ? "그..그만.." : "그만만져") : "절 만지세요"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
