
// sample firebase test
// use require instead of import
import firebase from 'firebase/compat/app';
const firebaseConfig = {
    apiKey: "Enter API KEY",
    authDomain: "spry-truck-396704.firebaseapp.com",
    projectId: "spry-truck-396704",
    storageBucket: "spry-truck-396704.appspot.com",
    messagingSenderId: "639103350444",
    appId: "Enter app Id",
    measurementId: "G-L002QQ92FX"
  };





const app = firebase.initializeApp(firebaseConfig);

console.log(app.options);  // "[DEFAULT]"
