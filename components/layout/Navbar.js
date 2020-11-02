import React from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../Auth';
import firebase from '../../firebase';

const Navbar = () => {
  const currentUser = React.useContext(AuthContext);
  const router = useRouter();
  const signIn = () => {
    router.push('/login');
  };
  const signOut = () => {
    firebase.auth().signOut();
  };

  let content;
  if (!currentUser) {
    content = (
      <div
        className="px-6 bg-red-500"
        onClick={signIn}
        onKeyPress={signIn}
        role="button"
        tabIndex={0}
      >
        Sign In
      </div>
    );
  } else {
    content = (
      <div
        className="px-6 bg-red-500"
        onClick={signOut}
        onKeyPress={signOut}
        role="button"
        tabIndex={0}
      >
        Sign Out
      </div>
    );
  }
  return (
    <div className="flex justify-between items-center text-white bg-custom-1-dblue shadow-lg px-12 py-1">
      <h1 className="text-4xl text-white">rummmble</h1>
      <div className="flex items-center">
        <button
          type="button"
          className="bg-custom-5-cyan text-black px-4 py-1 mr-6 font-bold rounded shadow custom-shadow"
        >
          Upload
        </button>
        {content}
      </div>
    </div>
  );
};

export default Navbar;
