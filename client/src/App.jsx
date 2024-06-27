import './App.css'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import OAuth from './components/OAuth'
import Home from './pages/Home'
import Header from './components/Header.jsx'
import Profile from './pages/Profile'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
