// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIH20ZBoUzgDpJig_SbqsYXUA0wyiWsow",
  authDomain: "admitkard-otptask.firebaseapp.com",
  projectId: "admitkard-otptask",
  storageBucket: "admitkard-otptask.appspot.com",
  messagingSenderId: "643417027475",
  appId: "1:643417027475:web:29dd693281e3d5777b2e66",
  measurementId: "G-MZZCRLLVPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);