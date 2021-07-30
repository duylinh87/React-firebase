

import firebase from "firebase/app";
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyB7ah9-kLLOwf5memJL0DPgKokIAL-fsP4",
    authDomain: "chat-app-6e859.firebaseapp.com",
    projectId: "chat-app-6e859",
    storageBucket: "chat-app-6e859.appspot.com",
    messagingSenderId: "749727690214",
    appId: "1:749727690214:web:d7d64f9c886736f38eba27",
    measurementId: "G-BL7LKFSFGL"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();
  const db = firebase.firestore();
  export {auth,db};
  export default firebase;