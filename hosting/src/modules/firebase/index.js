import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import config from './config'

firebase.initializeApp(config)

export const auth = firebase.auth()

export const signInAnonymously = () => {
  return auth.signInAnonymously().catch((error) => {
    return { error }
  })
}

const db = firebase.firestore()
export const qiitaArticlesCollection = db.collection('qiita_articles')
export const githubReposCollection = db.collection('github_repositories')
export const roomsCollection = db.collection('rooms')
export const usersCollection = db.collection('users')

export const getMessagesCollection = (roomId) => {
  const roomRef = roomsCollection.doc(roomId)
  const messagesCollection = roomRef.collection('messages')
  return messagesCollection
}

export const sendMessage = async (roomId, uid, message) => {
  const batch = db.batch()
  const messagesCollection = getMessagesCollection(roomId)
  const messageRef = messagesCollection.doc()

  try {
    await batch.set(messageRef, {
      user: uid,
      message: message,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    })

    await batch.commit().then(() => {
      return { result: 'send message success' }
    })
  }
  catch(error) {
    return { error }
  }
}
