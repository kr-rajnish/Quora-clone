import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAek7mp4gLDZxmq2cKBQxBK9z9xTdcNmW0",
    authDomain: "quora-c14ec.firebaseapp.com",
    projectId: "quora-c14ec",
    storageBucket: "quora-c14ec.appspot.com",
    messagingSenderId: "706356636712",
    appId: "1:706356636712:web:664bc850ba2e39b9c0591d",
    measurementId: "G-4YVSVYFSQ3"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  const db = firebaseApp.firestore();

  export{auth, provider};
  export default db;