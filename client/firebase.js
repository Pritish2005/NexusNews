// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "nexusnews-61e10.firebaseapp.com",
  projectId: "nexusnews-61e10",
  storageBucket: "nexusnews-61e10.appspot.com",
  messagingSenderId: "539545480022",
  appId: "1:539545480022:web:9526727e59a64d299084f7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);