// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7x12TrCP36Ma_M02DEVSgy4AYEEcdgWk",
  authDomain: "brand-shop-ca560.firebaseapp.com",
  projectId: "brand-shop-ca560",
  storageBucket: "brand-shop-ca560.appspot.com",
  messagingSenderId: "280436849257",
  appId: "1:280436849257:web:378ae82d18911b3f1f80f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth