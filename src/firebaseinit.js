// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5lVC3VcoqXC4jzHVa9b1MIetq_oxiKyc",
  authDomain: "future-glider-399907.firebaseapp.com",
  projectId: "future-glider-399907",
  storageBucket: "future-glider-399907.appspot.com",
  messagingSenderId: "700203316348",
  appId: "1:700203316348:web:347ee91b5f4a374eed45f9",
  measurementId: "G-NH4TZS3TE4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);