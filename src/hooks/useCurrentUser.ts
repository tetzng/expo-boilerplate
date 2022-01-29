import { Auth, onAuthStateChanged, User } from 'firebase/auth'
import { useState } from 'react'

export const useCurrentUser = (auth: Auth) => {
  const [currentUser, setCurrentUser] = useState<User | null>()
  const [error, setError] = useState<Error>()

  onAuthStateChanged(
    auth,
    (user) => setCurrentUser(user),
    (err) => setError(err)
  )

  const loading = currentUser === undefined

  return [currentUser, loading, error]
}
