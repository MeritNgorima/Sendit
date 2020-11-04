import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyB79SKDj6blCBrjLaMLkMLkdMuhEE9jVg4",
    authDomain: "messanger-26374.firebaseapp.com",
    databaseURL: "https://messanger-26374.firebaseio.com",
    projectId: "messanger-26374",
    storageBucket: "messanger-26374.appspot.com",
    messagingSenderId: "876257013490",
    appId: "1:876257013490:web:7ae6baea451fd03ba86a6b"
});

const db  = firebaseApp.firestore();

export default db ;