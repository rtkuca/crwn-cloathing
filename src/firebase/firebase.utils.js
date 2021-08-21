import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyD0S4SYdPf6H02gDfclFqP-iBHbDY5HQ5Q",
        authDomain: "crwn-db-udemy-632fc.firebaseapp.com",
        projectId: "crwn-db-udemy-632fc",
        storageBucket: "crwn-db-udemy-632fc.appspot.com",
        messagingSenderId: "54441925242",
        appId: "1:54441925242:web:a66482bfb98faeb146f9c3"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;