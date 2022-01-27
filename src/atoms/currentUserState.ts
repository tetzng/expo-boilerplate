import { User } from 'firebase/auth'
import { atom } from 'recoil'

export const currentUserState = atom<User | null>({
  key: 'CurrentUser',
  default: null,
})
