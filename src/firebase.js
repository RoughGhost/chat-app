import firebase from "firebase/app"; 
import "firebase/auth";

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyD7Q0MzDh1gxosJXE9lbcA0gHSZcJdq12w",
    authDomain: "unichat-84d90.firebaseapp.com",
    projectId: "unichat-84d90",
    storageBucket: "unichat-84d90.appspot.com",
    messagingSenderId: "430865488987",
    appId: "1:430865488987:web:1190df3cb5b1f3ad9e337e"
  }).auth();