// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARYtdLbfHKQHSTIw4IS9EMsTqK3pvKhKA",
  authDomain: "biust-notice-board.firebaseapp.com",
  projectId: "biust-notice-board",
  storageBucket: "biust-notice-board.firebasestorage.app",
  messagingSenderId: "426587184407",
  appId: "1:426587184407:web:2060819204affc1839ab52",
  measurementId: "G-1M5N8VEFWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;
