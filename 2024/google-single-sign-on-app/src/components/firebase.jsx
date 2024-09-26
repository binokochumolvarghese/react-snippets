// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FB_API_KEY,
    authDomain: "single-sign-on-app-4d587.firebaseapp.com",
    projectId: "single-sign-on-app-4d587",
    storageBucket: "single-sign-on-app-4d587.appspot.com",
    messagingSenderId: "803536495054",
    appId: "1:803536495054:web:b8ade61206f5f0312b8b9f"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
