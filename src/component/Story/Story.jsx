import React from 'react'
import { useLocation, useNavigate,  } from 'react-router-dom'

const Story = () => {
    
  const location = useLocation()
  const navigate = useNavigate()

 
  return (
   <>
 <div className="event-top padding15rem">
    <span className='span-text-light'>Home </span>
    <span className='span-text-light'> / </span>
    <span className='span-text-dark'> {location?.pathname?.split('/')[1]}</span>

    </div>
    <div className="event-middle padding15rem">
    <div className="between-div" style={{  marginBottom:'1.5rem'}}>
<h4 className='section-heading' >Story</h4>
<button className='themeButton' >

<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M5.17961 1.8761C3.44048 2.10579 2.10579 3.44048 1.8761 5.17961C1.7182 6.37522 1.58398 7.87083 1.58398 9.50065C1.58398 11.1305 1.7182 12.6261 1.8761 13.8217C2.10579 15.5608 3.44048 16.8955 5.17961 17.1252C6.37522 17.2831 7.87083 17.4173 9.50065 17.4173C11.1305 17.4173 12.6261 17.2831 13.8217 17.1252C15.5608 16.8955 16.8955 15.5608 17.1252 13.8217C17.2831 12.6261 17.4173 11.1305 17.4173 9.50065C17.4173 7.87083 17.2831 6.37522 17.1252 5.17961C16.8955 3.44048 15.5608 2.10579 13.8217 1.8761C12.6261 1.7182 11.1305 1.58398 9.50065 1.58398C7.87083 1.58398 6.37522 1.7182 5.17961 1.8761Z" fill="#E8FFF3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.49935 13.4577C9.93657 13.4577 10.291 13.1032 10.291 12.666V10.291H12.666C13.1032 10.291 13.4577 9.93657 13.4577 9.49935C13.4577 9.06212 13.1032 8.70768 12.666 8.70768H10.291V6.33268C10.291 5.89546 9.93657 5.54102 9.49935 5.54102C9.06212 5.54102 8.70768 5.89546 8.70768 6.33268V8.70768H6.33268C5.89546 8.70768 5.54102 9.06212 5.54102 9.49935C5.54102 9.93657 5.89546 10.291 6.33268 10.291H8.70768V12.666C8.70768 13.1032 9.06212 13.4577 9.49935 13.4577Z" fill="#E8FFF3"/>
</svg>

New Story</button>
</div>
    <div className='event-container' >

        {[...Array(4)]?.map((a)=>{

            return <div className='event-box padding15rem'>
         <div className='event-img-div'>   
        <img src="images/eventgame.jpg"></img>
        
        <input  type="checkbox" className='event-toggle'></input>
        <div className='center-div' onClick={()=>navigate('/Edit-Story')} style={{borderRadius:50,width:35,height:35,background:'white',position:'absolute',top:25,right:10}}>
            
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M21.4004 8.35303L19.2415 10.511L13.4855 4.755L15.6435 2.59595C16.0253 2.21423 16.5431 1.99988 17.083 1.99988C17.6229 1.99988 18.1406 2.21423 18.5225 2.59595L21.4004 5.474C21.7822 5.85581 21.9966 6.37355 21.9966 6.91345C21.9966 7.45335 21.7822 7.97122 21.4004 8.35303ZM3.68745 21.932L9.88745 19.865L4.13145 14.109L2.06445 20.309C1.98861 20.5354 1.97749 20.7787 2.03235 21.0111C2.0872 21.2436 2.20586 21.4561 2.37495 21.6248C2.54404 21.7934 2.75686 21.9115 2.98945 21.9658C3.22204 22.0201 3.46516 22.0084 3.69145 21.932H3.68745Z" fill="black"/>
<path d="M5.57341 21.3L3.6914 21.928C3.46531 22.0032 3.22274 22.0141 2.99084 21.9594C2.75894 21.9046 2.54685 21.7864 2.37831 21.6179C2.20977 21.4495 2.09142 21.2375 2.03651 21.0056C1.9816 20.7737 1.99229 20.5312 2.06739 20.3051L2.6954 18.422L5.57341 21.3ZM4.1344 14.105L9.89041 19.861L19.2444 10.507L13.4884 4.75098L4.1344 14.105Z" fill="black"/>
</svg>

        </div>
        </div>
        <div>
        <span className='span-text-dark' style={{fontSize:16,flex: 1}}> Shubham <span className='span-box-green' style={{}}>Active</span></span>
        
            <div className='center-div' style={{backgroundColor:'#A1A5B7',width:45,height:25,borderRadius: 28}}>
            <i class="bi bi-chevron-down" style={{color:'white'}}></i>
            </div>
            <div className='center-div' style={{backgroundColor:'#A1A5B7',width:45,height:25,borderRadius: 28}}>
            <i class="bi bi-chevron-up" style={{color:'white'}}></i>
            </div>
           
        

        </div>
        <div  className="tournament-type" >

                    <div>
                <h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>1300</h5>
                <p className="span-text-light" style={{fontSize:13,marginBottom:0}}>Impression</p>
            </div>
            <div>
                <h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>52</h5>
                <p className="span-text-light" style={{fontSize:13,marginBottom:0}}>Clicked</p>
            </div>
            
</div>
        </div>
        })}
        
    </div>
    <div className='pagination between-div'>
        <span className='span-text-dark' style={{color:'#5E6278'}}>Showing 1 to 10 of 50 entries</span>
        <div>

        <div className='pagination-icon'>
        <i class="bi bi-chevron-left"></i>
        </div>
        {[...Array(4)]?.map((a,index) =>{

            return  <div className='pagination-icon' style={{backgroundColor:'transparent'}}>
        <span style={{color:'#7E8299',fontSize:12}}>{index+1}</span>
        </div>
        })}
       

        <div className='pagination-icon'>
        <i class="bi bi-chevron-right"></i>
        </div>

        </div>
    </div>
    </div>
   



   </>
  )
}

export default Story