import React, { useState } from 'react';
import axios from 'axios';

const EditProfile = ({ user, onSave }) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = async () => {
    if (password === confirmPassword) {
      try {
        const response = await axios.put('/api/users/' + user.id, {
          username,
          email,
          password,
        });
        onSave(response.data);
      } catch (error) {
        console.error("Error saving user data:", error);
      }
    } else {
      alert("Passwords do not match");
    }
  };

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
      <div className="mt-4 space-y-2">
        <label className="block">Username:</label>
        <input
          type="text"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="block">Email:</label>
        <input
          type="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="block">Enter New Password:</label>
        <input
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="block">Confirm Password:</label>
        <input
          type="password"
          className="input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="mt-4 space-y-2">
        <button className="btn btn-primary" onClick={handleSave}>Save</button>
        <button className="btn btn-danger">Delete Account</button>
      </div>
      <div className="mt-4">
        <a href="/terms" className="text-blue-500">Terms of Service</a> and <a href="/privacy" className="text-blue-500">Privacy Policy</a>
      </div>
    </div>
  );
};

export default EditProfile;
