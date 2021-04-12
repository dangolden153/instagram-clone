import firebase from 'firebase'
// import 'firebase/auth'
// import 'firebase/storage'
// import 'firebase/database'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp =  firebase.initializeApp( {
  apiKey: "AIzaSyDOQEz1TTSgkznhSZX8mHkWsGDXvuGAsFI",
  authDomain: "ig-clone-99d1c.firebaseapp.com",
  projectId: "ig-clone-99d1c",
  storageBucket: "ig-clone-99d1c.appspot.com",
  messagingSenderId: "272179859383",
  appId: "1:272179859383:web:3232dbbf94b601929e6232",
  measurementId: "G-PRGN8DH87Z"
  });

  
  export const db_firestore = firebaseApp.firestore()
  // export const db = firebase.database()

  export const auth = firebase.auth()
  export const storage = firebase.storage()

  export default firebase