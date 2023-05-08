import React from 'react'

const Room_Tab4 = () => {
  return (
    <>
   <div className="matchlist-table">
<table style={{width:'100%'}} >
  <tr>
    <th>Action</th>
    <th>Status</th>
    <th>User Name</th>
    <th>Reported By</th>
    <th>Date</th>
    <th>Reason</th>
    <th>Proof Submitted</th>
   
  
    
  </tr>
  {[...Array(4)]?.map((a)=>{

    return <tr>
    <td>
    <select className="form-input" style={{backgroundColor:'#F5F8FA',color:'#A1A5B7'}}>
      <option selected>Active</option>
    </select> 
    </td>
    <td><p className='span-box-green'>Resolved</p></td>
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

export default Room_Tab4