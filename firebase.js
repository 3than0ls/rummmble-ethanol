import firebase from 'firebase/app';
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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
