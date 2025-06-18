import React, { useEffect } from "react";
import { View, Text } from "react-native";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { MotiView } from "moti";

import Animated, { useAnimatedStyle, withTiming, useSharedValue, Easing } from "react-native-reanimated";

const ChatCard = ({ item, isScrolled }) => {
  const { targetRef, isViewed, intersecting } = useIntersectionObserver();

  const opacity = useSharedValue(0);
  const translateX = useSharedValue(-100);

  useEffect(() => {
    const config = {
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    };

    if (isViewed) {
      opacity.value = withTiming(1, config);
      translateX.value = withTiming(0, config);
    } else {
      opacity.value = withTiming(0, config);
      translateX.value = withTiming(-100, config);
    }
  }, [isViewed]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateX: translateX.value }],
  }));

  useEffect(() => {
    intersecting();
  }, [isScrolled]);

  return (
    <Animated.View
      // from={{
      //   opacity: 0,
      //   translateX: -100,
      // }}
      // animate={{
      //   opacity: isViewed ? 1 : 0,
      //   translateX: isViewed ? 0 : -100,
      // }}
      // transition={{
      //   type: "timing",
      //   duration: 1000,
      // }}
      style={[animatedStyle]}
      ref={targetRef}
      className={`flex-col justify-center items-center w-full h-30 mb-10 border-2 border-[ffffff] dark:border-[white]`}
    >
      <Text className={`${isViewed ? `text-[pink]` : `text-[black] dark:text-[white]`}  `}>{item.txt}</Text>
    </Animated.View>
  );
};

export default ChatCard;
