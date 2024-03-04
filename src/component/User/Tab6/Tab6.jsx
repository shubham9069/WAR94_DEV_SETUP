import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../AuthProvider'
import axios from '../../../axios'
import Toast from '../../../Toast'


const Tab6 = ({single_user}) => {
  const {userToken} = useContext(AuthContext)
    const [tab,setTab] = useState(1)
    const [data,setData] =useState([])

    
    const getData= async()=>{

      
      try{
        
        const response = await axios({
          method: "get",
          url: `/get_user_active_tournament?user_id=${single_user?.id}`,
          headers:{
          'Authorization': `Bearer ${userToken} `,
          
          },
        })
       
          
        if(response.status===200){
          const newdata = response.data;
          setData(newdata?.tournaments)
            
          
        }
      } catch (err) {
        const error = err.response.data
        Toast(error.message);
        
      }  
    }
    useEffect(()=>{
      getData()
    },[])
  return (
   <>
    <div className="tab6 padding15rem">

    <div className='between-div' style={{borderBottom:'1px solid #EFF2F5'}}>
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>Joining Tournamnent</h5>
<div className='d-flex' style={{gridGap:15}}>
    <span className={tab==1 ?"span-text-dark" : 'span-text-light'} style={{paddingBottom:'1rem', borderBottom:tab==1 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(1)}>Joining Match </span>
    <span className={tab==2 ?"span-text-dark" : 'span-text-light'}  style={{paddingBottom:'1rem', borderBottom:tab==2 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(2)}>Upcoming</span>
    
</div>
</div>
<div className="matchlist-table">
<table style={{width:'100%'}} >
  <tr>

    <th>status</th>
    <th>Entry Fees</th>
    <th>Room</th>
    <th>Tournament</th>
    <th>Game UserName</th>
    <th>Game Character</th>
    <th>Payment</th>
    <th>Per Kill</th>
    <th>Group Tag </th>
  
    
  </tr>
  {data?.map((a)=>{

    return <tr>
  
  <td><span className="span-box-yellow" >Running</span></td>
  <td><span className="span-box" >{a?.tournament?.entry_type==1 ? "Free" : `${a?.entry_fees} / Paid`}</span></td>
  <td style={{color:'#00A3FF',fontSize:14}}>{a?.room_id}</td>
  <td style={{color:'#7E8299',fontSize:14}}>{a?.tournament?.name} </td>
  <td style={{color:'#7E8299',fontSize:14}}>5555567898</td>
  <td style={{color:'#7E8299',fontSize:14}}>IMSK </td>
  <td style={{color:'#7E8299',fontSize:14}}>Cash</td>
  <td style={{color:'#7E8299',fontSize:14}}>₹10</td>
  <td style={{color:'#7E8299',fontSize:14}}>Grp-aab-4521</td>
  
  
</tr>
  })}
  
 
  </table>
</div>


    </div>
   </>
  )
}

export default Tab6