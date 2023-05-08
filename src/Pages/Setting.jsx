import React from 'react'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const Setting = () => {
    const location = useLocation()
    const [editModal,setEditModal] = useState(false)
  return (
    <>
<div className="event-top padding15rem">
    <span className='span-text-light'>Home </span>
    <span className='span-text-light'> / </span>
    <span className='span-text-dark'> {location?.pathname?.split('/')[1]} </span>

    </div>

    <div className="report padding15rem">
  
    <div>

    <div className='between-div' style={{borderBottom:'1px solid #EFF2F5'}}>
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>Sep 21, 2022</h5>
<div className='d-flex' style={{gridGap:15}}>
    <span className='span-text-light' style={{paddingBottom:'1rem', borderBottom:'2px solid #00A3FF'}}>Today</span>
    <span  className='span-text-light'>Week</span>
    <span  className='span-text-light'>Month</span>
    <span  className='span-text-light'>2022</span>
</div>
</div>
 <div className="matchlist-table">
<table style={{width:'100%'}} >
  <tr>
    <th><input type="checkbox"></input></th>
    <th>Action</th>
    <th>Meta Key</th>
    <th>Date</th>
   
   
  
    
  </tr>
  {[...Array(4)]?.map((a)=>{

    return <tr>
   <td><input type="checkbox"></input></td>
    <td><button className='themeButton' style={{background:"#F5F8FA",color:"#A1A5B7"}} onClick={()=>setEditModal(true)}>edit</button></td>
    <td style={{width:"100%",}}><p style={{color:'#7E8299',fontSize:14}}>About Us</p></td>
    <td style={{color:'#7E8299',fontSize:14}}>5 Nov 2022 - 12:44 PM</td>
    
  </tr>
  })}
  
 
  </table>
</div>

</div>
    </div>

      {/* edit Details */}
      <Modal show={editModal} onHide={()=>setEditModal(false)} style={{backdropFilter: 'blur(8px)'}} size="lg">
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:18,fontWeight:600,color:'#3F4254',letterSpacing:1}}>Static Details <span className="span-box">Last  update - 1-10-2022 12:42 PM</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="padding15rem">
        <div className="inputwrapper" >
                <p className='span-text-dark' >Is Active</p>
                <span className='span-text-light d-flex align-items-center' style={{flex: 2}}>
                <input  type="checkbox"  className='event-toggle' style={{position:'relative',top:0,left:0,marginRight:8}} ></input>Active</span>
                
                </div>
                <div className="inputwrapper">
                <p className='span-text-dark' > Name</p>
                <input className="form-input" placeholder='Enter Name' ></input>
                </div>
                <div className="inputwrapper" style={{alignItems: 'flex-start'}}>
                <p className='span-text-dark' >Description</p>
                <select className="form-input">
                    <option>pc</option>
                </select>
                </div>
                <div className="d-flex" style={{gridGap:15,justifyContent: 'flex-end'}}>
                  <button className="themeButton">save</button>
                  <button className="themeButton" style={{color:'#D9214E',backgroundColor:'#FFF5F8'}}>Delete</button>
                </div>
            </div>

        </Modal.Body>
      
      </Modal>

    </>
  )
}

export default Setting