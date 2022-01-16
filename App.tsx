import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from './src/hooks/useCachedResources'
import useColorScheme from './src/hooks/useColorScheme'
import './src/config/firebase'
import { getAuth } from 'firebase/auth'
import GuestNavigation from './src/navigations/GuestNavigation'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import MemberNavigation from './src/navigations'
export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  }

  const auth = getAuth()
  const user = auth.currentUser

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
  )
}
