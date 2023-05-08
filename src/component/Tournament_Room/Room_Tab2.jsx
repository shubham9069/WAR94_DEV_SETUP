import React from 'react'

const Room_Tab2 = () => {
  return (
    <>
      <div className="matchlist-table">
<table style={{width:'100%'}} >
  <tr>
    <th>Action</th>
    <th>Real Name</th>
    <th>User Name</th>
    <th>Phone No</th>
    <th>Game Character</th>
    <th>game UserName</th>
    <th>Payment</th>
    <th>Per Kill</th>
  
    
  </tr>
  {[...Array(4)]?.map((a)=>{

    return <tr>
    <td>
    <select className="form-input" style={{backgroundColor:'#F5F8FA',color:'#A1A5B7'}}>
      <option selected>Active</option>
    </select> 
    </td>
    <td style={{color:'#7E8299',fontSize:14}}>auysh boys </td>
    <td style={{color:'#7E8299',fontSize:14}}>@devil432</td>
    <td style={{color:'#7E8299',fontSize:14}}>9868999004</td>
    <td style={{color:'#7E8299',fontSize:14}}>48564332116</td>
    <td style={{color:'#7E8299',fontSize:14}}>devilboy452</td>
    <td style={{color:'#7E8299',fontSize:14}}>Cash</td>
    <td style={{color:'#7E8299',fontSize:14}}>₹10</td>

    
    
  </tr>
  })}
  
 
  </table>
</div>
    </>
  )
}

export default Room_Tab2