import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let config = {
    apiKey: "AIzaSyCR3DzpdnWoqpTB4NYsLmLYGhqN84y95U0",
    authDomain: "kredo-staging.firebaseapp.com",
    databaseURL: "https://kredo-staging.firebaseio.com",
    projectId: "kredo-staging",
    storageBucket: "kredo-staging.appspot.com",
    messagingSenderId: "21639920016",
    appId: "1:21639920016:web:8176acac6de6e2b85c9b15",
    measurementId: "G-G3EYP638P8"
};

let firebaseApp = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export { firebaseApp };