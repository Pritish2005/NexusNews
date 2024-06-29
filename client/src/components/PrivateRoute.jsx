import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute() {
    const currentUser=useSelector((state)=>state.user)
    console.log(currentUser.user.currentUser)
  return (currentUser.user.currentUser!==null)?<Outlet/>:<Navigate to={'/sign-in'}/>
}

export default PrivateRoute;
