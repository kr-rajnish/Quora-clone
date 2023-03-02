// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAek7mp4gLDZxmq2cKBQxBK9z9xTdcNmW0",
  authDomain: "quora-c14ec.firebaseapp.com",
  projectId: "quora-c14ec",
  storageBucket: "quora-c14ec.appspot.com",
  messagingSenderId: "706356636712",
  appId: "1:706356636712:web:664bc850ba2e39b9c0591d",
  measurementId: "G-4YVSVYFSQ3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);


export { auth, provider };
export default db;
