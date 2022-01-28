import { Auth, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'

export const useCurrentUser = (auth: Auth) => {
  const [currentUser, setCurrentUser] = useState(auth.currentUser)
  onAuthStateChanged(auth, (user) => setCurrentUser(user))

  return [currentUser, setCurrentUser]
}
