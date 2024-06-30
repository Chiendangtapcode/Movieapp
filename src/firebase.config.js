import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7gMlzcSPjuZumwcoVGfUDee57U-L03bU",
  authDomain: "react-movie-clone-23025.firebaseapp.com",
  projectId: "react-movie-clone-23025",
  storageBucket: "react-movie-clone-23025.appspot.com",
  messagingSenderId: "723208298342",
  appId: "1:723208298342:web:7f4aeb6db6be37a50472a7",
  measurementId: "G-FHKHQ8QWP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
