/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { GuestStackParamList, RootStackParamList } from '../types/types'

export const memberLinking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
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
