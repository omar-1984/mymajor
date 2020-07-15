import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAkP4tjS9TW3RUY3cq_BF2yZG04zAfiq40",
  authDomain: "masari-df18e.firebaseapp.com",
  databaseURL: "https://masari-df18e.firebaseio.com",
  projectId: "masari-df18e",
  storageBucket: "masari-df18e.appspot.com",
  messagingSenderId: "613504921732",
  appId: "1:613504921732:web:ea956de79217f9a74892d1",
};
firebase.initializeApp(firebaseConfig);

export const db = firebase;
