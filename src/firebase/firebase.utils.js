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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = await firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists)
    {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });

        }catch (error) {
            console.log('erro ao criar usuário', error.message);
        }
    }

    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;