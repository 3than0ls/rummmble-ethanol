import firebase from 'firebase';
import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAEfVJPxnnUCxfTVG62QrbQtPT01lfuYbU',
  authDomain: 'rummmble-ethanol.firebaseapp.com',
  databaseURL: 'https://rummmble-ethanol.firebaseio.com',
  projectId: 'rummmble-ethanol',
  storageBucket: 'rummmble-ethanol.appspot.com',
  messagingSenderId: '294916274182',
  appId: '1:294916274182:web:c567a9020fb12011982b87',
  measurementId: 'G-E7F3T0XYZ7',
};

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.auth = app.auth();
  }

  createUserWithEmailAndPassword(email, password) {
    this.auth.createUserWithEmailAndPassword(email, password);
  }

  signInWithEmailAndPassword(email, password) {
    this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() { this.auth.signOut(); }
}

export default Firebase;
