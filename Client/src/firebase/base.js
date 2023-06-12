import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBPKd-HcaDfZbKyHqirg3vIog8eSZpozq4",
//   authDomain: "sleep-tracker-d5edb.firebaseapp.com",
//   databaseURL: "https://sleep-tracker-d5edb-default-rtdb.firebaseio.com",
//   projectId: "sleep-tracker-d5edb",
//   storageBucket: "sleep-tracker-d5edb.appspot.com",
//   messagingSenderId: "179068541931",
//   appId: "1:179068541931:web:8b339a477fc71ab0db97ae",
//   measurementId: "G-W43SV3BMWS"
// };


const firebaseConfig = {
apiKey: "AIzaSyCYCPKalb1GbP_IYf6f9SSqIsKQZ8UgMRA",

  authDomain: "scanel-7762e.firebaseapp.com",

  databaseURL: "https://scanel-7762e-default-rtdb.firebaseio.com",

  projectId: "scanel-7762e",

  storageBucket: "scanel-7762e.appspot.com",

  messagingSenderId: "414361134244",

  appId: "1:414361134244:web:24e7017c8740e4fee13231",

  measurementId: "G-46X687TR9Q"
};



const app = firebase.initializeApp(firebaseConfig);

// upload user data like email and number to firestore

export const auth = app.auth();


export default app;