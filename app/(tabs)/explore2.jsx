// import { MotiView } from "moti";
import { FlatList, StyleSheet, View } from "react-native";
import useScrollCounter from "@/hooks/useScrollCounter";
import ContentBox from "@/components/contentBox";

export default function TabTwoScreen() {
  const { isScrolled, counting } = useScrollCounter();

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
        renderItem={({ item }) => <ContentBox isScrolled={isScrolled} item={item} />}
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
