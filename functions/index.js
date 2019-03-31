const admin = require('firebase-admin')
const functions = require('firebase-functions')

admin.initializeApp(functions.config().firebase)

exports.createAccountDoc = functions.auth.user().onCreate( async (user) => {
  const db = admin.firestore()
  const batch = db.batch()

  const usersCollection = db.collection('users')
  const userRef = usersCollection.doc(user.uid)

  const roomsCollection = db.collection('rooms')
  const roomRef = roomsCollection.doc()

  try{
    await batch.set(userRef, {
      name: 'あなた',
      rooms: [ roomRef.id ]
    })

    await batch.set(roomRef, {
      members: [ user.uid ]
    })

    await batch.commit().then(() => {
      console.log('add user success.')
    })
  }
  catch(e) {
    console.log(`error occurs: ${e}`)
  }
})
