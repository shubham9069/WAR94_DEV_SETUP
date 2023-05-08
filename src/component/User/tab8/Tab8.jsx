import React, { useState } from 'react'

const Tab8 = () => {
    const [tab,setTab] = useState(1)
  return (
    <>
    <div className="tab7 padding15rem">
    
    <div className='between-div' style={{borderBottom:'1px solid #EFF2F5'}}>
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>Joining Match</h5>
<div className='d-flex' style={{gridGap:15}}>
<span className='span-text-light'>Last  update - 1-10-2022 12:42 PM</span>
    <span className={tab==1 ?"span-text-dark" : 'span-text-light'} style={{paddingBottom:'1rem', borderBottom:tab==1 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(1)}>Game Character </span>
    <span className={tab==2 ?"span-text-dark" : 'span-text-light'}  style={{paddingBottom:'1rem', borderBottom:tab==2 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(2)}>History</span>
    
</div>
</div>


    </div>

    </>
  )
}

export default Tab8