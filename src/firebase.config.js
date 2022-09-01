import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy7Jw0wu0nYfSiT8VRaitUN_JTg7hjZlc",
  authDomain: "house-marketplace-app-f10b1.firebaseapp.com",
  projectId: "house-marketplace-app-f10b1",
  storageBucket: "house-marketplace-app-f10b1.appspot.com",
  messagingSenderId: "1017226216663",
  appId: "1:1017226216663:web:4293b2c98502d767cedc92",
  measurementId: "G-L6WW1NC8FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()