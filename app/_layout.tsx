import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import * as Font from "expo-font";

import { useColorScheme } from "@/hooks/useColorScheme";

import "@/global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Pretendard: require("../assets/fonts/Pretendard-Regular.ttf"),
      "Pretendard-Bold": require("../assets/fonts/Pretendard-Bold.ttf"),
      "Pretendard-Medium": require("../assets/fonts/Pretendard-Medium.ttf"),
      "Pretendard-Light": require("../assets/fonts/Pretendard-Light.ttf"),
      "Pretendard-Thin": require("../assets/fonts/Pretendard-Thin.ttf"),
      "Pretendard-ExtraBold": require("../assets/fonts/Pretendard-ExtraBold.ttf"),
      "Pretendard-ExtraLight": require("../assets/fonts/Pretendard-ExtraLight.ttf"),
      "Pretendard-SemiBold": require("../assets/fonts/Pretendard-SemiBold.ttf"),
      SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    }).then(() => {
      setLoaded(true);
    });
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
