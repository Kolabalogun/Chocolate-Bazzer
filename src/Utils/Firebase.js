// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrIkanIDhZWQl7XwHoJJPqlxn40VrQE0s",
  authDomain: "thechocolatebazzer.firebaseapp.com",
  projectId: "thechocolatebazzer",
  storageBucket: "thechocolatebazzer.appspot.com",
  messagingSenderId: "773603779222",
  appId: "1:773603779222:web:f1c0861c299950ad9318b7",
  measurementId: "G-XQRZ70EXPH"
};

// Initialize Firebase
export const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// export const fs = firebase



