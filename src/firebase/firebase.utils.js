import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyBfM0EW9ggT2mlNKSjvRLSw7RTG1h4JyJk",
    authDomain: "udemy-react-zero-to-hero-db.firebaseapp.com",
    databaseURL: "https://udemy-react-zero-to-hero-db.firebaseio.com",
    projectId: "udemy-react-zero-to-hero-db",
    storageBucket: "",
    messagingSenderId: "509352230964",
    appId: "1:509352230964:web:69f4f4e6c58304ed320a61"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists){
      const {  displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(err){
        console.log('error creating the user ',err.message);
      }
    } 
    return userRef;
  }

  export default firebase;