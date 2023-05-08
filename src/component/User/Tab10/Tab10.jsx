import React, { useState } from 'react'
import LoginChat from './LoginChat'
import Persnal_chat from './Persnal_chat'

const Tab10 = () => {
    const [tab,setTab] = useState(1)
  return (
    <>
        <div className="tab7 padding15rem" style={{paddingBottom:0}}>
        <div className='between-div' style={{}}>
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:'1.5rem'}}>Chat</h5>
<div className='d-flex' style={{gridGap:15}}>
    <span className={tab==1 ?"span-text-dark" : 'span-text-light'} style={{paddingBottom:'1.5rem', borderBottom:tab==1 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(1)}>Persnal Chat </span>
    <span className={tab==2 ?"span-text-dark" : 'span-text-light'}  style={{paddingBottom:'1.5rem', borderBottom:tab==2 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(2)}>Group Chat</span>
    <span className={tab==3 ?"span-text-dark" : 'span-text-light'}  style={{paddingBottom:'1.5rem', borderBottom:tab==3 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(3)}>World Chat</span>

    
</div>
</div>
        </div>

      {/* <LoginChat /> */}
      <Persnal_chat />

    </>
  )
}

export default Tab10