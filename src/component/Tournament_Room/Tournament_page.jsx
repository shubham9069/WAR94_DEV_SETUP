import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider'
import { useContext } from 'react'
import { useState } from 'react'
import axios from '../../axios'
import Toast from '../../Toast'
import { useEffect } from 'react'


const Tournament_page = ({status}) => {
    const {state ,userToken,dispatch} = useContext(AuthContext)
    const location = useLocation()
    const [data,setData] = useState([])
    
    const getData= async()=>{

      
        try{
          
          const response = await axios({
            method: "get",
            url: `/get_tournament_rooms?status=${status}`,
            headers:{
            'Authorization': `Bearer ${userToken} `,
            
            },
          })
         
            
          if(response.status===200){
            const newdata = response.data;
            setData(newdata?.games)
              
            
          }
        } catch (err) {
          const error = err.response.data
          Toast(error.message);
          
        }  
      }
      useEffect(()=>{
        getData()
      },[status])
  return (
   <>
 <div className="event-top padding15rem">
    <span className='span-text-light'>Home </span>
    <span className='span-text-light'> / </span>
    <span className='span-text-dark'> {location?.pathname?.split('/')[1]} </span>

    </div>

    <div className="event-middle padding15rem">
    <div className="between-div" style={{ marginBottom:'1.5rem'}}>
<h4 className='section-heading' >All tournamnet games </h4>

</div>
    <div className='event-container' >

        {data?.map((a)=>{

            return <Link to={"/Tournament/"+a?.game_id}  key={a?.id} className='event-box padding15rem' style={{textDecoration:'none'}}>
         <div className='event-img-div'>   
        <img src={a?.dashboard_image} style={{objectFit:'contain'}}></img>
        
        </div>
        <div>
        <span className='span-text-dark' style={{fontSize:16,flex: 1}}>{a?.name}</span>
        {/* {a?.tournament_status ? <span className="span-box-green" style={{marginLeft:10}}>completed</span> : <span className="span-box-yellow">not completed</span>} */}
        
    
        </div>
        </Link>
        })}
        
    </div>
    <div className='pagination between-div'>
        <span className='span-text-dark' style={{color:'#5E6278'}}>Showing 1 to 10 of 50 entries</span>
        <div>

        <div className='pagination-icon'>
        <i class="bi bi-chevron-left"></i>
        </div>
        {[...Array(4)]?.map((a,index) =>{

            return  <div className='pagination-icon' style={{backgroundColor:'transparent'}}>
        <span style={{color:'#7E8299',fontSize:12}}>{index+1}</span>
        </div>
        })}
       

        <div className='pagination-icon'>
        <i class="bi bi-chevron-right"></i>
        </div>

        </div>
    </div>
    </div>


   </>
  )
}

export default Tournament_page