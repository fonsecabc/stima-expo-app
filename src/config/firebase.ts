import { Platform } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { browserLocalPersistence, setPersistence } from 'firebase/auth'
import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app'
import { Auth, getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native'

const firebaseConfig = {
  apiKey: 'AIzaSyCzBoHUFnvEr-M5zi0hyHrofkoW8h9adlw',
  authDomain: 'stima-2734b.firebaseapp.com',
  projectId: 'stima-2734b',
  storageBucket: 'stima-2734b.appspot.com',
  messagingSenderId: '42824809728',
  appId: '1:42824809728:web:adaa8345cccb4c0f7c47e5',
  measurementId: 'G-TQZ9N77QE0'
}

let app: FirebaseApp
let auth: Auth

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig)
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  })
} else {
  app = getApp()
  auth = getAuth(app)
}

Platform.OS === 'web' && setPersistence(auth, browserLocalPersistence)

export { app, auth }