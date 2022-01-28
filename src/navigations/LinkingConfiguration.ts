import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { GuestStackParamList, RootStackParamList } from '../types/types'

export const memberLinking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'one',
            },
          },
          Account: {
            screens: {
              AccountScreen: 'two',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
}

export const guestLinking: LinkingOptions<GuestStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      SignIn: 'SignIn',
      SignUp: 'SignUp',
    },
  },
}
