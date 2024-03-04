import React from 'react'
import Toast from '../../Toast'
import { useContext } from 'react'
import { AuthContext } from '../../AuthProvider'
import axios from '../../axios'
import { toast } from 'react-toastify';

const Room_Tab4 = ({Roomdata,setData}) => {
const {userToken} = useContext(AuthContext)

  async function ResolveReport (id){
   
    var formData = new FormData();
   
    formData.append("report_id",id)
    formData.append("status",1)
      try{
        const response = await toast.promise(axios({
          method: "post",
          url: `/resolve_tournament_report`,
          data: formData,
          headers:{
          'Authorization': `Bearer ${userToken} `,
            'Content-Type': 'multipart/form-data'
          },
        }),
        {
          pending: 'waiting',
          success: {render({data}){
         const newdata = data?.data

          var reportArr = Roomdata?.reports?.map((elem)=>{

            return elem?.id==id ? {...elem,status:1}:elem
          })

          setData({...Roomdata,reports: reportArr})

            return newdata?.message
          }},
          error: {render({data}){
            
            return data?.response?.data?.message
          }},
        });
  

      } catch (err) {
        console.log(err)
        
      }

  }
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
  {Roomdata?.reports?.map((a)=>{

    return <tr>
    <td>
    <div className="dropdown">
    <button className='themeButton dropdown-toggle' style={{background:"#F5F8FA",color:"#A1A5B7",}} data-bs-toggle="dropdown" aria-expanded="false">Action</button>

    <ul class="dropdown-menu post-dropdown">

<li onClick={()=>ResolveReport(a?.id)} >
<p> Resolve</p> 

<i class="bi bi-check-square-fill" style={{color:'#A1A5B7',fontSize:12,width:15}}></i>
            
    </li>   
</ul>
 </div>
    </td>

    <td>{a?.status? <p className='span-box-green'>Resolved</p> : <p className='span-box-red'>pending</p>}</td>
    <td style={{color:'#7E8299',fontSize:14}}>{a?.reported_user?.username}</td>
    <td style={{color:'#7E8299',fontSize:14}}>{a?.reported_by?.username}</td>
    <td style={{color:'#7E8299',fontSize:14}}>{new Date(a?.created_at).toDateString()} &emsp; {new Date(a?.created_at).toLocaleTimeString()}</td>
    <td style={{color:'#7E8299',fontSize:14}}>{a?.reason}</td>
    <td> <a href={a?.proof} target="_blank" style={{color:'#7E8299',fontSize:14,textDecoration:'none'}}>Video</a></td>


    
    
  </tr>
  })}
  
 
  </table>
</div>




        
    </>
  )
}

export default Room_Tab4