import { initializeApp, getApp, getApps } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAj_JIzU2q19NlU64NRX1EBV3FsRMmkz0c",
  authDomain: "clerk-login-d919c.firebaseapp.com",
  projectId: "clerk-login-d919c",
  storageBucket: "clerk-login-d919c.appspot.com",
  messagingSenderId: "648771698750",
  appId: "1:648771698750:web:60eea9466c8f2912db516f"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };