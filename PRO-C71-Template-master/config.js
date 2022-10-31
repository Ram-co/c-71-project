import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyA_l1Tbb_XlrdyhwEah_gB_ayeiN9xqeOs",
    authDomain: "c-71-44857.firebaseapp.com",
    projectId: "c-71-44857",
    storageBucket: "c-71-44857.appspot.com",
    messagingSenderId: "759784288178",
    appId: "1:759784288178:web:50249a47c42c8b5a617eab"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
