import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyCc9s03HnL3WKFiA5GVb-nWpaZg1eSFBAY",
    authDomain: "zavedou.firebaseapp.com",
    databaseURL: "https://zavedou.firebaseio.com",
    projectId: "zavedou",
    storageBucket: "zavedou.appspot.com",
    messagingSenderId: "597628758386",
    appId: "1:597628758386:web:7e51f4377ba0a11bca15eb",
  })
  .firestore()