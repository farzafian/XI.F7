// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  /* utama */
  apiKey: "AIzaSyCpWjJr00fEEyD92Zu_UjsHpn__54D4aKQ",
  authDomain: "web-kelas-7f3d6.firebaseapp.com",
  projectId: "web-kelas-7f3d6",
  storageBucket: "web-kelas-7f3d6.appspot.com",
  messagingSenderId: "978596143648",
  appId: "1:978596143648:web:8603281f2f5296a889d245",
  measurementId: "G-M5GCXKM64W"
/* sec */
/* apiKey: "AIzaSyCiId2YJAxd3PIXqAXNjx6hfZYycpQlzl0",
  authDomain: "web-kelas-1.firebaseapp.com",
  projectId: "web-kelas-1",
  storageBucket: "web-kelas-1.appspot.com",
  messagingSenderId: "797263276694",
  appId: "1:797263276694:web:7bc8be9e05f2f87adfb0b7" */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();