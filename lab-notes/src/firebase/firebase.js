// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/analytics";
import { getFirestore, collection, getDocs, query } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

/* import { getFirestore, addDoc, collection, onSnapshot } from "firebase/firestore";  */

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
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

//Para obtener una lista de notas de la BD de Firebase
async function getNotes() {
  const notesCol = query(collection(db, 'noteCollection'));
  const noteSnapshot = await getDocs(notesCol);
  const noteList = noteSnapshot.docs.map(doc =>{
    return doc.data()
  });
  return noteList;
}



export { db, getNotes };
//Esta función es propia de Firestore para recargar autamaticamente las notas
/* export { addDoc, collection, onSnapshot } */ 