import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDVV98tQUIubr6DlKBhdMQpjU2bp-TPjws",
  authDomain: "tarefasplus-ebd55.firebaseapp.com",
  projectId: "tarefasplus-ebd55",
  storageBucket: "tarefasplus-ebd55.appspot.com",
  messagingSenderId: "120292842770",
  appId: "1:120292842770:web:3c24e516144fccc56627cb"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };