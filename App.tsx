import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NativeBaseProvider } from 'native-base'
import { useAuthState } from 'react-firebase-hooks/auth'

import './src/config/firebase'
import './src/config/sentry'

import useCachedResources from './src/hooks/useCachedResources'
import useColorScheme from './src/hooks/useColorScheme'
import GuestNavigation from './src/navigations/GuestNavigation'
import MemberNavigation from './src/navigations'
import { auth } from './src/config/firebase'
import { RecoilRoot, useRecoilState } from 'recoil'
import { currentUserState } from './src/atoms/currentUserState'
import { onAuthStateChanged } from 'firebase/auth'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()
  const [user, loading, error] = useAuthState(auth)

  if (!isLoadingComplete || loading) {
    return null
  }
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
  onAuthStateChanged(auth, (user) => setCurrentUser(user))

  return (
    <RecoilRoot>
      <NativeBaseProvider>
        <SafeAreaProvider>
          {!currentUser ? (
            <MemberNavigation colorScheme={colorScheme} />
          ) : (
            <GuestNavigation colorScheme={colorScheme} />
          )}
          <StatusBar />
        </SafeAreaProvider>
      </NativeBaseProvider>
    </RecoilRoot>
  )
}
