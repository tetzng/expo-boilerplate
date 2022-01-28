import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

admin.initializeApp()

export const createUserDoc = functions.auth.user().onCreate((user) => {
  admin.firestore().collection('users').doc(user.uid)
})
