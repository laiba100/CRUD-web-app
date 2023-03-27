import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgbxnI2xb8foUvsHbaT_qQKv7ob3Va2v4",
  authDomain: "cozad-87a25.firebaseapp.com",
  projectId: "cozad-87a25",
  storageBucket: "cozad-87a25.appspot.com",
  messagingSenderId: "725043791506",
  appId: "1:725043791506:web:c8b06100642ef10d0a084b",
  measurementId: "G-KE4J4JX47D"
};
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}
