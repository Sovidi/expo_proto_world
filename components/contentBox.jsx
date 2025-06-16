import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { MotiView } from "moti";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const ContentBox = ({ isScrolled, item }) => {
  const { targetRef, isViewed, intersecting } = useIntersectionObserver();

  useEffect(() => {
    intersecting();
  }, [isScrolled]);

  return (
    <View ref={targetRef} className={`${isViewed ? "!bg-[blue]" : "!bg-[red]"} flex-row justify-start items-center w-full rounded-[8px] mb-10 bg-[white]`}>
      <MotiView from={{ opacity: 0 }} animate={{ opacity: isViewed ? 1 : 0 }} transition={{ type: "timing", duration: 500 }}>
        <Text className={`${isViewed ? "text-[purple]" : "text-[black] dark:text-[white]"} text-bold48`}>{item?.name}</Text>
      </MotiView>
    </View>
  );
};

export default ContentBox;
