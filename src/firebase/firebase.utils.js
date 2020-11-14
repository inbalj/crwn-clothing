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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;