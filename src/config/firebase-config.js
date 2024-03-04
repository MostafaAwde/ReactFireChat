// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy-nYYajEgCIDryQY4Dq929EF2B4wrWU0",
  authDomain: "reactchat-app-b561c.firebaseapp.com",
  projectId: "reactchat-app-b561c",
  storageBucket: "reactchat-app-b561c.appspot.com",
  messagingSenderId: "997304462756",
  appId: "1:997304462756:web:d49aa5e56d93d40e02e531",
  measurementId: "G-816MJS7LTN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
