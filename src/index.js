
// sample firebase test
// use require instead of import
import firebase from 'firebase/compat/app';
const firebaseConfig = {
    apiKey: "AIzaSyAB5SYXQCGrGV5sv0vNmU94_gOdtSr_rcQ",
    authDomain: "spry-truck-396704.firebaseapp.com",
    projectId: "spry-truck-396704",
    storageBucket: "spry-truck-396704.appspot.com",
    messagingSenderId: "639103350444",
    appId: "1:639103350444:web:52d02c93b29eae1de05109",
    measurementId: "G-L002QQ92FX"
  };





const app = firebase.initializeApp(firebaseConfig);

console.log(app.options);  // "[DEFAULT]"