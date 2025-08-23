// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGxsEf8zQ4opYG282hBFTzwO5sO6Nudvg",
  authDomain: "login-730ea.firebaseapp.com",
  projectId: "login-730ea",
  storageBucket: "login-730ea.firebasestorage.app",
  messagingSenderId: "783980129269",
  appId: "1:783980129269:web:ecff6127eaec62dbc08ebc",
  measurementId: "G-BNQM0XY5QC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
