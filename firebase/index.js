import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWOty25evzM-8YbURdUMExgidg6c-1FbE",
  authDomain: "week-07.firebaseapp.com",
  projectId: "week-07",
  storageBucket: "week-07.appspot.com",
  messagingSenderId: "1080389165833",
  appId: "1:1080389165833:web:729381dcbba1a7a736a9d8",
  measurementId: "G-NRJY3QJYNN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; 