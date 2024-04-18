import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const config = {
  apiKey: "AIzaSyBlea2VA09P-9rCrveFEuEL2OUvG_FqOjQ",
  authDomain: "photowall-14443.firebaseapp.com",
  databaseURL: "https://photowall-14443-default-rtdb.firebaseio.com",
  projectId: "photowall-14443",
  storageBucket: "photowall-14443.appspot.com",
  messagingSenderId: "356260184403",
  appId: "1:356260184403:web:6dd4940494560fa165a1a6",
  measurementId: "G-9XFBV8TXKC"
};

// firebase.firestore().enablePersistence();
const app = initializeApp(config);
const database = getDatabase();
export default database;
