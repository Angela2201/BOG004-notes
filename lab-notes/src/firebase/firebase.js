// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAU-x84UFLb858FBu5F6BW29fR_oYt3PJc",
  authDomain: "lab-notes-27a9a.firebaseapp.com",
  projectId: "lab-notes-27a9a",
  storageBucket: "lab-notes-27a9a.appspot.com",
  messagingSenderId: "621669163186",
  appId: "1:621669163186:web:004f840881331b736a69ab",
  measurementId: "G-SZQ6N0PFQR"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = app.firestore; 