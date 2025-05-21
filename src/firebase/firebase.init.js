import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2y1QKO6I5q0qYSwIfMqk0ZCqdDZiU2Cw",
  authDomain: "coffee-store-auth-34d86.firebaseapp.com",
  projectId: "coffee-store-auth-34d86",
  storageBucket: "coffee-store-auth-34d86.firebasestorage.app",
  messagingSenderId: "116464043439",
  appId: "1:116464043439:web:125655da044de7be07db5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);