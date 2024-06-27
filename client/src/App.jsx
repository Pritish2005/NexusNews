import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OAuth from './components/OAuth'

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-80">
        <h2 className="text-2xl font-semibold mb-4">Create an account</h2>
        <p className="text-gray-600 mb-6">Enter your email to sign up for this app</p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="email@domain.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md"
          >
            Sign up with email
          </button>
        </form>
        <div className="my-6 text-gray-600">or continue with</div>
        <OAuth/>
        <p className="mt-6 text-xs text-gray-600">
          By clicking continue, you agree to our{' '}
          <a href="#" className="text-black underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-black underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;

