import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../AuthProvider'
import axios from '../../../axios'
import Toast from '../../../Toast'


const Tab3 = ({single_user}) => {
const {userToken} =useContext(AuthContext)
const [WithdrawData,setWithdrawData] = useState([])
const [paymentHistory,setPaymentHistory] = useState([])

  const getWithdraw = async(id)=>{
    try{
      
      const response = await axios({
        method: "get",
        url: `/withdraw_history?user_id=${single_user?.id}`,
        headers:{
        'Authorization': `Bearer ${userToken} `,
        
        },
      })
     
        
      if(response.status===200){
        const data = response.data;
        setPaymentHistory(data?.history)
        setWithdrawData(data?.payment_methods)

      }
    } catch (err) {
      const error = err.response.data
      Toast(error.message);
      
    }  
  }
  useEffect(()=>{
    getWithdraw()
  },[])
  return (
   <>
   <div className='tabinfo padding15rem'>
    <h5 style={{fontWeight:900,color:'#3F4254',paddingBottom:'1rem',borderBottom:'1px solid #EFF2F5'}}>Withdraw</h5>
    <div className="inputwrapper">
                <p className='span-text-dark' >Paytm</p>
                <input className="form-input" value={WithdrawData?.paytm}></input>
    </div>
    <div className="inputwrapper">
                <p className='span-text-dark' >AmazonePay</p>
                <input className="form-input" value={WithdrawData?.amazon_pay}></input>
    </div>
    <div className="inputwrapper">
                <p className='span-text-dark' >UPI</p>
                <input className="form-input" value={WithdrawData?.upi}></input>
    </div>
    <div className="inputwrapper">
                <p className='span-text-dark' >Account No*</p>
                <input className="form-input" value={WithdrawData?.account_no}></input>
    </div>
    <div className="inputwrapper">
                <p className='span-text-dark' >Account Holder Name</p>
                <input className="form-input" value={WithdrawData?.account_name}></input>
    </div>
    <div className="inputwrapper">
                <p className='span-text-dark' >IFSC Code</p>
                <input className="form-input" value={WithdrawData?.ifsc_code}></input>
    </div>
    </div>

    <div className='tabinfo padding15rem' style={{marginTop:'1.5rem'}}>

    <h5 style={{fontWeight:900,color:'#3F4254',paddingBottom:'1rem',borderBottom:'1px solid #EFF2F5'}}>History</h5>
      {paymentHistory.map((element)=>{

        return <div style={{marginBottom:'2rem'}}>
    <p style={{fontSize:14,color:'#3F4254',marginBottom:0}}>Payment method change</p>
    <span className="span-text-light" style={{fontSize:12}}>{new Date(element?.created_at).toLocaleString()}  &emsp; payment_id : <span style={{color:'#00A3FF'}}>{element?.payment_id}</span></span>

    <div className='center-div tab1-right-div' style={{background:'#F1FAFF',border:'1px dashed #00A3FF'}}>

    <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.25" d="M6.12913 13.3333H11.6369V22.6666H14.3908V13.3333H19.8985V22.6666H22.6524V13.3333H28.1602V22.6666C29.6811 22.6666 30.9141 23.8605 30.9141 25.3333V26.6666C30.9141 28.1393 29.6811 29.3333 28.1602 29.3333H6.12913C4.6082 29.3333 3.37524 28.1393 3.37524 26.6666V25.3333C3.37524 23.8605 4.6082 22.6666 6.12913 22.6666V13.3333Z" fill="#00A3FF"/>
<path d="M3.37524 9.8054C3.37524 8.71499 4.06083 7.73443 5.10636 7.32947L16.1219 3.0628C16.7784 2.80849 17.5109 2.80849 18.1674 3.0628L29.1829 7.32947C30.2285 7.73443 30.9141 8.71499 30.9141 9.8054V10.6666C30.9141 12.1394 29.6811 13.3333 28.1602 13.3333H6.12913C4.6082 13.3333 3.37524 12.1394 3.37524 10.6666V9.8054Z" fill="#00A3FF"/>
</svg>
   
    <p style={{flex:1,marginBottom:0,fontWeight:600,fontSize:15}}> {element?.payment_method?.account_name} {element?.payment_method?.name} 
<p style={{color:'#7E8299',fontSize:13,fontWeight:500,marginBottom:0}}>{element?.payment_method?.mobile}</p>
{element?.payment_method?.name == "Bank Details" && <p style={{color:'#7E8299',fontSize:13,fontWeight:500,marginBottom:0}}>Account No : {element?.payment_method?.Account} &emsp; IFSC Code : {element?.payment_method?.ifsc}</p>}
</p>
  
  </div>
  </div>
      })}
    




    </div>
   </>
  )
}

export default Tab3