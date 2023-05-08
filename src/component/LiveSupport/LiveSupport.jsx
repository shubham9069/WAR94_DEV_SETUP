import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const LiveSupport = () => {
    const location = useLocation();
  return (
    <>
 <div className="event-top padding15rem">
    <span className='span-text-light'>Home </span>
    <span className='span-text-light'> / </span>
    <span className='span-text-dark'> {location?.pathname?.split('/')[1]} </span>

    </div>
    <div className="report padding15rem">
    <div>

    <div className='between-div' style={{}}>
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>All users</h5>

</div>
 <div className="matchlist-table">
<table style={{width:'100%'}} >
  <tr>
    <th><input type="checkbox"></input></th>
    <th>Request</th>
    <th>User Name</th>
    <th>phone no</th>
    <th>Account Status</th>
    <th>Date</th>
   
   
  
    
  </tr>
  {[...Array(4)]?.map((a)=>{

    return <tr>
   
    
    <td><input type="checkbox"></input></td>
    <td><Link to="/live-support-Details" style={{color:'red',textDecoration:'none'}}>Resolved</Link></td>
    <td> <p style={{color:'#7E8299',fontSize:14}}>@devil432<br/><span style={{color:'#B5B5C3',fontSize:12}}>@sohil.com</span></p></td>
    <td style={{color:'#7E8299',fontSize:14}}>906923229</td>
    <td> <span className='span-box-green' >span</span></td>
    <td style={{color:'#7E8299',fontSize:14}}>5 Nov 2022 - 12:44 PM</td>
    

    
    
  </tr>
  })}
  
 
  </table>
</div>

</div>
    </div>






    </>
  )
}

export default LiveSupport