import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let config = {

};

let firebaseApp = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export { firebaseApp };