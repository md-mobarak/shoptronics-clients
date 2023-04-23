// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxFzzXA2P3HAWooa846HdUF8wPjjULUpc",
  authDomain: "shoptronics-ed9c3.firebaseapp.com",
  projectId: "shoptronics-ed9c3",
  storageBucket: "shoptronics-ed9c3.appspot.com",
  messagingSenderId: "552425777310",
  appId: "1:552425777310:web:85e25bbdb6a19f9781738f",
  measurementId: "G-KS1JXEHTTD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
