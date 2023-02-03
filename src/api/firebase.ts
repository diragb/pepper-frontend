// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAvCtQhMfdSsMYcuOApeBL70pOD9uPbQfA',
  authDomain: 'pepper-bank-salt.firebaseapp.com',
  projectId: 'pepper-bank-salt',
  storageBucket: 'pepper-bank-salt.appspot.com',
  messagingSenderId: '274677305455',
  appId: '1:274677305455:web:372223126d9204416a7d9a',
  measurementId: 'G-STNEXNKPCH'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
