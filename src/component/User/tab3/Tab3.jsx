import React from 'react'

const Tab3 = () => {
  return (
   <>
   <div className='tabinfo padding15rem'>
    <h5 style={{fontWeight:900,color:'#3F4254',paddingBottom:'1rem',borderBottom:'1px solid #EFF2F5'}}>Withdraw</h5>
    <div className="inputwrapper">
                <p className='span-text-dark' >Paytm</p>
                <input className="form-input" placeholder='Event Name'></input>
    </div>
    <div className="inputwrapper">
                <p className='span-text-dark' >UPI</p>
                <input className="form-input" placeholder='Event Name'></input>
    </div>
    <div className="inputwrapper">
                <p className='span-text-dark' >Beneficiary ID*</p>
                <input className="form-input" placeholder='Event Name'></input>
    </div>
    <div className="inputwrapper">
                <p className='span-text-dark' >Account Holder Name</p>
                <input className="form-input" placeholder='Event Name'></input>
    </div>
    <div className="inputwrapper">
                <p className='span-text-dark' >IFSC Code</p>
                <input className="form-input" placeholder='Event Name'></input>
    </div>
    </div>

    <div className='tabinfo padding15rem' style={{marginTop:'1.5rem'}}>

    <h5 style={{fontWeight:900,color:'#3F4254',paddingBottom:'1rem',borderBottom:'1px solid #EFF2F5'}}>History</h5>

    <div style={{marginBottom:'2rem'}}>
    <p style={{fontSize:14,color:'#3F4254',marginBottom:0}}>Payment method change</p>
    <span className="span-text-light" style={{fontSize:12}}>4:23 PM by <span style={{color:'#00A3FF'}}>Rahul Kumar</span></span>

    <div className='center-div tab1-right-div' style={{background:'#F1FAFF',border:'1px dashed #00A3FF'}}>

    <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.25" d="M6.12913 13.3333H11.6369V22.6666H14.3908V13.3333H19.8985V22.6666H22.6524V13.3333H28.1602V22.6666C29.6811 22.6666 30.9141 23.8605 30.9141 25.3333V26.6666C30.9141 28.1393 29.6811 29.3333 28.1602 29.3333H6.12913C4.6082 29.3333 3.37524 28.1393 3.37524 26.6666V25.3333C3.37524 23.8605 4.6082 22.6666 6.12913 22.6666V13.3333Z" fill="#00A3FF"/>
<path d="M3.37524 9.8054C3.37524 8.71499 4.06083 7.73443 5.10636 7.32947L16.1219 3.0628C16.7784 2.80849 17.5109 2.80849 18.1674 3.0628L29.1829 7.32947C30.2285 7.73443 30.9141 8.71499 30.9141 9.8054V10.6666C30.9141 12.1394 29.6811 13.3333 28.1602 13.3333H6.12913C4.6082 13.3333 3.37524 12.1394 3.37524 10.6666V9.8054Z" fill="#00A3FF"/>
</svg>
   
    <p style={{flex:1,marginBottom:0,fontWeight:600,fontSize:15}}>Paytm
<p style={{color:'#7E8299',fontSize:13,fontWeight:500,marginBottom:0}}>9069232229</p>
</p>
  
  </div>
  </div>

    <div>
    <p style={{fontSize:14,color:'#3F4254',marginBottom:0}}>Payment method change</p>
    <span className="span-text-light" style={{fontSize:12}}>4:23 PM by <span style={{color:'#7239EA'}}>Rahul Kumar</span></span>

    <div className='center-div tab1-right-div' style={{background:'#F8F5FF',border:'1px dashed #7239EA'}}>

    <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.25" d="M6.12913 13.3333H11.6369V22.6666H14.3908V13.3333H19.8985V22.6666H22.6524V13.3333H28.1602V22.6666C29.6811 22.6666 30.9141 23.8605 30.9141 25.3333V26.6666C30.9141 28.1393 29.6811 29.3333 28.1602 29.3333H6.12913C4.6082 29.3333 3.37524 28.1393 3.37524 26.6666V25.3333C3.37524 23.8605 4.6082 22.6666 6.12913 22.6666V13.3333Z" fill="#7239EA"/>
<path d="M3.37524 9.8054C3.37524 8.71499 4.06083 7.73443 5.10636 7.32947L16.1219 3.0628C16.7784 2.80849 17.5109 2.80849 18.1674 3.0628L29.1829 7.32947C30.2285 7.73443 30.9141 8.71499 30.9141 9.8054V10.6666C30.9141 12.1394 29.6811 13.3333 28.1602 13.3333H6.12913C4.6082 13.3333 3.37524 12.1394 3.37524 10.6666V9.8054Z" fill="#7239EA"/>
</svg>
   
    <p style={{flex:1,marginBottom:0,fontWeight:600,fontSize:15}}>Paytm
<p style={{color:'#7E8299',fontSize:13,fontWeight:500,marginBottom:0}}>9069232229</p>
</p>
  
  </div>
  </div>


    </div>
   </>
  )
}

export default Tab3