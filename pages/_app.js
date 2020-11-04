/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import '../styles/tailwind.css';
import React from 'react';
import Firebase, { FirebaseContext } from '../components/firebase';

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
}

export default MyApp;
