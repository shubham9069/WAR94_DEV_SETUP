import React from 'react'

const Otp = () => {

    function focusInput(e){
      
          
        // keycode 8 for backspace 
        if(e.keyCode == 8 && e.target.value.length ==0 &&  e.target.previousElementSibling !==null){
        e.target.previousElementSibling.focus()
       
  
        }if( e.target.value.length >=e.target.maxLength && e.target.nextElementSibling !==null){
          e.target.nextElementSibling.focus()
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

<form className="center-div mx-auto" style={{flexDirection:'column',width:'80%',maxWidth:500}}>
<h5 style={{fontWeight:900}}>Password Forgot</h5>
<p className="span-text-light" style={{marginBottom:36,textAlign:'center'}}>Enter the verification code we sent to <br/> rahul****20@gmail.com</p>

<span style={{color:'#7E8299',width: '100%',marginBottom:10,fontSize:12,fontWeight:600}}>Type your 6 digit security code</span>
<div className='d-flex' style={{gridGap:15}}>
<input className="form-input" style={{border: '1px solid #E4E6EF',width: '50px',marginBottom:18}} 
onKeyUp={e => focusInput(e)}
tabIndex={1}
maxLength={1}
 ></input>
<input className="form-input" style={{border: '1px solid #E4E6EF',width: '50px',marginBottom:18}}
onKeyUp={e => focusInput(e)} 
tabIndex={2}
maxLength={1}
></input>
<input className="form-input" style={{border: '1px solid #E4E6EF',width: '50px',marginBottom:18}}
onKeyUp={e => focusInput(e)}
tabIndex={3}
maxLength={1}
 ></input>
<input className="form-input" style={{border: '1px solid #E4E6EF',width: '50px',marginBottom:18}}
onKeyUp={e => focusInput(e)}
tabIndex={4}
maxLength={1}
 ></input>
<input className="form-input" style={{border: '1px solid #E4E6EF',width: '50px',marginBottom:18}}
onKeyUp={e => focusInput(e)}
tabIndex={5}
maxLength={1}
 ></input>
<input className="form-input" style={{border: '1px solid #E4E6EF',width: '50px',marginBottom:18}}
onKeyUp={e => focusInput(e)}
tabIndex={6}
maxLength={1}
 ></input>
</div>
<button className='themeButton' style={{width:'100%' ,marginBottom:'2rem'}}
>Send Otp</button>

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

export default Otp