import React from 'react'

const Persnal_chat = () => {
  return (
    <>
<div className="Persnal-chat">
{/* left  */}
<div>
<div style={{padding:'1.5rem'}}>
        <input  className="form-input" placeholder="search" style={{width:'100%',}}></input>
        </div>
           <div  className="chatlist-container" style={{overflow:'scroll',height:500,padding:'1.5rem'}}>
            {[...Array(7)]?.map((element)=>{

                return <div className='chat-list between-div'>
       <img src="images/users.png"></img> 
       <div style={{flex:1}}>
        <p style={{fontWeight:'bold',lineHeight:'25px',marginBottom:0,fontSize:13}}>Sonu Sood <span style={{fontSize:10,color:'#B5B5C3',fontWeight:500,float:'right'}}>20 hrs</span></p>
        <p style={{fontSize:12,color:'#B5B5C3',marginBottom:0}}>Sonukumar@gmail.com  <div  className='center-div' style={{
            color:'#B5B5C3',float:'right',fontSize:9,color:'#50CD89',fontWeight:700,background:"#E8FFF3",borderRadius:50,width:22,height:22}}>0</div>
            </p>
       </div>

        </div>
            })
            }
            </div>
            
        
    </div>

    {/* right  */}
    
    <div >
            <div style={{padding:'1.5rem'}}>
     <p style={{marginBottom:0}}>Shubham Kauhsik</p>   
     <p style={{fontSize:12,color:'#B5B5C3',marginBottom:0}}>offline - last seen today 9:18 pm</p>  
     </div>      
            <div style={{overflow:'scroll',height:600,padding:'1.5rem'}}>
     {[...Array(7)]?.map((element,i)=>{

return<div className='rigth-chat-box ' style={{margin:i%2==0 ? '1rem 0 1rem auto': '1rem 0 1rem 0' ,width:'fit-content',maxWidth:400}}>

<div className='d-flex align-items-center' style={{gridGap:8 ,justifyContent:i%2==0? "flex-end":"flex-start"}}>
    <img src={i % 2 == 0 ? "images/logo.png" : "images/users.png"} alt=""style={{width:40,height:40,borderRadius:50}}></img> 
    <span style={{ fontWeight: 'bold', lineHeight: '25px', marginBottom: 0, fontSize: 12 }}>{i % 2 == 0 ? "Admin" : "Shubham"} </span>
        <span style={{fontSize:10,color:'#B5B5C3',fontWeight:500}}>20 hrs</span>
      
</div>
<div  style={{background:i%2==0? "#EEF6FF": "#F8F5FF",borderRadius:6,padding:'1rem',fontSize:11,marginTop:10,width:'fit-content'}}>
Bhai heli bhai kesa h sab thik h kya haal h 
</div>

</div>
     })}
     </div>

    </div>
</div>


    </>
  )
}

export default Persnal_chat