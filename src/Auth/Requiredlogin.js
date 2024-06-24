import React,{useContext, useEffect} from 'react';
import {useLocation,Navigate,Outlet} from 'react-router-dom';
import {AuthContext} from '../AuthProvider'


const  Requiredlogin=()=> {
    
    const {userToken,userData} = useContext(AuthContext);
    const location = useLocation();
  
useEffect(()=>{
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
},[location])
  
  return (
    userToken && userData
    ? <Outlet/>
    :<Navigate to="/login" state={{from :location}} replace={true} />
    
  )
}

export default Requiredlogin

