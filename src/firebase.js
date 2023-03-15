import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,}
 from "firebase/auth";
import {
 getFirestore,
 query,
 getDocs,
  collection,where,addDoc,
}from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBszU0ia4ppWiLKAgeMP2c2_klFepKXk9E",
  authDomain: "react-crud-71989.firebaseapp.com",
  projectId: "react-crud-71989",
  storageBucket: "react-crud-71989.appspot.com",
  messagingSenderId: "84962000338",
  appId: "1:84962000338:web:c87ebca54ecb8808f0dc0b",
  measurementId: "G-50KFDK1K6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default auth