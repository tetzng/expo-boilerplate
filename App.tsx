import { StatusBar } from 'expo-status-bar'
import { getAuth } from 'firebase/auth'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NativeBaseProvider } from 'native-base'

import './src/config/firebase'
import './src/config/sentry'

import useCachedResources from './src/hooks/useCachedResources'
import useColorScheme from './src/hooks/useColorScheme'
import GuestNavigation from './src/navigations/GuestNavigation'
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
