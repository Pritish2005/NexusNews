import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

// import { Link,useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { signInStart,signInFailure,signInSuccess } from '../redux/user/userSlice'
// import { useSelector } from 'react-redux'
// import { Link,useNavigate } from 'react-router-dom'

function OAuth() {

  const dispatch = useDispatch();
    const navigate = useNavigate(); 
  const handleGoogleAuth = async () => {
    
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

       console.log('User:', user);
      console.log('User Display Name:', user.displayName);
      console.log('User Email:', user.email);
      console.log('User Photo URL:', user.photoURL);

      const res = await fetch('/api/auth/googleAuth', {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: user.photoURL,
          name: user.displayName,
          email: user.email,
          
        }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate('/');
      // navigate('/');
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
