// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgsnQRL7RuszUOnxjWcrGWoJxJSUayERE",
  authDomain: "genius-lanka-tours.firebaseapp.com",
  projectId: "genius-lanka-tours",
  storageBucket: "genius-lanka-tours.appspot.com",
  messagingSenderId: "1063231227351",
  appId: "1:1063231227351:web:37ebf801dfe1c16b3e3792",
  measurementId: "G-CZTYZF05WN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore();
