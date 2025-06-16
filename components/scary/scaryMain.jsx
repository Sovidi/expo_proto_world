import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Text, Pressable, View } from "react-native";

const ScaryMain = () => {
  const [isTouched, setIsTouched] = useState(false);
  const [safety, setSafety] = useState(false);

  useEffect(() => {
    setIsTouched(false);
    setSafety(false);
  }, []);

  return (
    <View className={`flex-col items-center justify-center h-full`}>
      {isTouched === false ? (
        <View className={`${safety === true ? "hidden" : ""} flex-row gap-20 mb-50`}>
          <Pressable
            className={`justify-center items-center w-100 h-100 text-center border-1 dark:border-[white] rounded-11`}
            onPress={() => {
              setSafety(false);
              setIsTouched(true);
            }}
          >
            <Text className={`text-regular18 dark:text-[white]`}>나게?</Text>
          </Pressable>
          <Pressable
            className={`justify-center items-center w-100 h-100 text-center border-1 dark:border-[white] rounded-11`}
            onPress={() => {
              setSafety(true);
              setIsTouched(false);
            }}
          >
            <Text className={`text-regular18 dark:text-[white]`}>나게?</Text>
          </Pressable>
        </View>
      ) : (
        <View>
          <Image resizeMode="cover" className={``} source={require("@/assets/images/고백짤.png")} />
        </View>
      )}
      {safety === false ? (
        <Text className={`text-bold48 dark:text-[white]`}>{isTouched ? "힣히히힠ㅋㅋㅋ" : "잘눌러라 깜작상자다"}</Text>
      ) : (
        <View>
          <Image resizeMode="cover" className={``} source={require("@/assets/images/dogs/42.png")} />
          <Text className={`text-bold48 dark:text-[white]`}>넌 안전하다능</Text>
        </View>
      )}
    </View>
  );
};

export default ScaryMain;
