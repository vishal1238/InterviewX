
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewagent-2faf5.firebaseapp.com",
  projectId: "interviewagent-2faf5",
  storageBucket: "interviewagent-2faf5.firebasestorage.app",
  messagingSenderId: "827682802724",
  appId: "1:827682802724:web:2855898c9508f2d1b5dcb1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}