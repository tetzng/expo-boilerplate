import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'

import { memberLinking } from './LinkingConfiguration'
import { RootNavigator } from './RootNavigator'

export const MemberNavigation = ({
  colorScheme,
}: {
  colorScheme: ColorSchemeName
}) => {
  return (
    <NavigationContainer
      linking={memberLinking}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}
