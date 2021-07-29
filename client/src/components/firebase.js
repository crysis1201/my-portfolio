import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAZ5QMv-bWwuVS893e4uWnzECbt8huwG0Y",
    authDomain: "portfolio-a315e.firebaseapp.com",
    projectId: "portfolio-a315e",
    storageBucket: "portfolio-a315e.appspot.com",
    messagingSenderId: "982126938940",
    appId: "1:982126938940:web:62cf80e8b0ffd0d59dec39",
    measurementId: "G-044BCNGPCD"
});

export const db = firebaseApp.firestore();
