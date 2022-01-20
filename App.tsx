import { StatusBar } from 'expo-status-bar'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import React, { useState } from 'react'
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
  const auth = getAuth()
  const [user, setUser] = useState(auth.currentUser)

  if (!isLoadingComplete) {
    return null
  }

  onAuthStateChanged(auth, (changedUser) => {
    setUser(changedUser)
  })

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
