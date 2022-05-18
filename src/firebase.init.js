// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDdbe-BuVoMjiv0XjbUS8w1PFT6SRvVd4",
    authDomain: "todo-project-75e80.firebaseapp.com",
    projectId: "todo-project-75e80",
    storageBucket: "todo-project-75e80.appspot.com",
    messagingSenderId: "618371103891",
    appId: "1:618371103891:web:00f450783b5aed4bcfa166"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;