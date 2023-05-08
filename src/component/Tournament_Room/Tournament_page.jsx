import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Tournament_page = () => {
    const location = useLocation()
  return (
   <>
 <div className="event-top padding15rem">
    <span className='span-text-light'>Home </span>
    <span className='span-text-light'> / </span>
    <span className='span-text-dark'> {location?.pathname?.split('/')[1]} </span>

    </div>

    <div className="event-middle padding15rem">
    <div className="between-div" style={{ marginBottom:'1.5rem'}}>
<h4 className='section-heading' >All tournamnet games </h4>

</div>
    <div className='event-container' >

        {[...Array(4)]?.map((a)=>{

            return <Link to="/Tournament-details" className='event-box padding15rem' style={{textDecoration:'none'}}>
         <div className='event-img-div'>   
        <img src="images/eventgame.jpg"></img>
        
        </div>
        <div>
        <span className='span-text-dark' style={{fontSize:16,flex: 1}}> BGMI</span>
        
    
        </div>
        </Link>
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

export default Tournament_page