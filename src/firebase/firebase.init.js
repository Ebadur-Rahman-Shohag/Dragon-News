// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBNR8lmNMyL_1H7pILG0gDyNkMhytrItkQ",
    authDomain: "dragon-news-b7422.firebaseapp.com",
    projectId: "dragon-news-b7422",
    storageBucket: "dragon-news-b7422.firebasestorage.app",
    messagingSenderId: "913032920968",
    appId: "1:913032920968:web:df266c975bf3860989443d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;