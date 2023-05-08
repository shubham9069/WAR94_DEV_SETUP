import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'



const Tab9 = () => {
    const [tab,setTab] = useState(1)
    const [editModal,setEditModal] = useState(false)


    const userDetails =[
        {name:"Customer Name",value:"Rahu Kumar"},
        {name:"Email",value:"Rahulkumar@gmail.com"},
        {name:"Mobile No",value:"+91 989 090 9890"},
        {name:"Transaction id",value:"WAR98097510091215"},
        {name:"Transfer Method",value:"UPI"},
        {name:"UPI VPA",value:"Rahul@gmail.com"},
    ]
  return (
    <>

    <div className="tab7 padding15rem">
    <div className='between-div' style={{borderBottom:'1px solid #EFF2F5'}}>
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>Payment</h5>
<div className='d-flex' style={{gridGap:15}}>
    <span className={tab==1 ?"span-text-dark" : 'span-text-light'} style={{paddingBottom:'1rem', borderBottom:tab==1 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(1)}>payment </span>
    <span className={tab==2 ?"span-text-dark" : 'span-text-light'}  style={{paddingBottom:'1rem', borderBottom:tab==2 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(2)}>Withdraw</span>
    <span className={tab==3 ?"span-text-dark" : 'span-text-light'}  style={{paddingBottom:'1rem', borderBottom:tab==3 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(3)}>Add Amount</span>
    <span className={tab==4 ?"span-text-dark" : 'span-text-light'}  style={{paddingBottom:'1rem', borderBottom:tab==4 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(4)}>joined Tournament</span>
    
</div>
</div>
<div className="matchlist-table">
<table style={{width:'100%'}} >
  <tr>
    <th>Action</th>
    <th>payment Status</th>
    <th>Amount</th>
    <th>Amount Type</th>
    <th>Payment Mode </th>
    <th>Closing Balance</th>
    <th>Transaction id</th>

  
    
  </tr>
  {[...Array(4)]?.map((a)=>{

    return <tr>
    <td><span className="span-box" style={{backgroundColor:'#F5F8FA',color:'#A1A5B7',cursor:'pointer'}} onClick={()=>setEditModal(true)}>Edit</span></td>
    <td><span className="span-box" style={{backgroundColor:' #E8FFF3',color:'#50CD89'}}>completed</span></td>
    <td style={{color:'#7E8299',fontSize:14}}>₹10</td>
    <td><span className="span-box" style={{backgroundColor:'#F4F4F4',color:'#7E8299'}}>Join Tournament</span></td>
    <td style={{color:'#7E8299',fontSize:14}}>Cash Balance</td>
    <td style={{color:'#7E8299',fontSize:14}}>₹200</td>
    <td><span className="span-box" style={{backgroundColor:'#F4F4F4',color:'#7E8299'}}>War89787A04111208</span></td>
 

    
    
  </tr>
  })}
  
 
  </table>
</div>



    </div>


     {/* edit Details */}
     <Modal show={editModal} onHide={()=>setEditModal(false)} style={{backdropFilter: 'blur(8px)'}} size="lg">
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:18,fontWeight:600,color:'#3F4254',letterSpacing:1}}>Edit Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="padding15rem">
  <div style={{background:'#F9F9F9',borderRadius:12,padding:18}}>
  <h6 style={{fontWeight:900,color:'#3F4254',marginBottom:18}}>User Details</h6>


{userDetails?.map((element)=>{

    return  <div className="d-flex" style={{margin:'1.2rem 0'}}>
    <p className='span-text-light' style={{minWidth:300,marginBottom:0,color:'#7E8299'}}>{element?.name}</p>
    <p className='span-text-dark' style={{marginBottom:0,fontWeight:600}}>{element?.value}</p>
  </div>
})}
 
 
  </div>

  <div style={{background:'#F9F9F9',borderRadius:12,padding:18,marginTop:'1.5rem'}}>
  <h6 style={{fontWeight:900,color:'#3F4254',marginBottom:18}}>Banking Details</h6>

  <div className="d-flex" style={{margin:'1.2rem 0'}}>
    <p className='span-text-light' style={{minWidth:300,marginBottom:0,color:'#7E8299'}}>Payment Status</p>
    <span className='span-box-green'>success</span>
  </div>
  <div className="d-flex" style={{margin:'1.2rem 0'}}>
    <p className='span-text-light' style={{minWidth:300,marginBottom:0,color:'#7E8299'}}>Process on</p>
    <p className="span-text-dark" style={{marginBottom:0,fontWeight:600}}>10 Nov 2022 12:15 PM</p>
  </div>
  <div className="d-flex" style={{margin:'1.2rem 0'}}>
    <p className='span-text-light' style={{minWidth:300,marginBottom:0,color:'#7E8299'}}>Payment Gateway Payment Status</p>
    <span className='span-box-red' >Reserved</span>
  </div>
  <div className="d-flex" style={{margin:'1.2rem 0'}}>
    <p className='span-text-light' style={{minWidth:300,marginBottom:0,color:'#7E8299'}}>Payment Gateway Process on</p>
    <p className="span-text-dark" style={{marginBottom:0,fontWeight:600}}>10 Nov 2022 12:15 PM</p>
  </div>
  <div className="d-flex" style={{margin:'1.2rem 0'}}>
    <p className='span-text-light' style={{minWidth:300,marginBottom:0,color:'#7E8299'}}>Action</p>
    <select style={{border: '1px solid #E7E7E7',borderRadius:6,fontSize:13,padding:'7px 3rem 7px 7px'}}>
    <option selected hidden >select</option>
    </select>
  </div>
  <div className="d-flex" style={{margin:'1.2rem 0'}}>
    <p className='span-text-light' style={{minWidth:300,marginBottom:0,color:'#7E8299'}}>Add Your Comment</p>
    <textarea style={{border: '1px solid #E7E7E7',borderRadius:6,fontSize:13,width:'100%',padding:8}} rows={6} placeholder="Add Your Comment">
    </textarea>
  </div>
  <div className="d-flex" style={{margin:'1.2rem 0'}}>
    <p className='span-text-light' style={{minWidth:300,marginBottom:0,color:'#7E8299'}}></p>
    <button className='themeButton'>Save Changes</button>
  </div>

 
 
  </div>




        </div>
       


        </Modal.Body>
      
      </Modal>

    </>
  )
}

export default Tab9