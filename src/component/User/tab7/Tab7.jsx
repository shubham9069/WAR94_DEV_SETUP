import React from 'react'

const Tab7 = () => {
  return (
    <>
<div className="tab7 padding15rem">
<div className='between-div' style={{borderBottom:'1px solid #EFF2F5',paddingBottom:'1rem'}}>
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>Match History </h5>

</div>
<div className="matchlist-table">
<table style={{width:'100%'}} >
  <tr>
    <th>Status</th>
    <th>Room</th>
    <th>Tournament</th>
    <th>Game UserName</th>
    <th>Game Character</th>
    <th>Rank</th>
    <th>Payment</th>
    <th>Total killed</th>
  
    
  </tr>
  {[...Array(4)]?.map((a)=>{

    return <tr>
    <td><span className="span-box" style={{backgroundColor:' #E8FFF3',color:'#50CD89'}}>completed</span></td>
    <td style={{color:'#00A3FF',fontSize:14}}>12541578</td>
    <td style={{color:'#7E8299',fontSize:14}}>BGMI Solo </td>
    <td style={{color:'#7E8299',fontSize:14}}>5555567898</td>
    <td style={{color:'#7E8299',fontSize:14}}>IMSK </td>
    <td style={{color:'#7E8299',fontSize:14}}>1</td>
    <td style={{color:'#7E8299',fontSize:14}}>Cash</td>
    <td style={{color:'#7E8299',fontSize:14}}>₹10</td>

    
    
  </tr>
  })}
  
 
  </table>
</div>






</div>
    </>
  )
}

export default Tab7