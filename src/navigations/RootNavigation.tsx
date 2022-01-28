import React from 'react'
import { useRecoilState } from 'recoil'
import { onAuthStateChanged } from 'firebase/auth'
import useColorScheme from '../hooks/useColorScheme'
import { auth } from '../config/firebase'
import { currentUserState } from '../atoms/currentUserState'
import GuestNavigation from './GuestNavigation'
import { MemberNavigation } from './MemberNavigation'

export const RootNavigation = () => {
  const colorScheme = useColorScheme()
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
  onAuthStateChanged(auth, (user) => setCurrentUser(user))

  return (
    <>
      {!currentUser ? (
        <MemberNavigation colorScheme={colorScheme} />
      ) : (
        <GuestNavigation colorScheme={colorScheme} />
      )}
    </>
  )
}
