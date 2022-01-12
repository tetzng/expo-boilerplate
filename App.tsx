import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigations";
import "./config/firebase";
import { getAuth } from "firebase/auth";
import GuestNavigation from "./navigations/GuestNavigation";
import React from "react";
import { NativeBaseProvider } from "native-base";
import MemberNavigation from "./navigations";
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }

  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user?.email);
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        {user ? (
          <MemberNavigation colorScheme={colorScheme} />
        ) : (
          <GuestNavigation colorScheme={colorScheme} />
        )}
        <StatusBar />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
