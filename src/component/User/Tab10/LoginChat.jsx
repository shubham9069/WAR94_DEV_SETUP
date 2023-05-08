import React from 'react'

const LoginChat = () => {
  return (
    <>
<div className="tab10">
  <div>
  <div style={{display: 'flex',flexDirection: 'column',alignItems: 'flex-end'}}>
    <img src='images/msg1.png' style={{width:'15%',marginRight:"20%"}}></img>
    <img src='images/msg2.png' style={{width:'15%'}}></img>
    </div>
    <img src="images/chat.png" style={{width:'60%',objectFit:'contain'}}></img>
  </div>


{/* // right div  */}
  <div>
  <div className='center-div tab1-right-div' style={{background:'#FFF8DD',border:'1px dashed #E9B500',maxWidth:800,marginBottom:'2rem'}}>

<span style={{flex:1,marginBottom:2,fontWeight:600,fontSize:13,color:"#F6C000"}}>Need Special Permission
<p style={{color:'#7E8299',fontSize:11,fontWeight:500,marginBottom:0,marginTop:3}}> to acess this personal chat you need to contact higher authority or reach your manager.</p>
</span>
</div>

<p style={{fontSize:24,fontWeight:900,lineHeight:'32px',fontFamily:'sans-serif'}}>Persnal chat access</p>
<p className='span-text-light'>sonuKumar@gmail.com</p>
<form className='chat-form'>
  <input type="text" placeholder="enter Email"/>
  <input type="Password" placeholder="enter password"/>
  <button type="submit" className="themeButton">View Now</button>
</form>
  </div>
</div>

    </>
  )
}

export default LoginChat