import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider';
import axios from '../../axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import Toast from '../../Toast';


const User = () => {
    const navigate = useNavigate()
    const {userToken} = useContext(AuthContext)
  const [data,setData] = useState([])
    const location = useLocation();
    const {game_id} = useParams()
    const getData= async()=>{

      
      try{
        
        const response = await axios({
          method: "get",
          url: `/get_tournaments_by_game?game_id=${game_id}`,
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
    },[game_id])

  return (
    <>
      <div className="event-top padding15rem">
    <span className='span-text-light'>Home </span>
    <span className='span-text-light'> / </span>
    <span className='span-text-dark'> {location?.pathname?.split('/')[1]}</span>

    </div>   
    <div className="User padding15rem">
        <div className="user-search">
            <select >
                <option selected hidden >Games</option>
                <option >Games</option>:
                <option >Games</option>
            </select>
            <select >
                <option selected hidden >Tournament Type</option>
                <option >Games</option>
                <option >Games</option>
            </select>
            <input type='text' placeholder='search'></input>
            <button className='themeButton'>Search</button>

        </div>

        {data?.map((item)=>{

            return <div className="userList">
            <img src={item?.tournament_image} style={{width:150,height:120,borderRadius:12,objectFit:'cover',alignSelf:'center'}}></img>

        <div style={{flex:1}}>
            {/* <h5  style={{marginBottom:0,fontWeight:600,color:'#3F4254'}}>{item?.game_name}</h5> */}
            <h5  style={{marginBottom:8,color:'#3F4254',fontWeight:900}}>{item?.name} {item?.tournament_type} {item?.start_time}</h5>
            <span className='span-box'>{item?.tournament_show==1 ? "Featured Show" : "Daily Show"}</span>
            <div  className="tournament-type" >
            
            <div>
                <p className="span-text-light" style={{fontSize:11,marginBottom:0}}>Tournamnet Type : <span style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>{item?.tournament_type}</span> </p>
               
            </div>
            <div>
                <p className="span-text-light" style={{fontSize:11,marginBottom:0}}>Tournamnet start Time :  <span style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>{item?.start_time}</span> </p>
               
            </div>


            </div>
        </div>

        <div style={{display: 'flex',gridGap:10,height:'fit-content'}}>

            <button className="themeButton" onClick={()=>navigate('/Tournament-details/' + item?.id , {state:item} )}>view Room</button>
        </div>

        </div>
        })}
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

export default User