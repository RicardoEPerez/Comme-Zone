import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB7P5OTiiz3VqW0SENkmYWhcrXHFqBb_1U",
  authDomain: "comme-zone.firebaseapp.com",
  projectId: "comme-zone",
  storageBucket: "comme-zone.appspot.com",
  messagingSenderId: "273523049999",
  appId: "1:273523049999:web:c0fefbb9a2ba488613457a"
};

firebase.initializeApp(firebaseConfig);

export { firebase }


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB7P5OTiiz3VqW0SENkmYWhcrXHFqBb_1U",
//   authDomain: "comme-zone.firebaseapp.com",
//   projectId: "comme-zone",
//   storageBucket: "comme-zone.appspot.com",
//   messagingSenderId: "273523049999",
//   appId: "1:273523049999:web:c0fefbb9a2ba488613457a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);