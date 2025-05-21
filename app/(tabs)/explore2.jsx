// import { MotiView } from "moti";
import { FlatList, StyleSheet } from "react-native";
import ContentBox from "../../components/box";
import useScrollScanner from "../../hooks/useScrollScanner";

const mockupData = [
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
  {
    id: 0,
    name: "하늘에계신아카라트여나를섬기소서",
  },
];

export default function TabTwoScreen() {
  const { scrollScanner, counting } = useScrollScanner();

  return (
    <FlatList
      onScroll={() => {
        counting();
      }}
      scrollEventThrottle={32}
      className={`w-full`}
      data={mockupData}
      keyExtractor={(item, key) => key}
      renderItem={({ item }) => <ContentBox scrollScanner={scrollScanner} item={item} />}
    />
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
