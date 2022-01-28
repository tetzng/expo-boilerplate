import React, { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import useColorScheme from '../hooks/useColorScheme'
import { auth } from '../config/firebase'
import GuestNavigation from './GuestNavigation'
import { MemberNavigation } from './MemberNavigation'
import { useCurrentUser } from '../hooks/useCurrentUser'

export const RootNavigation = () => {
  const colorScheme = useColorScheme()
  const [currentUser] = useCurrentUser(auth)

  return (
    <>
      {currentUser ? (
        <MemberNavigation colorScheme={colorScheme} />
      ) : (
        <GuestNavigation colorScheme={colorScheme} />
      )}
    </>
  )
}
