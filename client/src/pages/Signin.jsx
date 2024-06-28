// import React from 'react';
// import OAuth from '../components/OAuth';


// function Signin() {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md text-center w-80">
//         <h2 className="text-2xl font-semibold mb-4">Sign into your account</h2>
//         <p className="text-gray-600 mb-6">Enter your email to sign up for this app</p>
//         <form className="space-y-4">
//           <input
//             type="text"
//             placeholder="username"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//           />
//           {/* <input
//             type="email"
//             placeholder="email@domain.com"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//           /> */}
//           <input
//             type="password"
//             placeholder="Enter Password"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//           />
//           <button
//             type="submit"
//             className="w-full bg-black text-white py-2 rounded-md"
//           >
//             Continue
//           </button>
//         </form>
//         <div className="my-6 text-gray-600">OR </div>
//         <OAuth/>
//         <p className="mt-6 text-xs text-gray-600">
//           By clicking continue, you agree to our{' '}
//           <a href="#" className="text-black underline">
//             Terms of Service
//           </a>{' '}
//           and{' '}
//           <a href="#" className="text-black underline">
// //             Privacy Policy
// //           </a>
// //         </p>
// //       </div>
// //     </div>
    
// //   );
// // }

// // export default Signin;
// import React, { useState } from 'react'
// import OAuth from '../components/OAuth'
// import { Link,useNavigate } from 'react-router-dom'

// export default function Signin() {
//     const [formData, setFormData] = useState({

//     })
//  const navigate = useNavigate();
//     const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//     const changeHandler = (e)=>{
//         setFormData(
//             {
//                 ...formData,
//                 [e.target.id] : e.target.value,
//             }
//         )

//     }
//     const handleSubmit = async (e)=>{
//        e.preventDefault();
//        try {
        
//            setLoading(true);
//            const res = await fetch('/api/auth/signin',
//             {
//                 method: 'POST',
//                 headers:{
//                     'Content-Type':'application/json'
//                 },
//                 body: JSON.stringify(formData),
//             }
            
//            );
//             const data = await res.json();
//             if (data.success === false) {
//             setLoading(false);
//             setError(data.message);
//             return;
//         }
//         setLoading(false);
//         setError(null);
//         navigate('/');
//        } catch (error) {
//         setLoading(false);
//         setError(error.message);
//        }
// }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
//       <div className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-md">
//         <h2 className="text-2xl font-semibold mb-4">Sign into your account</h2>
//         <p className="text-gray-600 mb-6">Enter your email to sign up for this app</p>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* <input
//             type="text"
//             placeholder="username"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//           /> */}
//           <input
//             type="email"
//             onChange={changeHandler}
//             id='email'
//             placeholder="email@domain.com"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//           />
//           <input
//             type="password"
//             onChange={changeHandler}
//             id='password'
//             placeholder="Enter Password"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-black text-white py-2 rounded-md hover:opacity-75 disabled:opacity-80"
//           >
//               {loading? 'Logging In...': 'Continue'}
//           </button>
//         </form>
//         {error && <p className='text-red-500 mt-5'>{error}</p>}
//       <div className='flex gap-2 mt-5'>
//         <p> Don't have an account?</p>
//         <Link to={'/sign-up'}>
//           <span className='text-blue-700'>Create Account</span>
//         </Link>
//       </div>
//         <div className="my-6 text-gray-600">OR </div>
//         <OAuth />
//         <p className="mt-6 text-xs text-gray-600">
//           By clicking continue, you agree to our{' '}
//           <Link to={'/terms-of-service'}>
//           <span className='text-black underline'>Terms of Service</span>
//         </Link>
           
//           and{' '}
//           <Link to={'/privacy-policy'}>
//           <span className='text-black underline'>Privacy Policy</span>
//         </Link>
//         </p>
//       </div>
//     </div>
//   );
// }




// import React from 'react';
// import { Link } from 'react-router-dom';

// const Profile = () => {
//   return (
//     <div className="text-center p-4">
//       <h1 className="text-2xl font-bold">NEXUS NEWS</h1>
//       <div className="mt-4">
//         <img
//           className="w-24 h-24 rounded-full mx-auto"
//           src="user-placeholder.png"
//           alt="User"
//         />
//       </div>
//       <div className="mt-4">
//         <p className="text-lg">Name: {user.name}</p>
//         <p className="text-lg">
//           Bias Score: <BiasCircle score={user.biasScore} />
//         </p>
//       </div>
//       <div className="mt-4 space-y-2">
//         <Link to="/Edit_Profile" className="btn btn-primary">
//           Edit Profile
//         </Link>
//         <button className="btn btn-secondary">Sign Out</button>
//       </div>
//       <div className="mt-4">
//         <a href="/terms" className="text-blue-500">Terms of Service</a> and <a href="/privacy" className="text-blue-500">Privacy Policy</a>
//       </div>
//     </div>
//   );
// };

// const BiasCircle = ({ score }) => {
//   const circleStyle = {
//     background: `conic-gradient(#4caf50 ${score}%, #e0e0e0 ${score}% 100%)`,
//   };
//   return <div className="w-12 h-12 rounded-full mx-auto" style={circleStyle}></div>;
// };

// export default Profile;

// import React from 'react'

// export default function Signin() {
//   return (
//     <div>Signin</div>
//   )
// }


import React, { useState } from 'react'
import OAuth from '../components/OAuth'
import { Link,useNavigate } from 'react-router-dom'

export default function Signin() {
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
           const res = await fetch('/api/auth/signin',
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
console.log(formData);

    
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Create an account</h2>
        <p className="text-gray-600 mb-6">Enter your email to sign up for this app</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          
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
