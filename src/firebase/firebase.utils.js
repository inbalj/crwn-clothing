import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBkJLa9at8UR6GBjWRwm70OZ4Xp9OL4D0A",
  authDomain: "crwn-clothing-db-5ef2b.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-5ef2b.firebaseio.com",
  projectId: "crwn-clothing-db-5ef2b",
  storageBucket: "crwn-clothing-db-5ef2b.appspot.com",
  messagingSenderId: "106356734846",
  appId: "1:106356734846:web:0ee2586d134f2a7693112f",
  measurementId: "G-MTH0JDS7N2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;