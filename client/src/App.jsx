import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OAuth from './components/OAuth'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import User from './pages/User'
import Terms from './pages/Terms'
import Policy from './pages/Policy'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-up' element={<Signup/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/terms-of-service' element={<Terms/>}/>
      <Route path='/privacy-policy' element={<Policy/>}/>

      
    </Routes>
    
    </BrowserRouter>
    
    
  );
}

export default App;

