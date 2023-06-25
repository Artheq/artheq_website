// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import "firebase/auth";
// import "firebase/storage";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_appId,
//   databaseURL: process.env.REACT_APP_databaseURL
// };

// const app = firebase.initializeApp(firebaseConfig);
// export const auth = app.auth();
// export const store = app.firestore();
// export const storage = app.storage();
// // export default firebase;

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXxu-qCAF_ZmPjBLuqPGiFSLqVWj3jBxA",
  authDomain: "onboarding-host-a333cad854ac46.firebaseapp.com",
  projectId: "onboarding-host-a333cad854ac46",
  storageBucket: "onboarding-host-a333cad854ac46.appspot.com",
  messagingSenderId: "640490499097",
  appId: "1:640490499097:web:72b101be3dbcdee4c60e88",
  measurementId: "G-SCGSGEGB84"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


