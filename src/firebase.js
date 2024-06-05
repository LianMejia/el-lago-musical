// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHC5Ml2PNLbTyuEiy34WUAeitrl6aqVmg",
  authDomain: "el-lago-musical.firebaseapp.com",
  projectId: "el-lago-musical",
  storageBucket: "el-lago-musical.appspot.com",
  messagingSenderId: "1031472852706",
  appId: "1:1031472852706:web:151721f0755bc401e938bb",
  measurementId: "G-7DV0HKXLKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);