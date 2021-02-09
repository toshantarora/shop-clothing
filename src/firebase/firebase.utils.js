import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAixBbp9yGWyX7zLzBAZ0yT1yIfoWNO_As",
    authDomain: "shop-db-5bee9.firebaseapp.com",
    projectId: "shop-db-5bee9",
    storageBucket: "shop-db-5bee9.appspot.com",
    messagingSenderId: "103241016060",
    appId: "1:103241016060:web:240b167fdf1f13aa29ad79",
    measurementId: "G-D491MER2C9"
  };
  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`)
  
    const snapShot = await userRef.get();
    console.log(snapShot);

    if(!snapShot.exists)
    {
      const {displayName, email} =userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch (error)
      {
          console.log('error creating user', error.message);
      }
    }
    return userRef;
    // console.log(firestore.doc('users/hdh34232'));
  }

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;