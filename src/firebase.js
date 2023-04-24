import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCUh0LcyRGRo8T4dWNaxEvkzQsGWAReycU",
  authDomain: "fir-7074e.firebaseapp.com",
  projectId: "fir-7074e",
  storageBucket: "fir-7074e.appspot.com",
  messagingSenderId: "605471863475",
  appId: "1:605471863475:web:0906ee759942c4e68b36c6",
  measurementId: "G-3XX3W9GJP1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export{db, auth};