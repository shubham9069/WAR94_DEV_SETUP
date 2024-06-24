import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider';
import axios from '../../axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';


const User = ({Status_Active_InActive,type}) => {
    const navigate = useNavigate()
    const {state ,userToken,dispatch} = useContext(AuthContext)
    const {TournamnetData} = state
    const [TorunamentArr,setTournamentArr] = useState([])
    const location = useLocation();
    
    useEffect(()=>{

      var arr = TournamnetData?.filter((a)=>{

        return a[type] == Status_Active_InActive
      })
      setTournamentArr(arr)

    },[Status_Active_InActive,type,state])

     // delete Tounament 

     const deleteTournament = async(Id)=>{
  
        try{
          const response = await toast.promise(axios({
            method: "get",
            url: `/delete_tournament?tournament_id=${Id}`,
            headers:{
            'Authorization': `Bearer ${userToken} `,
              'Content-Type': 'multipart/form-data'
            },
          }),
          {
            pending: 'waiting',
            success: {render({data}){
           const newdata = data?.data
           
           dispatch({type:"delete",Id,idname:"tournament_id",name:"TournamnetData"})
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
            <Link to="/AddTournament" className='themeButton link-a' style={{backgroundColor:' #47BE7D',border:'1px solid #47BE7D'}}>Add Tournament</Link>
        </div>

        { TorunamentArr?.length ? TorunamentArr?.map((item)=>{

            return <div className="userList">
        <img src={item?.tournament_image} style={{width:150,height:120,borderRadius:12,objectFit:'cover',alignSelf:'center'}}></img>

        <div style={{flex:1}}>
            <h6  style={{marginBottom:0,fontWeight:600,color:'#3F4254'}}>{item?.game_name}</h6>
            <p className="span-text-dark" style={{marginBottom:8,color:'#5E6278'}}>{item?.name}</p>
            <p className="span-text-light" style={{fontSize:12,}}>{JSON.parse(item?.country_name).toString()} 
            <span className= {`span-box-${item.status==0 ? 'red':'green'}`} style={{marginRight:10}}>{item.status==0 ? "InActive":"Active"}</span>
           
            </p>
            
            <div  className="tournament-type" >
            
            <div>
                <h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>{item?.tournament_type}</h5>
                <p className="span-text-light" style={{fontSize:13,marginBottom:0}}>Tournamnet Type </p>
            </div>
            <div>
                <h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>{item?.start_time}</h5>
                <p className="span-text-light" style={{fontSize:13,marginBottom:0}}>Tournamnet start Time </p>
            </div>
            <span className='span-box'>{item?.tournament_show==1 ? "Featured Show" : "Daily Show"}</span>
            <span className= {`span-box-${item.tournament_status ? 'green':'yellow'}`}>{item.tournament_status ? "Completed ":"Not Completed"}</span>
            </div>
        </div>

        <div style={{display: 'flex',gridGap:10,height:'fit-content'}}>
            <button className="themeButton" style={{backgroundColor:'#F4F4F4',color:' #A1A5B7',borderColor:'#F4F4F4'}} onClick={()=>deleteTournament(item?.tournament_id)}>Delete</button>
            <button className="themeButton" onClick={()=>navigate('/AddTournament' ,{state:{item}})}>Edit</button>
        </div>

        </div>
        }) : <div>No tournament found !!!!</div>}
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