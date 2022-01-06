import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigations";
import "./config/firebase";
import { getAuth } from "firebase/auth";
import GuestNavigation from "./navigations/GuestNavigation";

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
    <SafeAreaProvider>
      {user ? (
        <Navigation colorScheme={colorScheme} />
      ) : (
        <GuestNavigation colorScheme={colorScheme} />
      )}
      <StatusBar />
    </SafeAreaProvider>
  );
}
