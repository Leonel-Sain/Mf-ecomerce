import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCSsg2XPisFyg0SEeibtKEt0GnHqD7e74o",
    authDomain: "fresh-mf.firebaseapp.com",
    projectId: "fresh-mf",
    storageBucket: "fresh-mf.appspot.com",
    messagingSenderId: "317278522448",
    appId: "1:317278522448:web:df16a995d7903a10ced555"
};

const app = initializeApp(firebaseConfig);
export const db =getFirestore (app)