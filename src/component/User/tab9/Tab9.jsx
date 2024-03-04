import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { AuthContext } from '../../../AuthProvider'
import axios from '../../../axios'
import Toast from '../../../Toast'



const Tab9 = ({single_user}) => {
  const {userToken} = useContext(AuthContext)
    const [tab,setTab] = useState(3)
    const [editModal,setEditModal] = useState(false)
    const [paymentData,setPaymentData] = useState([])
    const [Modaldata,setModaldata] = useState({})

    const getData= async()=>{

      
      try{
        
        const response = await axios({
          method: "get",
          url: `/transactions?user_id=${single_user?.id}`,
          headers:{
          'Authorization': `Bearer ${userToken} `,
          
          },
        })
       
          
        if(response.status===200){
          const newdata = response.data;
          setPaymentData(newdata?.transactions)
            
          
        }
      } catch (err) {
        const error = err.response.data
        Toast(error.message);
        
      }  
    }
    useEffect(()=>{
      getData()
    },[])

const filterdata = useMemo(()=>{

  var arrData = paymentData?.filter(a=>tab==3 ? a : a?.type==tab)
  return arrData

},[tab,paymentData])

  
  return (
    <>

    <div className="tab7 padding15rem">
    <div className='between-div' style={{borderBottom:'1px solid #EFF2F5'}}>
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>Payment</h5>
<div className='d-flex' style={{gridGap:15}}>


<span className={tab==3 ?"span-text-dark" : 'span-text-light'}  style={{paddingBottom:'1rem', borderBottom:tab==3 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(3)}>All Payment </span>

    <span className={tab==0 ?"span-text-dark" : 'span-text-light'} style={{paddingBottom:'1rem', borderBottom:tab==0 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(0)}>Withdraw </span>
    <span className={tab==1 ?"span-text-dark" : 'span-text-light'}  style={{paddingBottom:'1rem', borderBottom:tab==1 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(1)}>Add Amount</span>
    <span className={tab==2 ?"span-text-dark" : 'span-text-light'}  style={{paddingBottom:'1rem', borderBottom:tab==2 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(2)}>joined Tournament</span>

    
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
  {filterdata?.map((a)=>{

    return <tr>
    <td><span className="span-box" style={{backgroundColor:'#F5F8FA',color:'#A1A5B7',cursor:'pointer'}} onClick={()=>{setModaldata(a);setEditModal(true)}}>Edit</span></td>
    <td>{a?.status ==0 && (<span className="span-box-red">rejected</span>)}
    {a?.status ==1 && (<span className="span-box-yellow">pending</span>)}
    {a?.status ==2 && (<span className="span-box-green">completed</span>)}
    </td>
    <td style={{color:'#7E8299',fontSize:14}}>₹{a?.amount}</td>

    {/* type 1 = add 2= join tournament 0= withdraw money */}
    <td><span className="span-box" style={{backgroundColor:'#F4F4F4',color:'#7E8299'}}>{a?.type==1 ? "Add Money ":a?.type==2 ? "join Tournamnet ":"Withdraw"}</span></td>

    {/* 1 = Paytm wallet 2 =Amazon pay 3= UPI 4= bank details */}
    <td style={{color:'#7E8299',fontSize:14}}>{a?.method_id==1 ?"paytm wallet" :a?.method_id==2 ? "amazone Pay" : a?.method_id==3 ? "UPI": "Bank" }</td> 
    <td style={{color:'#7E8299',fontSize:14}}>₹{a?.closing_balance}</td>
    <td><span className="span-box" style={{backgroundColor:'#F4F4F4',color:'#7E8299'}}>{a?.transaction_id}</span></td>
 

    
    
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

  <div className="d-flex" style={{margin:'1.2rem 0'}}>
    <p className='span-text-light' style={{minWidth:300,marginBottom:0,color:'#7E8299'}}>Customer name </p>
    <p className='span-text-dark' style={{marginBottom:0,fontWeight:600}}>{Modaldata?.user?.name}</p>
  </div>
  <div className="d-flex" style={{margin:'1.2rem 0'}}>
    <p className='span-text-light' style={{minWidth:300,marginBottom:0,color:'#7E8299'}}>Email</p>
    <p className='span-text-dark' style={{marginBottom:0,fontWeight:600}}>{Modaldata?.user?.email}</p>
  </div>
  <div className="d-flex" style={{margin:'1.2rem 0'}}>
    <p className='span-text-light' style={{minWidth:300,marginBottom:0,color:'#7E8299'}}>Mobile No</p>
    <p className='span-text-dark' style={{marginBottom:0,fontWeight:600}}>{Modaldata?.user?.mobile}</p>
  </div>
  
  <div className="d-flex" style={{margin:'1.2rem 0'}}>
    <p className='span-text-light' style={{minWidth:300,marginBottom:0,color:'#7E8299'}}>Transaction id</p>
    <p className='span-text-dark' style={{marginBottom:0,fontWeight:600}}>{Modaldata?.transaction_id}</p>
  </div>
  <div className="d-flex" style={{margin:'1.2rem 0'}}>
    <p className='span-text-light' style={{minWidth:300,marginBottom:0,color:'#7E8299'}}>Transfer Method</p>
    <p className='span-text-dark' style={{marginBottom:0,fontWeight:600}}>{Modaldata?.method_id==1 ?"paytm wallet" :Modaldata?.method_id==2 ? "amazone Pay" : Modaldata?.method_id==3 ? "UPI": "Bank" }</p>
  </div>

 
 
  </div>

  <div style={{background:'#F9F9F9',borderRadius:12,padding:18,marginTop:'1.5rem'}}>
  <h6 style={{fontWeight:900,color:'#3F4254',marginBottom:18}}>{Modaldata?.method_id==1 ?"paytm wallet" :Modaldata?.method_id==2 ? "amazone Pay" : Modaldata?.method_id==3 ? "UPI": "Bank" } Details</h6>

  <div className="d-flex" style={{margin:'1.2rem 0'}}>
    <p className='span-text-light' style={{minWidth:300,marginBottom:0,color:'#7E8299'}}>Payment Status</p>
     {Modaldata?.status ? <span className='span-box-green'>success</span>:<span className='span-box-red'>reject</span>}
  </div>
  <div className="d-flex" style={{margin:'1.2rem 0'}}>
    <p className='span-text-light' style={{minWidth:300,marginBottom:0,color:'#7E8299'}}>Process on</p>
    <p className="span-text-dark" style={{marginBottom:0,fontWeight:600}}>{new Date(Modaldata?.created_at).toDateString() } &emsp;{new Date(Modaldata?.created_at).toLocaleTimeString()}</p>
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