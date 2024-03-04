import React, { useState } from 'react'
import axios from '../../../axios'
import Toast from '../../../Toast'
import { AuthContext } from '../../../AuthProvider'
import { useContext } from 'react'
import { useEffect } from 'react'


const Tab8 = ({single_user}) => {
  const {userToken} = useContext(AuthContext)
    const [tab,setTab] = useState(1)
    const [data,setData] =useState([])

    
    const getData= async()=>{

      
      try{
        
        const response = await axios({
          method: "get",
          url: `/get_game_account?user_id=${single_user?.id}`,
          headers:{
          'Authorization': `Bearer ${userToken} `,
          
          },
        })
       
          
        if(response.status===200){
          const newdata = response.data;
          setData(newdata?.game_accounts)
            
          
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
    <div className="tab7 padding15rem">
    
    <div className='between-div' style={{borderBottom:'1px solid #EFF2F5'}}>
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>Joining Match</h5>
<div className='d-flex' style={{gridGap:15}}>
<span className='span-text-light'>Last  update - 1-10-2022 12:42 PM</span>
    <span className={tab==1 ?"span-text-dark" : 'span-text-light'} style={{paddingBottom:'1rem', borderBottom:tab==1 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(1)}>Game Character </span>
    <span className={tab==2 ?"span-text-dark" : 'span-text-light'}  style={{paddingBottom:'1rem', borderBottom:tab==2 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(2)}>History</span>
    
</div>
</div>
<div className="matchlist-table">
<table style={{width:'100%'}} >
  <tr>
    
    <th>Game name</th>
    <th>Character Id </th>
    <th>game Name </th>
    <th>update  </th>
    

  
    
  </tr>
  {data?.map((a)=>{

    return <tr>
    <td style={{color:'#7E8299',fontSize:14}}>{a?.game_id}</td>

    {/* type 1 = add 2= join tournament 0= withdraw money */}
    <td><span className="span-box">{a?.character_id}</span></td>

    {/* 1 = Paytm wallet 2 =Amazon pay 3= UPI 4= bank details */}
    <td style={{color:'#7E8299',fontSize:14}}>{a?.ign}</td> 
    <td style={{color:'#7E8299',fontSize:14}}>{new Date(a?.updated_at).toDateString() } &emsp;{new Date(a?.updated_at).toLocaleTimeString()}</td> 

 

    
    
  </tr>
  })}
  
 
  </table>
</div>


    </div>

    </>
  )
}

export default Tab8