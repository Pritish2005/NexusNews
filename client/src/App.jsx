import './App.css'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import OAuth from './components/OAuth'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import User from './pages/User'
import Terms from './pages/Terms'
import Policy from './pages/Policy'
import Header from './components/Header.jsx'


function App() {
  return (
    <BrowserRouter>
    <Header/>
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

