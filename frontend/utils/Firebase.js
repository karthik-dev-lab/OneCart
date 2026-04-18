// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginonecart-e4dc1.firebaseapp.com",
  projectId: "loginonecart-e4dc1",
  storageBucket: "loginonecart-e4dc1.firebasestorage.app",
  messagingSenderId: "1028784638739",
  appId: "1:1028784638739:web:f4dd8c89388cbe2c3328e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };