// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFKzjsNHiV0Lnq21yUEp4Jt6fi07xh7Sw",
  authDomain: "clone-6e2e0.firebaseapp.com",
  projectId: "clone-6e2e0",
  storageBucket: "clone-6e2e0.appspot.com",
  messagingSenderId: "578209362569",
  appId: "1:578209362569:web:fad27228cca1e107db8c58",
  measurementId: "G-V7HD7TVZCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {db, auth};
