// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB9LbZNj7NSsiqDgO1GQTZSha2FOxqp-Y",
  authDomain: "edu-world-1200d.firebaseapp.com",
  projectId: "edu-world-1200d",
  storageBucket: "edu-world-1200d.appspot.com",
  messagingSenderId: "132441923008",
  appId: "1:132441923008:web:e53f1b23f2fb4088f27c25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
