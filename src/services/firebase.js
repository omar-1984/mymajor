import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyB4cqq6Fe4iIRGgBhOf29Gzs-t5Vc9rFpg",
    authDomain: "wajjihni-d455d.firebaseapp.com",
    databaseURL: "https://wajjihni-d455d.firebaseio.com",
    projectId: "wajjihni-d455d",
    storageBucket: "wajjihni-d455d.appspot.com",
    messagingSenderId: "1033540497678",
    appId: "1:1033540497678:web:53c92e689e9d90fde7675f"
  };
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();