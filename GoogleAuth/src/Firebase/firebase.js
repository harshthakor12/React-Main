// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoDQwa_jNAxqD-DoctJc9JKXdoFRlY5WQ",
  authDomain: "harsh-504b3.firebaseapp.com",
  databaseURL: "https://harsh-504b3-default-rtdb.firebaseio.com",
  projectId: "harsh-504b3",
  storageBucket: "harsh-504b3.firebasestorage.app",
  messagingSenderId: "1097644703524",
  appId: "1:1097644703524:web:394d82b1047ce49106bdb1",
  measurementId: "G-L25FB9Y5XF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
