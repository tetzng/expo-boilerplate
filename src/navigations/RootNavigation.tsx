import React from 'react'
import useColorScheme from '../hooks/useColorScheme'
import { auth } from '../config/firebase'
import GuestNavigation from './GuestNavigation'
import { MemberNavigation } from './MemberNavigation'
import { useCurrentUser } from '../hooks/useCurrentUser'
import { Loading } from '../components/Loading'

export const RootNavigation = () => {
  const colorScheme = useColorScheme()
  const [currentUser, loading] = useCurrentUser(auth)

  if (loading) {
    return <Loading />
  }

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
