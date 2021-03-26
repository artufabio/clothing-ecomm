import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBha7ULJmX4NvS-W4SfteJRtpUNFrcjJYo",
    authDomain: "clothing-ecomm-db-27cab.firebaseapp.com",
    projectId: "clothing-ecomm-db-27cab",
    storageBucket: "clothing-ecomm-db-27cab.appspot.com",
    messagingSenderId: "444026372009",
    appId: "1:444026372009:web:4e0368b1b9996b9d52ceb8",
    measurementId: "G-TCBC5CWFMK"
};

export const createUserProfileDocument = async ( userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
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