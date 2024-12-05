// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD73NS05HdxHldW7pLAhZ9pcGF09vrmVcI",
  authDomain: "fir-two-e9ce5.firebaseapp.com",
  projectId: "fir-two-e9ce5",
  storageBucket: "fir-two-e9ce5.firebasestorage.app",
  messagingSenderId: "83658636312",
  appId: "1:83658636312:web:415106652003cb812f176d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;