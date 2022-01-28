import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NativeBaseProvider } from 'native-base'

import './src/config/firebase'
import './src/config/sentry'

import useCachedResources from './src/hooks/useCachedResources'
import { RecoilRoot } from 'recoil'
import { RootNavigation } from './src/navigations/RootNavigation'

const App = () => {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  }

  return (
    <RecoilRoot>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <RootNavigation />
          <StatusBar />
        </SafeAreaProvider>
      </NativeBaseProvider>
    </RecoilRoot>
  )
}

export default App
