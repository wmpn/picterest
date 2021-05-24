import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDgHQP2CDoHfMfKLinw2iKi85rick-SWAo",
    authDomain: "picterest-web-app.firebaseapp.com",
    databaseURL: "https://picterest-web-app-default-rtdb.firebaseio.com",
    projectId: "picterest-web-app",
    storageBucket: "picterest-web-app.appspot.com",
    messagingSenderId: "172937114136",
    appId: "1:172937114136:web:3bd64979d7d1a280c8896d",
    measurementId: "G-P1PR54TYYE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
export { projectStorage, projectFirestore };