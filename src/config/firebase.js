import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD30M_DO5Fj_g-PsCmLtME__vZlsHjBJLE",
  authDomain: "real-estate-12.firebaseapp.com",
  projectId: "real-estate-12",
  storageBucket: "real-estate-12.appspot.com",
  messagingSenderId: "548863043038",
  appId: "1:548863043038:web:43ef28865766fe589ce94f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
