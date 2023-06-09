import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: 'AIzaSyCzBoHUFnvEr-M5zi0hyHrofkoW8h9adlw',
    authDomain: 'stima-2734b.firebaseapp.com',
    projectId: 'stima-2734b',
    storageBucket: 'stima-2734b.appspot.com',
    messagingSenderId: '42824809728',
    appId: '1:42824809728:web:adaa8345cccb4c0f7c47e5',
    measurementId: 'G-TQZ9N77QE0'
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app) 
export const analytics = getAnalytics(app)