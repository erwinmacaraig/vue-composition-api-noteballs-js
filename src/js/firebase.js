// Import the functions you need from the SDKs you need
import {
    initializeApp
} from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBqFCep62U5qP_l9WWo97AJOqylcjGAOCc',
    authDomain: 'noteballs-4b22d.firebaseapp.com',
    projectId: 'noteballs-4b22d',
    storageBucket: 'noteballs-4b22d.appspot.com',
    messagingSenderId: '353161117584',
    appId: '1:353161117584:web:9351cc6b86f4c115433d15'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { 
    db
}