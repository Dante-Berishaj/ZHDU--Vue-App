import { getApp, initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCps1_CyrId1qsPq5uQiceHKx-VfR1lk6c",
  authDomain: "zhdu-auth-143a6.firebaseapp.com",
  projectId: "zhdu-auth-143a6",
  storageBucket: "zhdu-auth-143a6.appspot.com",
  messagingSenderId: "463599177472",
  appId: "1:463599177472:web:96a48870c8b4700fdbede5"
};

initializeApp(firebaseConfig);

const functions = getFunctions(getApp());
connectFunctionsEmulator(functions, "localhost", 9098);

const db = getFirestore();
connectFirestoreEmulator(db, "localhost", 9097);

const auth = getAuth();
connectAuthEmulator(auth, "http://localhost:9099");

