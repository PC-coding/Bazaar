import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAsFj1QeZJIsOXVLpSy7wbP29cjc6cK_Vw",
    authDomain: "bazaar-596f2.firebaseapp.com",
    databaseURL: "https://bazaar-596f2.firebaseio.com",
    projectId: "bazaar-596f2",
    storageBucket: "bazaar-596f2.appspot.com",
    messagingSenderId: "890418728230",
    appId: "1:890418728230:web:7d4276bfdc2e5efddb05e7",
    measurementId: "G-04JE5FMDX0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };