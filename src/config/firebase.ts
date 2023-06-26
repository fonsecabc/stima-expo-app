import AsyncStorage from '@react-native-async-storage/async-storage'
import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app'
import { Analytics, getAnalytics, initializeAnalytics } from 'firebase/analytics'
import { Auth, getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native'
import { Platform } from 'react-native'
import { browserLocalPersistence, setPersistence } from 'firebase/auth'

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
let analytics: Analytics

if (getApps().length === 0) {
    app = initializeApp(firebaseConfig)
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage),
    })
    analytics = initializeAnalytics(app)
    
} else {
    app = getApp()
    auth = getAuth(app)
    analytics = getAnalytics(app)
}

Platform.OS === 'web' && setPersistence(auth, browserLocalPersistence)

export { app, auth, analytics }