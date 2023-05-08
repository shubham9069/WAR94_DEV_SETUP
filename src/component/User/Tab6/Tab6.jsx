import React, { useState } from 'react'

const Tab6 = () => {
    const [tab,setTab] = useState(1)
  return (
   <>
    <div className="tab6 padding15rem">

    <div className='between-div' style={{borderBottom:'1px solid #EFF2F5'}}>
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>Joining Match</h5>
<div className='d-flex' style={{gridGap:15}}>
    <span className={tab==1 ?"span-text-dark" : 'span-text-light'} style={{paddingBottom:'1rem', borderBottom:tab==1 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(1)}>Joining Match </span>
    <span className={tab==2 ?"span-text-dark" : 'span-text-light'}  style={{paddingBottom:'1rem', borderBottom:tab==2 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(2)}>Upcoming</span>
    
</div>
</div>
<div className="matchlist-table">
<table style={{width:'100%'}} >
  <tr>
    <th>Remove</th>
    <th>Cash/Winning</th>
    <th>Game</th>
    <th>Room</th>
    <th>Tournament</th>
    <th>Game UserName</th>
    <th>Game Character</th>
    <th>Rank</th>
    <th>Payment</th>
    <th>Per Kill</th>
    <th>Group Tag </th>
  
    
  </tr>
  <tr>
    <td>
        <select className="form-input">
            <option hidden selected > no</option>
        </select>
    </td>
    <td><span className="span-box" style={{backgroundColor:' #E8FFF3',color:'#50CD89'}}>upcomming</span></td>
    <td><span className="span-box" >100 / Cash </span></td>
    <td style={{color:'#00A3FF',fontSize:14}}>12541578</td>
    <td style={{color:'#7E8299',fontSize:14}}>BGMI Solo </td>
    <td style={{color:'#7E8299',fontSize:14}}>5555567898</td>
    <td style={{color:'#7E8299',fontSize:14}}>IMSK </td>
    <td style={{color:'#7E8299',fontSize:14}}>1</td>
    <td style={{color:'#7E8299',fontSize:14}}>Cash</td>
    <td style={{color:'#7E8299',fontSize:14}}>₹10</td>
    <td style={{color:'#7E8299',fontSize:14}}>Grp-aab-4521</td>
    
    
  </tr>
 
  </table>
</div>


    </div>
   </>
  )
}

export default Tab6