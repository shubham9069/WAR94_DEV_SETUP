import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../AuthProvider'
import axios from '../../axios'
import { toast } from 'react-toastify';
import { useEffect } from 'react'

const Room_Tab1 = ({roomDetails,tournamentDetails,setData}) => {
  console.log(roomDetails)
  const {userToken} = useContext(AuthContext)
  const [room_id,setRoom_id] = useState("")
  const [roomPin,setRoomPin] = useState("")
  const [roomSelect,setRoomSelect] = useState()
  const [youtubeUrl,setYouTubeUrl] = useState("")
  const [Match_cancel_reason,setMatch_cancel_reason] = useState("")
  const [Report_closing_time,setReport_closing_time] = useState("")
  const [winnerRank,setWinnerRank] = useState({})

useEffect(()=>{
  setRoomSelect(roomDetails?.status)
  var obj = {}
  var arr = JSON.parse(tournamentDetails?.ranks)?.forEach((a)=>{
    obj[`rank${a?.rank}`]=""
  })

  setWinnerRank(obj)
},[roomDetails])

  async function updateRoom (){

   let roomid = room_id || roomDetails?.room_id
   let roompassword = roomPin || roomDetails?.pin

    var formData = new FormData();
    formData.append("id",roomDetails?.id)
    if(roomSelect==1){
      formData.append("room_id",roomid)
      formData.append("pin",roompassword)
      formData.append("youtube_link",youtubeUrl)
      formData.append("status",1)
    }
    if(roomSelect==2){
      formData.append("report_closing_time",Report_closing_time)
      formData.append("rank",JSON?.stringify(winnerRank))
      formData.append("status",2)
  
    }
    if(roomSelect==3){
      formData.append("cancel_reason",Match_cancel_reason)
      formData.append("status",3)
  
    }
   
      try{
        const response = await toast.promise(axios({
          method: "post",
          url: `/update_room_detail`,
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
         if(roomSelect==1){
          setData({...roomDetails,room_id:roomid,pin:roompassword,youtube_link:youtubeUrl,status:1})
          
         }
         if(roomSelect==2){
          setData({...roomDetails,report_closing_time:Report_closing_time,status:2,rank:JSON?.stringify(winnerRank)})
         }
         if(roomSelect==3){
          setData({...roomDetails,cancel_reason:Match_cancel_reason,status:3})
         }
       

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
       <div className="inputwrapper">
                <p className='span-text-dark' >Room Status</p>
               <select className='form-input' onChange={(e)=>setRoomSelect(e.target.value)}>
                <option selected={roomDetails?.status==0} value={0}>Upcoming</option>
                <option selected={roomDetails?.status==1} value={1}>Room Started</option>
                <option selected={roomDetails?.status==2} value={2}>Completed </option>
                <option selected={roomDetails?.status==3} value={3}>cancelled</option>
               </select> 
        </div>
       <div className="inputwrapper">
                <p className='span-text-dark' >Tournamnet  </p>
                <p style={{color:'#00A3FF',fontWeight:400}} >{tournamentDetails?.game_name} {tournamentDetails?.tournament_type} {tournamentDetails?.start_time}  </p>
        </div>
       <div className="inputwrapper">
                <p className='span-text-dark' >Match Type</p>
                <p style={{color:'#5E6278',fontWeight:400}} >{tournamentDetails?.camera_type==1?"FPP":"TPP"}</p>
        </div>

        {tournamentDetails?.allow_cance==1 && ( <div className="inputwrapper">
                <p className='span-text-dark' >Auto Cancel</p>
                <p style={{color:'#5E6278',fontWeight:400}} >{tournamentDetails?.allow_cancel ? "Yes":"No"} {tournamentDetails?.min_one_room} Players <br/>
                <p style={{flex:2,color:'#D9214E',fontSize:'11px',fontWeight:600,letterSpacing:1.2}} >Room will auto cancel if minimum player not joined</p></p>
               
        </div>)}
      

       <div className="inputwrapper">
                <p className='span-text-dark' >Room Updated date</p>
                <p style={{color:'#5E6278',fontWeight:400}} >{new Date(roomDetails?.created_at).toDateString() } &emsp;{new Date(roomDetails?.created_at).toLocaleTimeString()}</p>
        </div>

       {roomDetails?.room_id && (<div className="inputwrapper">
                <p className='span-text-dark' >Room ID</p>
                <p style={{color:'#5E6278',fontWeight:400}} >{roomDetails?.room_id}</p>
        </div>)}
       {roomDetails?.pin && (<div className="inputwrapper">
                <p className='span-text-dark' >Room Pin</p>
                <p style={{color:'#5E6278',fontWeight:400}} >{roomDetails?.pin}</p>
        </div>)}
       {roomDetails?.youtube_link && (<div className="inputwrapper">
                <p className='span-text-dark' >Youtube Url </p>
                <p style={{color:'#5014D0',fontWeight:400}} >{roomDetails?.youtube_link}</p>
        </div>)}
      
        
        {
          roomSelect == 1 && ( <div className="upload-file " style={{width:'100%',margin:'1.5rem 0'}}>
                <div style={{width:'100%' ,maxWidth:700}}>
                <div className="inputwrapper">
      <p className='span-text-dark' >Room ID</p>
      <input type="Number" className="form-input" placeholder='Room Id' defaultValue={roomDetails?.room_id} onChange={(e)=>setRoom_id(e.target.value)}></input>
      </div>
      <div className="inputwrapper">
      <p className='span-text-dark' >Password</p>
      <input type="text" className="form-input" placeholder='Password' defaultValue={roomDetails?.pin} onChange={(e)=>setRoomPin(e.target.value)}></input>
      </div>
      <div className="inputwrapper">
      <p className='span-text-dark' style={{alignSelf:'flex-start'}} >Youtube Live Embed URL (optional)</p>
      <textarea style={{background:"white"}} rows={4} type="" className="form-input" placeholder='Enter Url' defaultValue={roomDetails?.youtube_link} onChange={(e)=>setYouTubeUrl(e.target.value)}></textarea>
      </div>
      </div>
                </div>)}

          {  roomSelect == 2 && ( <div className="upload-file " style={{width:'100%',margin:'1.5rem 0'}}>
                <div style={{width:'100%' ,maxWidth:700}}>
                <div className="inputwrapper">
      <p className='span-text-dark' >Button Report Closing time </p>
      <input type="Number" className="form-input" placeholder='Button Report Closing time' defaultValue={roomDetails?.report_closing_time} onChange={(e)=>setReport_closing_time(e.target.value)}></input>
      </div>

      <div>
      <p className='span-text-dark' >Select Ranked Users:- </p>
      <div style={{display:'flex',gridGap:30}}>
      {JSON.parse(tournamentDetails?.ranks)?.map((a,i)=>{

        return  <div>
        <p className='span-text-dark' >Rank {a?.rank}</p>
        <select className='form-input' style={{width:150}} onClick={(e)=>setWinnerRank({...winnerRank,[`rank${a?.rank}`]:e.target.value})}>
          <option selected hidden >Select user</option>
        
        {roomDetails?.users?.map((a)=>{
          return <option value={a?.user_id}>{a?.user?.name}</option>
        })}

        </select>
        </div>
      })}
       
      </div>
      </div>
      
      </div>
                </div>)     
                
        }
          {  roomSelect == 3 && ( <div className="upload-file " style={{width:'100%',margin:'1.5rem 0'}}>
                <div style={{width:'100%' ,maxWidth:700}}>
                <div className="inputwrapper">
      <p className='span-text-dark' style={{alignSelf:'flex-start'}} >Match Cancel Reason</p>
      <textarea style={{background:"white",color:"#F1416C"}} rows={4} type="" className="form-input" placeholder='Enter Url' defaultValue={roomDetails?.cancel_reason} onChange={(e)=>setMatch_cancel_reason(e.target.value)}></textarea>
      </div>
      
      </div>
                </div>)     
                
        }
        
               
                
       
       <div className="inputwrapper" style={{justifyContent:'flex-end'}}>
                <p className='span-text-dark' ></p>
                <button className='themeButton'  onClick={updateRoom}>Save</button>
        </div>
       
    </>
  )
}

export default Room_Tab1