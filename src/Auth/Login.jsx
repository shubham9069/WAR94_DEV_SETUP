import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../axios'
import Toast from '../Toast'
import { AuthContext } from '../AuthProvider'
import {  toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate()
  const {setUserData,setUserToken} = useContext(AuthContext)
  const [email,setEmail] = useState("")
  const [Password,setPassword] = useState("")


  const LoginForm = async(e)=>{
    e.preventDefault()

    if(!email) return Toast("plz fill email")
    if(!Password) return Toast("plz fill password")

      try{
        const response = await toast.promise(axios({
          method: "post",
          url: `/login`,
          data: {
            email,
            password:Password
          },
        }),
        {
          pending: 'waiting',
          success: {render({data}){
             let newdata = data?.data
            
            setUserToken(newdata?.accessToken);
            setUserData(newdata?.admin)
            window.localStorage.setItem('userToken', JSON.stringify(newdata?.accessToken));
            window.localStorage.setItem('userData', JSON.stringify(newdata?.admin));
            navigate('/')
            return newdata?.message
          }},
          error: {render({data}){
            
            return data?.response?.data?.message
          }},
        });
  

      } catch (err) {
        console.log(err)
        
      }

  }

  return (
    <>

<div  style={{height: '100%',position: 'relative',minHeight:'100dvh'}}>
<img src="images/authLogo.png" style={{margin:'0 auto',display:'block',padding:'2rem'}}></img>

<div className="login-form padding15rem center-div max-width-1500px">

<div>
<img src='images/login-illustrate.png' style={{width: '90%',height: '90%',maxWidth:500,maxHeight:500}}></img>
</div>

<div>
<h5 style={{marginBottom:'2rem',marginLeft:'2rem'}}> <div style={{height:3,width: 65,background:'#2884EF',marginBottom:5}}></div>Login As Director</h5>

<form className="center-div mx-auto" style={{flexDirection:'column',width:'80%',maxWidth:500}} onSubmit={LoginForm}>
<h5 style={{fontWeight:900}}>Sign In</h5>
<p className="span-text-light" style={{marginBottom:36}}>War94 Gaming Pvt Ltd</p>
<input  type="email" className="form-input" placeholder="Email" style={{border: '1px solid #E4E6EF',width: '100%',marginBottom:18}} onChange={(e)=>setEmail(e.target.value)} ></input>
<input type="password" className="form-input" placeholder="Password" style={{border: '1px solid #E4E6EF',width: '100%',marginBottom:36}} onChange={(e)=>setPassword(e.target.value)} ></input>
<button type="submit" className='themeButton' style={{width:'100%' ,marginBottom:'2rem'}}>Login Now</button>
<p className='span-text-light'>Forget Password ? <Link to='/forget' style={{color:'#3E97FF',textDecoration:'none'}}>Forget Now</Link></p>
</form>
</div>
</div>

<div className="Auth-bottom">
<div></div>
<div></div>

</div>
</div>
</>

  )
}

export default Login