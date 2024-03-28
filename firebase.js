import { initializeApp } from "firebase/app";
import { browserSessionPersistence, getAuth, setPersistence } from "firebase/auth";
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyAwxkxQlhocC3xoUiIYaRNn3KPVm3tP3ts",
    authDomain: "nutirition-7e10e.firebaseapp.com",
    projectId: "nutirition-7e10e",
    storageBucket: "nutirition-7e10e.appspot.com",
    messagingSenderId: "975868813254",
    appId: "1:975868813254:web:222247a0bedae1bcbf9cc7",
    measurementId: "G-GR87EJ353G"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);


// Set persistence to SESSION
setPersistence(auth, browserSessionPersistence);

export { app, auth,database};
