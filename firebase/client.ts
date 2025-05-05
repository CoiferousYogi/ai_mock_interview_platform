// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2XX9wIqAeYXIErchuuSRDDABUPgarHNE",
  authDomain: "prepwise-73ca6.firebaseapp.com",
  projectId: "prepwise-73ca6",
  storageBucket: "prepwise-73ca6.firebasestorage.app",
  messagingSenderId: "847486596746",
  appId: "1:847486596746:web:c3511ed48b56670a861f73",
  measurementId: "G-3HLT4EWMYL",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
