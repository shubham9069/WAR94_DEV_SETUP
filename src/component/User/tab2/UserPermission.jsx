import React, { useState } from 'react'

const UserPermission = () => {
    const [tab,setTab] = useState(1)
  return (
   <>
    <div className="user-permission-tab padding15rem">
    <div className='d-flex justify-content-between' style={{borderBottom:'1px solid #EFF2F5',}}>
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>User Permissions</h5>
<div className='d-flex' style={{gridGap:15}}>
    <span className={tab==1 ?"span-text-dark":'span-text-light'} style={{cursor:'pointer',paddingBottom:'1rem', borderBottom:tab==1? '2px solid #00A3FF':'none'}} onClick={()=>setTab(1)}>User permissions</span>
    <span className={tab==2 ?"span-text-dark":'span-text-light'} style={{cursor:'pointer',paddingBottom:'1rem', borderBottom:tab==2? '2px solid #00A3FF':'none' }} onClick={()=>setTab(2)}>History</span>
    
</div>
</div>
<div className='d-flex' style={{gridGap:20,margin:'1.5rem 0'}}>
  {['Device Banned','Ip','User Account']?.map((a)=>{

    return<div className='dropdown'> 
    <div className=' dropdown-toggle' style={{cursor:'pointer',padding: '1rem',border: '1.04481px dashed rgb(228, 230, 239)', borderRadius: 6.26885,width:180}} data-bs-toggle="dropdown" aria-expanded="false">
    <p className='span-text-dark' style={{marginBottom:0,fontWeight:900,fontSize:18}}>30</p>
            <span className='span-text-light'>{a}</span>
    
    </div>
    <ul class="dropdown-menu user-permission">
    <li><span style={{fontSize:16,color:'#3F4254',fontWeight:900}}>{a} Ban</span></li>


  <table style={{width:'100%'}} >
  <tr>
    <th>Device</th>
    <th>Status</th>
    <th>Date</th>

  
    
  </tr>

  {[...Array(4)]?.map((a,index)=>{

    return   <tr style={{backgroundColor:index==1 ? '#E8FFF3': index==2?"rgb(255 224 222);":"none"}} >
    <td style={{color:index==1? "green":'red'}}>iphone </td>
    <td><span className='span-text-light d-flex align-items-center' style={{flex: 2,fontSize:12}}>
                <input  type="checkbox" className='event-toggle' style={{position:'relative',top:0,left:0,marginRight:8}} checked={index==1}></input>Active</span></td>
    <td style={{color:'#5E6278'}}>1-10-2022 10:15 AM</td>
    
    
  </tr>
  })}

 
  </table>
  
    
  </ul>  
    </div>
  })}
    
  </div>
{tab==1 &&(

  <div style={{border: '1px dashed #E4E6EF',borderRadius: '6px',padding: '1rem'}}>
      <div className="between-div">
        <span className="text-span-dark">user</span>
        <span className='span-text-light d-flex align-items-center' >
                <input  type="checkbox" className='event-toggle' style={{position:'relative',top:0,left:0,marginRight:8}} ></input>Active</span>
         <button className='themeButton' style={{background:'#FFF5F8',color:'#D9214E',borderColor:"transparent"}}>
         
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:5}}>
<path d="M22.3422 9.506C23.5181 10.9837 23.5181 13.0163 22.3422 14.494C20.4739 16.8417 17.0265 20 11.9999 20C6.97341 20 3.526 16.8417 1.65772 14.494C0.481768 13.0163 0.481768 10.9837 1.65772 9.506C3.526 7.15826 6.97341 4 11.9999 4C17.0265 4 20.4739 7.15826 22.3422 9.506Z" fill="#F1416C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 11.9716 10.0006 11.9434 10.0018 11.9153C10.1577 11.9701 10.3253 12 10.5 12C11.3284 12 12 11.3284 12 10.5C12 10.3253 11.9701 10.1577 11.9153 10.0018C11.9434 10.0006 11.9716 10 12 10C13.1046 10 14 10.8954 14 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" fill="white"/>
</svg> 
 Mark as surveillance</button>       
      </div>

      <div className="between-div" style={{background: '#F5F8FA',border:'1px solid rgba(228, 230, 239, 0.7)',borderRadius:6,padding:'1rem',margin:'1.5rem 0'}}>
        <span  style={{fontWeight:600}}>Hacker</span>
        <span style={{color:"#A1A5B7",fontSize:12}}>22-09-2022  09:30 AM</span>
             
      </div>
      <div className="between-div" style={{background: '#F5F8FA',border:'1px solid rgba(228, 230, 239, 0.7)',borderRadius:6,padding:'1rem',margin:'1.5rem 0'}}>
        <span  style={{fontWeight:600}}>Hacker</span>
        <span style={{color:"#A1A5B7",fontSize:12}}>22-09-2022  09:30 AM</span>
             
      </div>
      <div className="between-div" style={{border:'1px solid rgba(228, 230, 239, 0.7)',borderRadius:6,padding:'0.7rem 1rem',margin:'1.5rem 0',gridGap:40}}>
        <span className="span-text-dark " style={{width:100}} >Device Ban</span>
        <span className='span-text-light d-flex align-items-center'  style={{flex:1}}>
                <input  type="checkbox" className='event-toggle' style={{position:'relative',top:0,left:0,marginRight:8}} ></input>
                Active 
                 <span className='span-box' style={{background:'#E8FFF3',color:'#A1A5B7',marginLeft:18}}> <span style={{color:'green'}}>Current </span> Iphone 14 - e1ba0094f4d3a429</span>
                 <span className='span-box' style={{background:'#F5F8FA',color:'#A1A5B7',marginLeft:18}}> <span style={{color:'#7E8299'}}>Samsung-Fold - </span>e1ba0094f4d3a429</span>
                 </span>
          <div style={{}}>       
         <button className='themeButton' style={{background: '#EEF6FF',color:' #00A3FF',border:'transparent',margin:'0 0 0 auto'}} >View All</button> 
         </div>      
      </div>
      <div className="between-div" style={{border:'1px solid rgba(228, 230, 239, 0.7)',borderRadius:6,padding:'0.7rem 1rem',gridGap:40}}>
        <span className="span-text-dark" style={{width:100}}>IP BAN</span>
        <span className='span-text-light d-flex align-items-center' style={{flex:2}}>
                <input  type="checkbox" className='event-toggle' style={{position:'relative',top:0,left:0,marginRight:8}} ></input>
                Deactivate
                 <span className='span-box' style={{background:'#E8FFF3',color:'#A1A5B7',marginLeft:18}}> <span style={{color:'green'}}>Current </span> 192.168.2.100</span>
                 <span className='span-box' style={{background:'#F5F8FA',color:'#A1A5B7',marginLeft:18}}>192.168.2.100</span>
                 </span>

             <div  style={{}}>   
         <button className='themeButton' style={{background: '#EEF6FF',color:' #00A3FF' ,border:'transparent',margin:'0 0 0 auto'}} >View All</button>    
         </div>    
      </div>
  </div>

)}

{tab==2 && (
  <>
  <div className='tab1-block' style={{marginTop: '2rem'}}>
<div className='d-flex align-items-center tab1-left' style={{flexDirection:'column'}}>
<div className='center-div' style={{minWidth:36,minHeight:36,backgroundColor:' #EFF2F5',borderRadius:'50%'}}>

    
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.66675 2C3.11446 2 2.66675 2.44772 2.66675 3V13C2.66675 13.5523 3.11446 14 3.66675 14C4.21903 14 4.66675 13.5523 4.66675 13V3C4.66675 2.44772 4.21903 2 3.66675 2ZM7.00007 2C6.44779 2 6.00007 2.44772 6.00007 3V13C6.00007 13.5523 6.44779 14 7.00007 14C7.55236 14 8.00007 13.5523 8.00007 13V3C8.00007 2.44772 7.55236 2 7.00007 2Z" fill="#7E8299"/>
<rect opacity="0.3" x="8.98486" y="2.61609" width="2" height="12" rx="1" transform="rotate(-19 8.98486 2.61609)" fill="#7E8299"/>
</svg>

</div>
<img src='images/Rectangle.png'></img>
</div>
<div className='tab1-right w-100'>
    <p style={{fontSize:14,color:'#3F4254',marginBottom:0}}>Pubg mobile </p>
    <span className="span-text-light" style={{fontSize:12}}>4:23 PM by <span style={{color:'#00A3FF'}}>admin</span></span>

    <div className='center-div tab1-right-div '>
    <h6 style={{flex:1,marginBottom:0,fontWeight:600}}>Pubg Mobile</h6>
    <span className="span-box" style={{color:'#A1A5B7',background:'#F5F8FA'}}>22-09-2022  09:30 AM</span>
  
    </div>
  
</div>







</div>
  <div className='tab1-block' >
<div className='d-flex align-items-center tab1-left' style={{flexDirection:'column'}}>
<div className='center-div' style={{minWidth:36,minHeight:36,backgroundColor:' #EFF2F5',borderRadius:'50%'}}>

    
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.66675 2C3.11446 2 2.66675 2.44772 2.66675 3V13C2.66675 13.5523 3.11446 14 3.66675 14C4.21903 14 4.66675 13.5523 4.66675 13V3C4.66675 2.44772 4.21903 2 3.66675 2ZM7.00007 2C6.44779 2 6.00007 2.44772 6.00007 3V13C6.00007 13.5523 6.44779 14 7.00007 14C7.55236 14 8.00007 13.5523 8.00007 13V3C8.00007 2.44772 7.55236 2 7.00007 2Z" fill="#7E8299"/>
<rect opacity="0.3" x="8.98486" y="2.61609" width="2" height="12" rx="1" transform="rotate(-19 8.98486 2.61609)" fill="#7E8299"/>
</svg>

</div>
<img src='images/Rectangle.png'></img>
</div>
<div className='tab1-right w-100'>
    <p style={{fontSize:14,color:'#3F4254',marginBottom:0}}>Free Fire</p>
    <span className="span-text-light" style={{fontSize:12}}>4:23 PM by <span style={{color:'#00A3FF'}}>admin(sonu)</span></span>

    <div className='center-div tab1-right-div '>
    <h6 style={{flex:1,marginBottom:0,fontWeight:600}}>Abusing</h6>
    <span className="span-box" style={{color:'#A1A5B7',background:'#F5F8FA'}}>22-09-2022  09:30 AM</span>
  
    </div>
  
</div>







</div>
  </>
)}
  
    </div>
   </>
  )
}

export default UserPermission