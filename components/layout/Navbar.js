/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'next/router';
import { withFirebase } from '../firebase/index.js';

const Navbar = ({ firebase, router }) => {
  const signIn = () => {
    router.push('/login');
  };
  const signOut = () => {
    firebase.signOut();
    router.push('/login');
  };

  const [currentUser, setCurrentUser] = React.useState('');
  firebase.auth.onAuthStateChanged(setCurrentUser);

  let content;
  if (!currentUser) {
    content = (
      <>
        <button
          type="button"
          className="border-2 border-custom-5-cyan text-custom-5-cyan mr-6 px-5 py-2 font-bold rounded focus:outline-none"
          onClick={() => { router.push('/signup'); }}
          onKeyPress={() => { router.push('/signup'); }}
          tabIndex={0}
        >
          Create Account
        </button>
        <button
          type="button"
          className="bg-custom-5-cyan text-black px-5 py-2 font-bold rounded focus:outline-none"
          onClick={signIn}
          onKeyPress={signIn}
          tabIndex={-1}
        >
          Sign In
        </button>
      </>
    );
  } else {
    content = (
      <>
        <button
          type="button"
          className="border-2 border-custom-5-cyan text-custom-5-cyan mr-6 px-5 py-2 font-bold rounded shadow custom-shadow focus:outline-none"
          onClick={() => (router.push('/signup'))}
          onKeyPress={() => (router.push('/signup'))}
          tabIndex={0}
        >
          Upload
        </button>
        <button
          type="button"
          className="bg-custom-5-cyan text-black px-5 py-2 font-bold rounded focus:outline-none"
          onClick={signOut}
          onKeyPress={signOut}
          tabIndex={-1}
        >
          Sign Out
        </button>
      </>
    );
  }
  return (
    <div className="flex justify-between items-center text-white bg-custom-1-dblue shadow-lg px-12 py-2">
      <a href="/" className="text-4xl text-white">rummmble</a>
      <div className="flex items-center">
        {content}
      </div>
    </div>
  );
};

export default withRouter(withFirebase(Navbar));
