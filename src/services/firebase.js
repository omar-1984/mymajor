import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyD6o9wXd-5XlJghrWjgOwYxdB2YscKeKPk",
  authDomain: "mymajor-942d0.firebaseapp.com",
  databaseURL: "https://mymajor-942d0.firebaseio.com",
  projectId: "mymajor-942d0",
  storageBucket: "mymajor-942d0.appspot.com",
  messagingSenderId: "760544293666",
  appId: "1:760544293666:web:092997295490bbe4382b7b",
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();
