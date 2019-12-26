import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "xxxxx",
    authDomain: "xxx-xxx.firebaseapp.com",
    databaseURL: "https://xxx-xxx.firebaseio.com",
    projectId: "xxx-5bxxs3d0",
    storageBucket: "",
    messagingSenderId: "xxxx",
    appId: "1:xxx:web:xxxxx"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;