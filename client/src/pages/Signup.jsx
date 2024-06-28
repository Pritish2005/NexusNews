import React, { useState } from 'react'
import OAuth from '../components/OAuth'
import { Link,useNavigate } from 'react-router-dom'

export default function Signup() {
    const [formData, setFormData] = useState({

    })
 const navigate = useNavigate();
    const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
    const changeHandler = (e)=>{
        setFormData(
            {
                ...formData,
                [e.target.id] : e.target.value,
            }
        )

    }
    const handleSubmit = async (e)=>{
       e.preventDefault();
       try {
        
           setLoading(true);
           const res = await fetch('/api/auth/signup',
            {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(formData),
            }
            
           );
            const data = await res.json();
            if (data.success === false) {
            setLoading(false);
            setError(data.message);
            return;
        }
        setLoading(false);
        setError(null);
        navigate('/');
       } catch (error) {
        setLoading(false);
        setError(error.message);
       }
}

    
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Create an account</h2>
        <p className="text-gray-600 mb-6">Enter your email to sign up for this app</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            id='username'
            placeholder="username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            onChange={changeHandler}
          />
          <input
            type="email"
            id='email'
            placeholder="email@domain.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            onChange={changeHandler}
          />
          <input
            type="password"
            id='password'
            placeholder="Enter Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            onChange={changeHandler}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-md hover:opacity-75 disabled:opacity-80"
          >
            {loading? 'Creating User...': 'Sign up with email'}
          </button>
        </form>
         {error && <p className='text-red-500 mt-5'>{error}</p>}
        <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
       </div>
        <div className="my-6 text-gray-600">or continue with</div>
        <OAuth/>
        <p className="mt-6 text-xs text-gray-600">
          By clicking continue, you agree to our{' '}
          <Link to={'/terms-of-service'}>
          <span className='text-black underline'>Terms of Service</span>
        </Link>
           
          and{' '}
          <Link to={'/privacy-policy'}>
          <span className='text-black underline'>Privacy Policy</span>
        </Link>
        </p>
      </div>
    </div>
    
  )
}
