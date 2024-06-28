import React from 'react'
import { Link } from 'react-router-dom';

export default function User() {
  return (
    <div className="text-center p-4">
       <h1 className="text-2xl font-bold">NEXUS NEWS</h1>
      <div className="mt-4">
         <img
          className="w-24 h-24 rounded-full mx-auto"
          src="user-placeholder.png"
          alt="User"
        />
      </div>
      <div className="mt-4">
        <p className="text-lg">Name: {user.name}</p>
        <p className="text-lg">
          Bias Score: <BiasCircle score={user.biasScore} />
        </p>
      </div>
      <div className="mt-4 space-y-2">
        <Link to="/Edit_Profile" className="btn btn-primary">
          Edit Profile
        </Link>
        <button className="btn btn-secondary">Sign Out</button>
      </div>
      <div className="mt-4">
        <a href="/terms" className="text-blue-500">Terms of Service</a> and <a href="/privacy" className="text-blue-500">Privacy Policy</a>
      </div>
    </div>
  );
};

const BiasCircle = ({ score }) => {
  const circleStyle = {
    background: `conic-gradient(#4caf50 ${score}%, #e0e0e0 ${score}% 100%)`,
  };
  return <div className="w-12 h-12 rounded-full mx-auto" style={circleStyle}></div>;
};

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