// import { MotiView } from "moti";
import { FlatList, StyleSheet, View } from "react-native";
import useScrollScanner from "@/hooks/useScrollScanner";
import ContentBox from "@/components/box";

export default function TabTwoScreen() {
  const { scrollScanner, counting } = useScrollScanner();

  return (
    <View className={`pt-50 flex-1 bg-[white] dark:bg-[black]`}>
      <FlatList
        onScroll={() => {
          counting();
        }}
        scrollEventThrottle={32}
        className={`w-full`}
        data={Array.from({ length: 30 }, (_, i) => ({ id: i, name: `하늘에계신아카라트여나를섬기소서` }))}
        keyExtractor={(item, key) => key}
        renderItem={({ item }) => <ContentBox scrollScanner={scrollScanner} item={item} />}
      />
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
