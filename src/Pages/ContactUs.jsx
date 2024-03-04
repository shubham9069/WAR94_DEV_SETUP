import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import {AuthContext} from '../AuthProvider'
import Toast from '../Toast'
import axios from '../axios'

const ContactUs = () => {
    const [editModal,setEditModal] = useState(false)
    const [modalData,setModalData] = useState({})
    const {userToken} = useContext(AuthContext)
    const location = useLocation()
    const [data,setData] = useState([])
  
    const getData= async()=>{
  
        
      try{
        
        const response = await axios({
          method: "get",
          url: `/get_contacts`,
          headers:{
          'Authorization': `Bearer ${userToken} `,
          
          },
        })
       
          
        if(response.status===200){
          const newdata = response.data;
          setData(newdata?.contacts)
            
          
        }
      } catch (err) {
        const error = err.response.data
        Toast(error.message);
        
      }  
    }
    useEffect(()=>{
      getData()
    },[])

    
    const Modaldata=(data)=>{
  
      setModalData(data)
      setEditModal(true)

    }

  
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
    <th>Action</th>
    <th>Email</th>
    <th>User Name</th>
    <th>Subject</th>
    <th>Date</th>
   
   
  
    
  </tr>
  {data?.map((a)=>{

    return <tr>
   
    
    <td>
    <div className="dropdown">
    <button className='themeButton dropdown-toggle' style={{background:"#F5F8FA",color:"#A1A5B7",}} data-bs-toggle="dropdown" aria-expanded="false">Edit</button>

    <ul class="dropdown-menu post-dropdown">

<li >
<p> Resovle</p> 

<i class="bi bi-check-square-fill" style={{color:'#A1A5B7',fontSize:12,width:15}}></i>
            
    </li>
<li onClick={()=>Modaldata(a)}>
<p>View</p> 
<svg width="19" height="19" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.825 6.73346C16.658 7.78019 16.658 9.21989 15.825 10.2666C14.5017 11.9296 12.0598 14.1667 8.49929 14.1667C4.93883 14.1667 2.49692 11.9296 1.17355 10.2666C0.340586 9.21989 0.340586 7.78019 1.17355 6.73346C2.49692 5.07047 4.93883 2.83337 8.49929 2.83337C12.0598 2.83337 14.5017 5.07047 15.825 6.73346Z" fill="#E3E4E9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.91602 8.49996C9.91602 9.28236 9.28175 9.91663 8.49935 9.91663C7.71695 9.91663 7.08268 9.28236 7.08268 8.49996C7.08268 8.47985 7.0831 8.45984 7.08393 8.43994C7.19435 8.47881 7.31313 8.49996 7.43685 8.49996C8.02365 8.49996 8.49935 8.02426 8.49935 7.43746C8.49935 7.31374 8.4782 7.19496 8.43933 7.08454C8.45923 7.08371 8.47924 7.08329 8.49935 7.08329C9.28175 7.08329 9.91602 7.71756 9.91602 8.49996ZM11.3327 8.49996C11.3327 10.0648 10.0642 11.3333 8.49935 11.3333C6.93454 11.3333 5.66602 10.0648 5.66602 8.49996C5.66602 6.93515 6.93454 5.66663 8.49935 5.66663C10.0642 5.66663 11.3327 6.93515 11.3327 8.49996Z" fill="#A1A5B7"/>
</svg>
            
    </li>

</ul>
    </div></td>
    <td><p style={{color:'#7E8299',fontSize:14}}>{a?.email}</p></td>
    <td> <p style={{color:'#7E8299',fontSize:14}}>{a?.user?.name}<br/><span style={{color:'#B5B5C3',fontSize:12}}>{a?.user?.username}</span></p></td>
    <td> <span className='span-box' style={{color:'#7E8299',background:'#F4F4F4'}}>{a?.subject}</span></td>
    <td style={{color:'#7E8299',fontSize:14}}>{new Date(a?.created_at).toDateString()} &emsp; {new Date(a?.created_at).toLocaleTimeString()}</td>
   
  
    

    
    
  </tr>
  })}
  
 
  </table>
</div>

</div>
    </div>

     {/* edit Details */}
     <Modal show={editModal} onHide={()=>setEditModal(false)} style={{backdropFilter: 'blur(8px)'}} size="lg">
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:18,fontWeight:600,color:'#3F4254',letterSpacing:1}}>Edit Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="padding15rem">
  <div style={{borderRadius:12,padding:18}}>
  <h6 style={{fontWeight:900,color:'#3F4254',marginBottom:18}}>User Details</h6>

  <div className="inputwrapper">
 <p className='span-text-dark' > userName </p>
  <p style={{color:'#2884EF',fontWeight:400}}>{modalData?.user?.username}</p>
       </div>
  <div className="inputwrapper">
 <p className='span-text-dark' > Email</p>
  <input type="text" className="form-input" placeholder='Event Name' value={modalData?.email} ></input>
       </div>
  <div className="inputwrapper">
 <p className='span-text-dark' > Subject</p>
  <input type="text" className="form-input" placeholder='Event Name' value={modalData?.subject} ></input>
       </div>
  <div className="inputwrapper">
 <p className='span-text-dark' style={{alignSelf:'flex-start'}}> Message</p>
  <textarea type="text" className="form-input" placeholder='Event Name' value={modalData?.message} rows={6} ></textarea>
       </div>
       <div className="inputwrapper">
 <p className='span-text-dark' > Date</p>
  <p style={{color:'black',fontWeight:400}}>{new Date(modalData?.created_at).toDateString()} &emsp; {new Date(modalData?.created_at).toLocaleTimeString()}</p>
       </div>

 
 
  

 
 
  </div>




        </div>
       


        </Modal.Body>
      
      </Modal>

    </>
  )
}

export default ContactUs