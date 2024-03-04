import React from 'react'
import { useLocation, useNavigate,useParams } from 'react-router-dom';
import { useContext,useEffect } from 'react'
import { useState } from 'react'
import {AuthContext} from '../../AuthProvider'
import Toast from '../../Toast'
import axios from '../../axios'

const Tournament_details = () => {
    const {userToken} = useContext(AuthContext)
    const location = useLocation()
    
    const tournamentDetails = location?.state
    
    const navigate = useNavigate()
    const [data,setData] = useState([])
    const {id} = useParams()

    const getData= async()=>{

      
        try{
          
          const response = await axios({
            method: "get",
            url: `/get_rooms?tournament_id=${id}`,
            headers:{
            'Authorization': `Bearer ${userToken} `,
            
            },
          })
         
            
          if(response.status===200){
            const newdata = response.data;
            setData(newdata?.rooms)
              
            
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
         <div className="event-top padding15rem">
    <span className='span-text-light'>Home </span>
    <span className='span-text-light'> / </span>
    <span className='span-text-dark'> {location?.pathname?.split('/')[1]}</span>

    </div>   
    <div className="User padding15rem">
        <div className="user-search">
            <select >
                <option selected hidden >Games</option>
                <option >Games</option>
                <option >Games</option>
            </select>
            <select >
                <option selected hidden >Tournament Type</option>
                <option >Games</option>
                <option >Games</option>
            </select>
            <select >
                <option selected hidden >Match Type</option>
                <option >Games</option>
                <option >Games</option>
            </select>
            <input type='text' placeholder='search'></input>
            <button className='themeButton'>Search</button>
            {/* <Link to="/AddTournament" className='themeButton link-a' style={{backgroundColor:' #47BE7D',border:'1px solid #47BE7D'}}>Add Tournament</Link> */}
        </div>

        {data?.map((room,i)=>{

            return<>
            <div key={room?.id} style={{background:'white',margin:'1.5rem 0 ',borderRadius:12}}  >
             <div className="userList" style={{margin:0,borderRadius:0}}>
             <img src={tournamentDetails?.tournament_image} style={{width:150,height:120,borderRadius:6,objectFit:'cover',alignSelf:'center'}}></img>


        <div style={{flex:1}}>
            <h6  style={{marginBottom:26,fontWeight:600,color:'#3F4254'}}>Room No {i+1} 
            <span className="span-box" style={{marginLeft:10}}>{tournamentDetails?.tournament_show ==1 ? "Feature" : "Daily"}</span>
            {room?.status==0 && (<span className="span-box-yellow" style={{marginLeft:10}}>upcoming</span>)}

             {room?.status==1 && (<span className="span-box-green" style={{marginLeft:10}}>Ongoing</span>)}
              {room?.status==2 && (<span className="span-box-green" style={{marginLeft:10}}>Finished</span>)}
              {room?.status==3 && (<span className="span-box-red" style={{marginLeft:10}}>cancelled</span>)}
              
            {room?.youtube_link && (<a href={room?.youtube_link} target="_blank" className="span-box" style={{marginLeft:10,background:'#EEE5FF',color:"#8950FC",display: 'inline-flex',textDecoration:'none'}}>{room?.youtube_link}</a>)}
            </h6>
           
            <p className="span-text-light" style={{fontSize:12,}}>Tounament Name - <strong>{tournamentDetails?.name}</strong> &nbsp; Tounament Type - <strong>{tournamentDetails?.tournament_type}</strong> &nbsp;<strong>{tournamentDetails?.date} {tournamentDetails?.start_time}</strong> </p>
            <div  className="tournament-type" >
            
            <div>
                <h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>{room?.room_id || "N/A"}</h5>
                <p className="span-text-light" style={{fontSize:13,marginBottom:0}}>Room ID  </p>
            </div>
            <div>
                <h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>{room?.pin || "N/A"}</h5>
                <p className="span-text-light" style={{fontSize:13,marginBottom:0}}>Password</p>
            </div>
           
           
            </div>
        </div>

        <div className="d-flex flex-column justify-content-between" >
<div style={{display: 'flex',gridGap:10,height:'fit-content',justifyContent :'flex-end'}}>
<button className="themeButton" style={{backgroundColor:'#F4F4F4',color:' #A1A5B7',borderColor:'#F4F4F4'}}>Delete </button>
<button className="themeButton" onClick={()=>navigate('/Rooms_Details/'+room?.id, {state:tournamentDetails})}>Edit</button>

</div>
<div>
<p className='span-text-light'>People Joined <span className='span-text-dark float-end' >{room?.users_count}</span></p>
<div className='progressbar'>
  <div style={{width:room?.users_count*2}}/>
</div>
</div>
</div>
        </div>
     {
      room?.status==2 ? 
      <div className="center-div" style={{border: '1px solid #EFF2F5',padding: '1rem',gridGap:20}}>
        {Object.keys(JSON.parse(room?.rank))?.map((a,i)=>{

            return  <div className='d-flex justify-content-between'>
              <span className="center-div" style={{background:"#47BE7D",color:"white",fontSize:11,borderRadius:10,height:30,width:30}}>#{i+1}</span>
              <img src="images/rankimage.png" style={{width:25,height:25}}></img>
              <div>
              <p style={{fontSize:11,marginBottom:0}}>亗 ɪ ᴛ ᴀ ɴ  亗</p>
              <p style={{marginBottom:0,fontSize:11,lineHeight:"15px"}} className='span-text-dark'>55525456659832</p>
              <p style={{marginBottom:0,fontSize:9}} className='span-text-dark'>Won ₹ 2,780</p>
              </div>
             
            </div>

            })}
       
        </div>
      :  <div className="center-div" style={{border: '1px solid #EFF2F5',padding: '1rem',gridGap:20}}>
        <span className="span-text-dark" style={{fontWeight: 500}}>Per Kill &nbsp;-&nbsp;<span className="span-text-light" style={{color:'#7E8299',}}>₹{tournamentDetails?.price_per_kill}</span></span>
        {JSON.parse(tournamentDetails?.ranks)?.map((a,i)=>{

            return  <span className="span-text-dark" style={{fontWeight: 500}}>Rank {i+1} &nbsp;-&nbsp;<span className="span-text-light" style={{color:'#7E8299',}}>₹{a?.price}</span></span>

            })}
       
        </div>
     }
        </div>
        </>
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

export default Tournament_details