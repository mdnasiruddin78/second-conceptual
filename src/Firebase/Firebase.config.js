// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg_nTCGHGAAZjQ-FtAeR4lFeyMLYA8vRc",
  authDomain: "dragon-news-star.firebaseapp.com",
  projectId: "dragon-news-star",
  storageBucket: "dragon-news-star.firebasestorage.app",
  messagingSenderId: "636357527495",
  appId: "1:636357527495:web:690aaa1c75034756d0bbe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);