import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from '../axios'
import Toast from '../Toast'
import { AuthContext } from '../AuthProvider'
import {  toast } from 'react-toastify';

const Forget = () => {
  const navigate = useNavigate()
  const [email,setEmail] = useState()

  const ResetForm = async(e)=>{
    e.preventDefault()

    if(!email) return Toast("plz fill email")


      try{
        const response = await toast.promise(axios({
          method: "post",
          url: `/reset-password`,
          data: {
            email,
        
          },
        }),
        {
          pending: 'waiting',
          success: {render({data}){
             let newdata = data?.data
            navigate('/login')
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
<img src='images/Forget.png' style={{width: '90%',height: '90%',maxWidth:500,maxHeight:500}}></img>
</div>

<div>
<p style={{marginBottom:'2rem',marginLeft:'2rem'}}><i class="bi bi-arrow-left-circle-fill"></i> </p>

<form className="center-div mx-auto" style={{flexDirection:'column',width:'80%',maxWidth:500}} onSubmit={ResetForm}>
<h5 style={{fontWeight:900}}>Forgot Password</h5>
<p className="span-text-light" style={{marginBottom:36}}>War94 Gaming Pvt Ltd</p>
<input type="email" className="form-input" placeholder="Email" style={{border: '1px solid #E4E6EF',width: '100%',marginBottom:18}} onChange={(e)=>setEmail(e.target.value)}></input>

<button type="submit" className='themeButton' style={{width:'100%' ,marginBottom:'2rem'}}>Send Otp</button>
<p className='span-text-light'>Already have an Account? <Link to='/login' style={{color:'#3E97FF',textDecoration:'none'}}>Sign in</Link></p>
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

export default Forget