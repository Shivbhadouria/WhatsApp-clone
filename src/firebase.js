import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyhLuuVePzQIaxsmY-RCyJMlS6sU988Pk",
    authDomain: "whats-app-clone-78980.firebaseapp.com",
    databaseURL: "https://whats-app-clone-78980.firebaseio.com",
    projectId: "whats-app-clone-78980",
    storageBucket: "whats-app-clone-78980.appspot.com",
    messagingSenderId: "370824868699",
    appId: "1:370824868699:web:f888f35670faf8aef9e07e",
    measurementId: "G-0YXV4LDXD9"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;