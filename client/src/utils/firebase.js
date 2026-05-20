
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-ddde9.firebaseapp.com",
  projectId: "interviewiq-ddde9",
  storageBucket: "interviewiq-ddde9.firebasestorage.app",
  messagingSenderId: "179682057831",
  appId: "1:179682057831:web:33e376fccfeff4dd633ec2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}