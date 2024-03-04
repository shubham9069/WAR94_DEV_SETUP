import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { Link, useLocation, useNavigate, } from 'react-router-dom'



const ProVerification = () => {
    const location = useLocation()
    const [updateModal,setupdateModal] = useState(false)
    const navigate = useNavigate()
    
  return (
   <>
     <div className="event-top padding15rem">
    <span className='span-text-light'>Home </span>
    <span className='span-text-light'> / </span>
    <span className='span-text-dark'> {location?.pathname?.split('/')[1]} </span>

    </div>
    <div className="report padding15rem">

    <div className="user-search">
            <select >
                <option selected hidden >Games</option>
                <option >Games</option>:
                <option >Games</option>
            </select>
            <select >
                <option selected hidden >Tournament Type</option>
                <option >Games</option>
                <option >Games</option>
            </select>
            <input type='text' placeholder='search'></input>
            <button className='themeButton'>Search</button>
         
        </div>

        <div style={{marginTop:'1.5rem'}}>

<div className='between-div' style={{borderBottom:'1px solid #EFF2F5', paddingBottom:'1.5rem'}}>
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>Payment</h5>


<button className='themeButton' ><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M5.17961 1.8761C3.44048 2.10579 2.10579 3.44048 1.8761 5.17961C1.7182 6.37522 1.58398 7.87083 1.58398 9.50065C1.58398 11.1305 1.7182 12.6261 1.8761 13.8217C2.10579 15.5608 3.44048 16.8955 5.17961 17.1252C6.37522 17.2831 7.87083 17.4173 9.50065 17.4173C11.1305 17.4173 12.6261 17.2831 13.8217 17.1252C15.5608 16.8955 16.8955 15.5608 17.1252 13.8217C17.2831 12.6261 17.4173 11.1305 17.4173 9.50065C17.4173 7.87083 17.2831 6.37522 17.1252 5.17961C16.8955 3.44048 15.5608 2.10579 13.8217 1.8761C12.6261 1.7182 11.1305 1.58398 9.50065 1.58398C7.87083 1.58398 6.37522 1.7182 5.17961 1.8761Z" fill="#E8FFF3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.49935 13.4577C9.93657 13.4577 10.291 13.1032 10.291 12.666V10.291H12.666C13.1032 10.291 13.4577 9.93657 13.4577 9.49935C13.4577 9.06212 13.1032 8.70768 12.666 8.70768H10.291V6.33268C10.291 5.89546 9.93657 5.54102 9.49935 5.54102C9.06212 5.54102 8.70768 5.89546 8.70768 6.33268V8.70768H6.33268C5.89546 8.70768 5.54102 9.06212 5.54102 9.49935C5.54102 9.93657 5.89546 10.291 6.33268 10.291H8.70768V12.666C8.70768 13.1032 9.06212 13.4577 9.49935 13.4577Z" fill="#E8FFF3"/>
</svg>
Add User Badge Request</button>


</div>
<div className="matchlist-table">
<table style={{width:'100%'}} >
<tr>
<th>Action</th>
<th>User Name </th>
<th>Email</th>
<th>Status</th>
<th>Followers</th>
<th>Date</th>




</tr>
{[1,2,3]?.map((a)=>{

return <tr>
<td>
<div className="dropdown">
    <button className='themeButton dropdown-toggle' style={{background:"#F5F8FA",color:"#A1A5B7",}} data-bs-toggle="dropdown" aria-expanded="false">Edit</button>

    <ul class="dropdown-menu post-dropdown">

<li onClick={()=>setupdateModal(true)} >
<p> decision</p> 

<i class="bi bi-check-square-fill" style={{color:'#A1A5B7',fontSize:12,width:15}}></i>
            
    </li>
<li onClick={()=>navigate("/Usersdetails/"+1)}>
<p>View</p> 
<svg width="19" height="19" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.825 6.73346C16.658 7.78019 16.658 9.21989 15.825 10.2666C14.5017 11.9296 12.0598 14.1667 8.49929 14.1667C4.93883 14.1667 2.49692 11.9296 1.17355 10.2666C0.340586 9.21989 0.340586 7.78019 1.17355 6.73346C2.49692 5.07047 4.93883 2.83337 8.49929 2.83337C12.0598 2.83337 14.5017 5.07047 15.825 6.73346Z" fill="#E3E4E9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.91602 8.49996C9.91602 9.28236 9.28175 9.91663 8.49935 9.91663C7.71695 9.91663 7.08268 9.28236 7.08268 8.49996C7.08268 8.47985 7.0831 8.45984 7.08393 8.43994C7.19435 8.47881 7.31313 8.49996 7.43685 8.49996C8.02365 8.49996 8.49935 8.02426 8.49935 7.43746C8.49935 7.31374 8.4782 7.19496 8.43933 7.08454C8.45923 7.08371 8.47924 7.08329 8.49935 7.08329C9.28175 7.08329 9.91602 7.71756 9.91602 8.49996ZM11.3327 8.49996C11.3327 10.0648 10.0642 11.3333 8.49935 11.3333C6.93454 11.3333 5.66602 10.0648 5.66602 8.49996C5.66602 6.93515 6.93454 5.66663 8.49935 5.66663C10.0642 5.66663 11.3327 6.93515 11.3327 8.49996Z" fill="#A1A5B7"/>
</svg>
            
    </li>

</ul>
    </div>
</td>
<td> <p style={{color:'#7E8299',fontSize:14}}>shubham@122<br/><span style={{color:'#B5B5C3',fontSize:12}}>shubham</span></p></td>
<td style={{color:'#7E8299',fontSize:14}}>shubham@gmail.com</td>

{/* type 1 = add 2= join tournament 0= withdraw money */}
<td><span className="span-box-green" >active</span></td>
<td><span className="span-box" style={{backgroundColor:'#F4F4F4',color:'#7E8299'}}>22K+</span></td>
<td style={{color:'#7E8299',fontSize:14}}>{new Date().toLocaleDateString()}</td>




</tr>
})}


</table>
</div>

</div>





    </div>
    <Modal show={updateModal} onHide={()=>setupdateModal(false)}>
        <Modal.Header closeButton>
        <Modal.Title style={{fontSize:18,fontWeight:600,color:'#3F4254',letterSpacing:1}}>User Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className='center-div tab1-right-div' style={{background:'#FFF7E7',border:'1px dashed #FFA800'}}>


        <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M16.4412 30.4364C24.0081 30.4364 30.1422 24.3023 30.1422 16.7354C30.1422 9.16856 24.0081 3.03442 16.4412 3.03442C8.87437 3.03442 2.74023 9.16856 2.74023 16.7354C2.74023 24.3023 8.87437 30.4364 16.4412 30.4364Z" fill="#F89C47"/>
<rect x="15.0703" y="9.88489" width="2.7402" height="10.9608" rx="1" fill="#F89C47"/>
<rect x="15.0703" y="22.2157" width="2.7402" height="2.7402" rx="1" fill="#F89C47"/>
</svg>


<p style={{flex:1,marginBottom:2,fontWeight:600,fontSize:13}}>Warning
<p style={{color:'#7E8299',fontSize:11,fontWeight:500,marginBottom:0,marginTop:3}}>By Approve or Rejected user may be notified</p>
</p>


</div>

{/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Reason</Form.Label>
        <Form.Control as="textarea"  rows={5} />
      </Form.Group> */}

<div className='d-flex justify-content-end' style={{gridGap:20,padding:'1rem 0'}}>
    <button className="themeButton" >Approve</button>
    <button className="themeButton" style={{color:'#3E97FF',backgroundColor:'#EEF6FF',borderColor:'transparent'}} >Reject</button>
</div>


        </Modal.Body>
      
      </Modal>
   </>
  )
}

export default ProVerification