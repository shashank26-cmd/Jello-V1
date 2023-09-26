import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB17BcTeWwyQDrZ6Tyu5c8Edtx2Z91Zays",
  authDomain: "jello-7b31c.firebaseapp.com",
  projectId: "jello-7b31c",
  storageBucket: "jello-7b31c.appspot.com",
  messagingSenderId: "964556728673",
  appId: "1:964556728673:web:01d5cf839fe86f90a47d20",
  measurementId: "G-EMVGNGS0EP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initializing Firebase Services
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)