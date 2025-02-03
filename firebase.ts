import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCTYVi32ih7R2hcBIAlF_kdjqz7Ox43uXk",
  authDomain: "intellipal.firebaseapp.com",
  projectId: "intellipal",
  storageBucket: "intellipal.firebasestorage.app",
  messagingSenderId: "345763985275",
  appId: "1:345763985275:web:ffaa7ca821997ba04cefde",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
