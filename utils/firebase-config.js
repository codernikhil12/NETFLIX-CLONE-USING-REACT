// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBqTRYOwZYpkH7Tu6Eumz-MrEqx4qsmKGk",
  authDomain: "react-netflix-clone-a8af2.firebaseapp.com",
  projectId: "react-netflix-clone-a8af2",
  storageBucket: "react-netflix-clone-a8af2.appspot.com",
  messagingSenderId: "912462856769",
  appId: "1:912462856769:web:24a6f1167ae1b61fe0bcc0",
  measurementId: "G-T6G7Q1PYEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)