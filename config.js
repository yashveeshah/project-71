import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBThhwSmCFS_bz6GjeDLCipcGcCn3YRhWw",
    authDomain: "e-library-4a296.firebaseapp.com",
    projectId: "e-library-4a296",
    storageBucket: "e-library-4a296.appspot.com",
    messagingSenderId: "805517358576",
    appId: "1:805517358576:web:34fcb9fec71c8597e05935"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
