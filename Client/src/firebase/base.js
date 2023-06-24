import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { firebaseConfig } from "../../firbase-config";

const app = firebase.initializeApp(firebaseConfig);

// upload user data like email and number to firestore

export const auth = app.auth();


export default app;