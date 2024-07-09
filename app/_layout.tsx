import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { PortalProvider } from "tamagui";

import { useColorScheme } from "@/hooks/useColorScheme";

//Tamagui kit COnfig
import { SearchQueryContextProvider } from "@/context/search.context";
import { config } from "@tamagui/config/v3";
import { TamaguiProvider, createTamagui } from "tamagui";
import AuthProvider from "@/providers/AuthProvider";

// you usually export this from a tamagui.config.ts file
const tamaguiConfig = createTamagui(config);

// make TypeScript type everything based on your config
type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  // or 'tamagui'
  interface TamaguiCustomConfig extends Conf {}
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
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
    <TamaguiProvider config={tamaguiConfig}>
      <SearchQueryContextProvider>
        <PortalProvider shouldAddRootHost>
          <AuthProvider>
            <Stack>
              <Stack.Screen
                name="(app)/(tabs)"
                options={{ headerShown: false }}
              />
              <Stack.Screen name="(auth)/index" />
              <Stack.Screen name="(auth)/sign-in" />
              <Stack.Screen name="+not-found" />
            </Stack>
          </AuthProvider>
        </PortalProvider>
      </SearchQueryContextProvider>
    </TamaguiProvider>
  );
}
