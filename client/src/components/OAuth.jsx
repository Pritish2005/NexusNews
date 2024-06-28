import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../../firebase';

function OAuth() {
  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const res = await fetch('/api/auth/googleAuth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: user.displayName,
          email: user.email,
          avatar: user.photoURL,
        }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error during Google authentication:', error);
    }
  };

  return (
    <>
      <button 
      type ='button'
      onClick={handleGoogleAuth} className='bg-red-600 text-white p-3 rounded-md hover:opacity-75'>
        Sign in with Google
      </button>
    </>
  );
}

export default OAuth;
