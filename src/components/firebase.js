import firebase from 'firebase'

var firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyBkYUoI2ehLJHgLM8qwd2Ji0tEux5oQMkM",
    authDomain: "portfolio-65c20.firebaseapp.com",
    databaseURL: "https://portfolio-65c20-default-rtdb.firebaseio.com",
    projectId: "portfolio-65c20",
    storageBucket: "portfolio-65c20.appspot.com",
    messagingSenderId: "312505546397",
    appId: "1:312505546397:web:b64e4eaafa1811164d8674"
});

var db = firebase.firestore()

export { db };