import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

admin.initializeApp()

export const createUserDoc = functions.auth.user().onCreate((user) => {
  admin.firestore().collection('users').doc(user.uid)
})
