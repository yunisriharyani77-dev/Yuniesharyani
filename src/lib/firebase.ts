import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6wEHWoj50HZUzy49G1nXhQLpnykoQQOc",
  authDomain: "cebete-f7526.firebaseapp.com",
  databaseURL: "https://cebete-f7526-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cebete-f7526",
  storageBucket: "cebete-f7526.firebasestorage.app",
  messagingSenderId: "621769327906",
  appId: "1:621769327906:web:8a98a142994ae2c462117b",
  measurementId: "G-GD1HCVRHS3"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, get, set, child };
