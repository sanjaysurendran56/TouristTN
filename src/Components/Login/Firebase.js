// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDheFvgsLaMvhy9_RDEED7-EOKmMzRI-g",
  authDomain: "login-96c39.firebaseapp.com",
  projectId: "login-96c39",
  storageBucket: "login-96c39.appspot.com",
  messagingSenderId: "489753187705",
  appId: "1:489753187705:web:1591c2211d1a2f5c610ba8",
  measurementId: "G-FHCR507EZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export default app;
