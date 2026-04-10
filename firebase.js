import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 👈 ADD THIS

const firebaseConfig = {
  apiKey: "AIzaSyBpcoJVObvQP1-muaBRCKma2Doawz3g7yA",
  authDomain: "health-dashboard-2.firebaseapp.com",
  projectId: "health-dashboard-2",
  storageBucket: "health-dashboard-2.firebasestorage.app",
  messagingSenderId: "591425987557",
  appId: "1:591425987557:web:8673a85a29ed6bdc78450c"
};

const app = initializeApp(firebaseConfig);

// 👇 ADD THIS (MOST IMPORTANT)
export const db = getFirestore(app);
