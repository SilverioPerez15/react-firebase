import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBTTAKa3xygib3Vi_n7DAxFDMLlCADYWLI",
    authDomain: "react-firebase-bba5d.firebaseapp.com",
    projectId: "react-firebase-bba5d",
    storageBucket: "react-firebase-bba5d.appspot.com",
    messagingSenderId: "260474651328",
    appId: "1:260474651328:web:5950d69a968c6674282325"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
    firebase,
    db, 
}