// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-15bc5.firebaseapp.com",
  projectId: "mern-estate-15bc5",
  storageBucket: "mern-estate-15bc5.firebasestorage.app",
  messagingSenderId: "586280877361",
  appId: "1:586280877361:web:f00da9b701f6bdc6e0c410"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);