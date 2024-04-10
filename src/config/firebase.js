import * as firebase from "firebase/app";
import * as firebaseAuth from "firebase/auth";
import * as firebaseFirestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkllgWQg5hbjf3y-AQSL_UhZKQ2QCW2tg",
  authDomain: "avocado-acab2.firebaseapp.com",
  projectId: "avocado-acab2",
  storageBucket: "avocado-acab2.appspot.com",
  messagingSenderId: "9104189961",
  appId: "1:9104189961:web:aea93cae08037b77a5e6d8",
  measurementId: "G-KKZ7Z2CE4B",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebaseAuth.getAuth(app);
const firestore = firebaseFirestore.getFirestore(app);
const googleProvider = new firebaseAuth.GoogleAuthProvider();

export { firebaseConfig, auth, firestore, googleProvider };
