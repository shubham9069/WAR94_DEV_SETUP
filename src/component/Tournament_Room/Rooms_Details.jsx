import React, { useState } from 'react'
import Room_Tab1 from './Room_Tab1'
import { useLocation } from 'react-router-dom'
import Room_Tab2 from './Room_Tab2'
import Room_Tab3 from './Room_Tab3'
import Room_Tab4 from './Room_Tab4'


const Rooms_Details = () => {
    const [tab,settab] = useState(1)
    const location = useLocation()
  return (
    <>
<div className="event-top padding15rem">
    <span className='span-text-light'>Home </span>
    <span className='span-text-light'> / </span>
    <span className='span-text-dark'> {location?.pathname?.split('/')[1]} </span>

    </div>

    <div className="tournament padding15rem ">
    <div className="user-search">
         <span className="span-text-light" style={{color:tab==1 ? "#00A3FF" : '#A1A5B7',cursor:'pointer'}} onClick={()=>settab(1)}> General</span>   
         <span className="span-text-light"  style={{color:tab==2 ? "#00A3FF" : '#A1A5B7',cursor:'pointer'}} onClick={()=>settab(2)}> Room Member</span>   
         <span className="span-text-light"  style={{color:tab==3 ? "#00A3FF" : '#A1A5B7',cursor:'pointer'}} onClick={()=>settab(3)}> Room Image</span>   
         <span className="span-text-light"  style={{color:tab==4 ? "#00A3FF" : '#A1A5B7',cursor:'pointer'}} onClick={()=>settab(4)}> Report User</span>   
        </div>

        <div className="padding15rem" style={{backgroundColor:'white',borderRadius:12,margin:'1.5rem 0'}}>
        {tab==1 && (<Room_Tab1 /> )}
        {tab==2 && (<Room_Tab2 /> )}
        {tab==3 && (<Room_Tab3 /> )}
        {tab==4 && (<Room_Tab4 /> )}
        

        </div>

    </div>



    </>
  )
}

export default Rooms_Details