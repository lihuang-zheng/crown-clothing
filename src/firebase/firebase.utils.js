import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyANjTFN6GoWWAfdNjxaJpOgjl4N-rBywsA",
  authDomain: "crown-data-base.firebaseapp.com",
  databaseURL: "https://crown-data-base.firebaseio.com",
  projectId: "crown-data-base",
  storageBucket: "crown-data-base.appspot.com",
  messagingSenderId: "792074993233",
  appId: "1:792074993233:web:1bbdafca9721e3c0cfc270",
  measurementId: "G-3GJ3QTPH4Y"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
