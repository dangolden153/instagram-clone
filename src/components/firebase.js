import firebase from 'firebase'
// import 'firebase/auth'
// import 'firebase/storage'
// import 'firebase/database'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp =  firebase.initializeApp( {
  apiKey: "AIzaSyBL551e9Yi4qUy68XbEl3q4i-0ZW1ng7vk",
  authDomain: "instagram-clone-d02db.firebaseapp.com",
  databaseURL: "https://instagram-clone-d02db-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-d02db",
  storageBucket: "instagram-clone-d02db.appspot.com",
  messagingSenderId: "957243088766",
  appId: "1:957243088766:web:430eef654f9ede9bd69d2f",
  measurementId: "G-PECT1BPY7K"
  });

  
  export const db_firestore = firebaseApp.firestore()
  export const db = firebase.database()

  export const auth = firebase.auth()
  export const storage = firebase.storage()

  export default firebase