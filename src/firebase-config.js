// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFPSS85CarluPWhh9mhBh0x_6oMt5KDUs",
  authDomain: "chatapp-8e5c3.firebaseapp.com",
  projectId: "chatapp-8e5c3",
  storageBucket: "chatapp-8e5c3.firebasestorage.app",
  messagingSenderId: "930890545279",
  appId: "1:930890545279:web:616e3871a379693bb0e74a",
  measurementId: "G-XKVF3QXJ61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)