import React, { useState } from 'react'

const Wallent = ({single_user,editpost}) => {
    const [walletdata ,setWalletData] = useState({
        total:single_user?.total ,
        winning:single_user?.winning,
        bonus:single_user?.bonus,
        deposite:single_user?.deposite


    })
    const {total,winning,bonus,deposite} = walletdata
 
 
  return (
    <>
    <div className="user-permission-tab padding15rem">
    <div className='between-div' style={{borderBottom:'1px solid #EFF2F5',paddingBottom:'1rem'}}>
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>Wallet</h5>

</div>

<div className="inputwrapper" style={{margin:'1rem 0'}}>
                <p className='span-text-dark' >Total Balance</p>
                <h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>₹{total}</h5>
    </div>
<div className="inputwrapper" style={{margin:'2rem 0'}}>
                <p className='span-text-dark' >Winning</p>
                <input className="form-input" value={winning} name="winning" ></input>
    </div>
<div className="inputwrapper" style={{margin:'2rem 0'}}>
                <p className='span-text-dark' >Bonus</p>
                <input className="form-input" value={bonus} name="bonus" ></input>
    </div>

<div className="inputwrapper" style={{margin:'2rem 0'}}>
                <p className='span-text-dark' >Deposite Amount</p>
                <input className="form-input" value={deposite} name="deposite" ></input>
    </div>

    <div className="inputwrapper" style={{margin:'2rem 0'}}>
                <p className='span-text-dark' >Add Money</p>
                <span className='span-text-light d-flex align-items-center' style={{flex: 2}}>
                <input  type="checkbox" className='event-toggle' checked={single_user?.add_money} name="add_money" onChange={(e)=>editpost(e.target.name,e.target.checked ? 1:0)} style={{position:'relative',top:0,left:0,marginRight:8}}></input>Active</span>
                
        </div>
    <div className="inputwrapper" style={{margin:'2rem 0'}} >
                <p className='span-text-dark' >Withdraw</p>
                <span className='span-text-light d-flex align-items-center' style={{flex: 2}}>
                <input  type="checkbox" className='event-toggle' checked={single_user?.withdraw_money} name="withdraw_money" onChange={(e)=>editpost(e.target.name,e.target.checked ? 1:0)} style={{position:'relative',top:0,left:0,marginRight:8}}></input>Active</span>
                
        </div>
    <div className="inputwrapper" style={{margin:'2rem 0'}}>
                <p className='span-text-dark' >Wallet Transfer</p>
                <span className='span-text-light d-flex align-items-center' style={{flex: 2}}>
                <input  type="checkbox" className='event-toggle' checked={single_user?.wallet_transfer} name="wallet_transfer" onChange={(e)=>editpost(e.target.name,e.target.checked ? 1:0)} style={{position:'relative',top:0,left:0,marginRight:8}}></input>Active</span>
                
        </div>

        <div >
    <p style={{fontSize:14,color:'#3F4254',marginBottom:0}}>Payment method change</p>
    <span className="span-text-light" style={{fontSize:12}}>4:23 PM by <span style={{color:'#E9B500'}}>Rahul Kumar</span></span>

    <div className='center-div tab1-right-div' style={{background:'#FFF8DD',border:'1px dashed #E9B500'}}>

    <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.25" d="M6.12913 13.3333H11.6369V22.6666H14.3908V13.3333H19.8985V22.6666H22.6524V13.3333H28.1602V22.6666C29.6811 22.6666 30.9141 23.8605 30.9141 25.3333V26.6666C30.9141 28.1393 29.6811 29.3333 28.1602 29.3333H6.12913C4.6082 29.3333 3.37524 28.1393 3.37524 26.6666V25.3333C3.37524 23.8605 4.6082 22.6666 6.12913 22.6666V13.3333Z" fill="#E9B500"/>
<path d="M3.37524 9.8054C3.37524 8.71499 4.06083 7.73443 5.10636 7.32947L16.1219 3.0628C16.7784 2.80849 17.5109 2.80849 18.1674 3.0628L29.1829 7.32947C30.2285 7.73443 30.9141 8.71499 30.9141 9.8054V10.6666C30.9141 12.1394 29.6811 13.3333 28.1602 13.3333H6.12913C4.6082 13.3333 3.37524 12.1394 3.37524 10.6666V9.8054Z" fill="#E9B500"/>
</svg>
   
    <p style={{flex:1,marginBottom:0,fontWeight:600,fontSize:15}}>Paytm
<p style={{color:'#7E8299',fontSize:13,fontWeight:500,marginBottom:0}}>9069232229</p>
</p>

<button className="themeButton" style={{background:'#E9B500',borderColor:'transparent'}}>View</button>  
  </div>
  </div>  


</div>
    </>
  )
}

export default Wallent