import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD5QUnt6LuARg99ULWD6MHeP_uhI5FVfxA",
  authDomain: "bikeride4-337fa.firebaseapp.com",
  projectId: "bikeride4-337fa",
  storageBucket: "bikeride4-337fa.appspot.com",
  messagingSenderId: "205944567815",
  appId: "1:205944567815:web:81fc5efc527c32c40752a2"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
