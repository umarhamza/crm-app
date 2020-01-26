import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAZzFrDnT4S46PCch3TDnNYq4hRyQfqvCU",
  authDomain: "client-records-b7b1d.firebaseapp.com",
  databaseURL: "https://client-records-b7b1d.firebaseio.com",
  projectId: "client-records-b7b1d",
  storageBucket: "",
  messagingSenderId: "105010482560",
  appId: "1:105010482560:web:43ef0b7d2d781113"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
  // timestampsInSnapshots: true
});

export default firebase;