// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMxlgyCQSaUOsV9WyKIuvN20Z4KR7qR8w",
  authDomain: "blogtime-cd0a8.firebaseapp.com",
  projectId: "blogtime-cd0a8",
  storageBucket: "blogtime-cd0a8.appspot.com",
  messagingSenderId: "203607621952",
  appId: "1:203607621952:web:2fa17e0eaa922c861f7aa5",
  measurementId: "G-KBG1P7H980"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore
const firestore = getFirestore(app);

//Initialize Firebase Auth
const auth = getAuth()

//Initialize Analytics
const analytics = getAnalytics(app);

export {firestore, auth}