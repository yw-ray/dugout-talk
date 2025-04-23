// lib/firebase.js

import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyChWZ3Ds3t83rlOZpSmwj27JFCLFLLMFG8",
  authDomain: "dugout-talk.firebaseapp.com",
  databaseURL: "https://dugout-talk-default-rtdb.firebaseio.com", // 이 줄 꼭 필요
  projectId: "dugout-talk",
  storageBucket: "dugout-talk.appspot.com", // 여기도 `.app` → `.appspot.com`으로 고쳐야 함
  messagingSenderId: "427321097694",
  appId: "1:427321097694:web:fd6c5a33834468843a714f"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth };


