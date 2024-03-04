import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData, useLocation } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import axios from '../axios';
import Toast from '../Toast';
import { AuthContext } from '../AuthProvider';
import { toast } from 'react-toastify';




const Event = ({Status_Active_InActive}) => {
  const {userToken,state,dispatch} = useContext(AuthContext)
  const location = useLocation()
  const {AllEvents} = state
  const [EventArr,setEventArr] = useState([])
  const [eventData,setEventData] = useState({name:"",target:"",status:1,banner:"", event_detail:"",event_button_name:""});
  const {name,target,status,banner,event_detail,event_button_name} = eventData
    const [newEvent,setNewEvent] = useState(false)
    
    const [isLoadiing,setisLoading] = useState(true)
  const [editEventid,setEditEventid] = useState("")
  
  useEffect(()=>{
    var arr = AllEvents?.filter(a=>a?.status==Status_Active_InActive)

    setEventArr(arr)

  },[Status_Active_InActive,state])
    const fileupload = (e)=>{
     
      var file_input = document.getElementById('uploadefile-event')
      
      file_input.click();
    }

    const HandleInput = (e) =>{
      e.preventDefault();
  
      setEventData({...eventData,[e.target.name]:e.target.value}); 
    }

    const eventupload = async(e)=>{
      e.preventDefault()
  
  
      var formData = new FormData();
     
      formData.append("name",name)
      formData.append("target",target)
      formData.append("status",status)
      formData.append("image",banner)
      formData.append("event_detail",event_detail)
      formData.append("event_button_name",event_button_name)
      
  
        try{
          const response = await toast.promise(axios({
            method: "post",
            url: `/add_event`,
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
           setNewEvent(false)
           var obj={
            ...eventData,
            event_id:newdata?.event_id,
            banner: `https://shopninja.in/anurag/war94/public/storage/events/${newdata?.image}`
           }
               dispatch({type:"Add",data:obj,name:"AllEvents"})
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
    
    const eventDelete = async(Id)=>{
  
      try{
        const response = await toast.promise(axios({
          method: "get",
          url: `/delete_event?event_id=${Id}`,
          headers:{
          'Authorization': `Bearer ${userToken} `,
            'Content-Type': 'multipart/form-data'
          },
        }),
        {
          pending: 'waiting',
          success: {render({data}){
         const newdata = data?.data
         
         dispatch({type:"delete",Id,idname:"event_id",name:"AllEvents"})
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

  // edit game details 

  const gameEdit = async()=>{

    var formData = new FormData();
    
    formData.append("name",name)
    formData.append("target",target)
    formData.append("status",status)
    if(banner['type']!=undefined){
      formData.append("image",banner)
      
    }
   
    formData.append("event_detail",event_detail)
    formData.append("event_button_name",event_button_name)
    formData.append("event_id",editEventid)

      try{
        const response = await toast.promise(axios({
          method: "post",
          url: `/update_event`,
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
         setNewEvent(false)
            var data = AllEvents?.map((element)=>{

              return element?.event_id == editEventid ? {
                ...element,
                name,
                status,
                event_detail,
                target,
                event_button_name,
                banner:`https://shopninja.in/anurag/war94/public/storage/events/${newdata?.image}`
               
              }:element
            })
          dispatch({type:"initialData",data:data,name:"AllEvents"})
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
  // edit game details 

  const gameEditStatus = async(status,editEventid)=>{

    var formData = new FormData();
    
    formData.append("status",status)
    
    formData.append("event_id",editEventid)

      try{
        const response = await toast.promise(axios({
          method: "post",
          url: `/update_event`,
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

            var data = AllEvents?.map((element)=>{

              return element?.event_id == editEventid ? {
                ...element,
                status
               
              }:element
            })
            dispatch({type:"initialData",data:data,name:"AllEvents"})
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

  


const data = (event)=>{


if(event){
  
  var obj={
    name:event.name,
    status:event.status,
    event_detail:event?.event_detail,
    target:event?.target,
    event_button_name:event.event_button_name,
    banner:event.banner
   
  }
setEventData({...eventData,...obj})
setEditEventid(event?.event_id)

}else{
  var obj={
    name:"",
    status:0,
    event_detail:"",
    target:"",
    event_button_name:"",
    banner:""
  }
  setEventData({...obj})
  setEditEventid(event?.event_id)
}
setNewEvent(true)

}

  return (
    <>
    <div className="event-top padding15rem">
    <span className='span-text-light'>Home </span>
    <span className='span-text-light'> / </span>
    <span className='span-text-dark'> {location?.pathname?.split('/')[1]} </span>

    </div>
    <div className="event-middle padding15rem">
    <div className="between-div" style={{ marginBottom:'1.5rem'}}>
<h4 className='section-heading' >All Events</h4>
<button className='themeButton link-a' onClick={()=>data("")}>

<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M5.17961 1.8761C3.44048 2.10579 2.10579 3.44048 1.8761 5.17961C1.7182 6.37522 1.58398 7.87083 1.58398 9.50065C1.58398 11.1305 1.7182 12.6261 1.8761 13.8217C2.10579 15.5608 3.44048 16.8955 5.17961 17.1252C6.37522 17.2831 7.87083 17.4173 9.50065 17.4173C11.1305 17.4173 12.6261 17.2831 13.8217 17.1252C15.5608 16.8955 16.8955 15.5608 17.1252 13.8217C17.2831 12.6261 17.4173 11.1305 17.4173 9.50065C17.4173 7.87083 17.2831 6.37522 17.1252 5.17961C16.8955 3.44048 15.5608 2.10579 13.8217 1.8761C12.6261 1.7182 11.1305 1.58398 9.50065 1.58398C7.87083 1.58398 6.37522 1.7182 5.17961 1.8761Z" fill="#E8FFF3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.49935 13.4577C9.93657 13.4577 10.291 13.1032 10.291 12.666V10.291H12.666C13.1032 10.291 13.4577 9.93657 13.4577 9.49935C13.4577 9.06212 13.1032 8.70768 12.666 8.70768H10.291V6.33268C10.291 5.89546 9.93657 5.54102 9.49935 5.54102C9.06212 5.54102 8.70768 5.89546 8.70768 6.33268V8.70768H6.33268C5.89546 8.70768 5.54102 9.06212 5.54102 9.49935C5.54102 9.93657 5.89546 10.291 6.33268 10.291H8.70768V12.666C8.70768 13.1032 9.06212 13.4577 9.49935 13.4577Z" fill="#E8FFF3"/>
</svg>

New Event</button>
</div>
    <div className='event-container' >

        {EventArr?.map((event)=>{

            return <div className='event-box padding15rem'>
            <input  type="checkbox" checked={event?.status} className='event-toggle' onChange={(e)=>e.target.checked ? gameEditStatus(1,event?.event_id): gameEditStatus(0,event?.event_id)}></input>
         <div className='event-img-div'>   
        <img src={event?.banner} style={{objectFit:'contain'}}></img>
        

        </div>
        <div>
        <span className='span-text-dark' style={{fontSize:14,flex: 1}}>{event?.name}</span>
        
            <div className='event-icon' style={{backgroundColor:'#F3F6F9'}} onClick={()=>data(event)}>
            
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1378 2.98564C14.7152 3.56304 14.7247 4.49625 14.1591 5.08524L8.74224 10.7263C8.46695 11.013 8.08913 11.1787 7.69176 11.1871L5.41644 11.2348L5.46449 8.94424C5.47264 8.5559 5.63111 8.18587 5.90655 7.91201L11.4436 2.40661C12.0298 1.82369 12.9773 1.82505 13.5619 2.40965L14.1378 2.98564Z" fill="#3699FF"/>
<path opacity="0.3" d="M8.5987 1.33398C8.96689 1.33398 9.26536 1.63246 9.26536 2.00065C9.26536 2.36884 8.96689 2.66732 8.5987 2.66732H3.9987C3.26232 2.66732 2.66536 3.26427 2.66536 4.00065V12.0007C2.66536 12.737 3.26232 13.334 3.9987 13.334H11.9987C12.7351 13.334 13.332 12.737 13.332 12.0007V8.66732C13.332 8.29913 13.6305 8.00065 13.9987 8.00065C14.3669 8.00065 14.6654 8.29913 14.6654 8.66732V12.0007C14.6654 13.4734 13.4715 14.6673 11.9987 14.6673H3.9987C2.52594 14.6673 1.33203 13.4734 1.33203 12.0007V4.00065C1.33203 2.52789 2.52594 1.33398 3.9987 1.33398H8.5987Z" fill="#3699FF"/>
</svg>

            </div>
            <div className='event-icon' style={{backgroundColor:' #FFF5F8',cursor:'pointer'}} onClick={()=>eventDelete(event?.event_id)}>
            
            
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 6V15C4.5 15.8284 5.17157 16.5 6 16.5H12C12.8284 16.5 13.5 15.8284 13.5 15V6H4.5Z" fill="#F1416C"/>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M10.5 3.375V3.25C10.5 2.69772 10.0523 2.25 9.5 2.25H8.5C7.94772 2.25 7.5 2.69772 7.5 3.25V3.375H4.25C3.97386 3.375 3.75 3.59886 3.75 3.875V4C3.75 4.27614 3.97386 4.5 4.25 4.5H13.75C14.0261 4.5 14.25 4.27614 14.25 4V3.875C14.25 3.59886 14.0261 3.375 13.75 3.375H10.5Z" fill="#F1416C"/>
</svg>


            </div>
        

        </div>
        </div>
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


    <Modal show={newEvent} onHide={()=>setNewEvent(false)} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Event Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="padding15rem">
                <div className="inputwrapper">
                <p className='span-text-dark' >Event Name</p>
                <input type="text" className="form-input" placeholder='Event Name' value={name} name="name" onChange={HandleInput} ></input>
                </div>
                <div className="inputwrapper">
                <p className='span-text-dark' >Url</p>
                <input className="form-input" placeholder='Event url' value={target} name="target" onChange={HandleInput}></input>
                </div>
                <div className="inputwrapper">
                <p className='span-text-dark' >Event Button Name</p>
                <input className="form-input" placeholder='Event Button Name' value={event_button_name} name="event_button_name" onChange={HandleInput}></input>
                </div>
                <div className="inputwrapper" style={{alignItems: 'flex-start'}}>
                <p className='span-text-dark' >Event Description</p>
                <textarea className="text-area" placeholder='Event desc ' value={event_detail} name="event_detail" onChange={HandleInput}></textarea>
                </div>
                <div className="inputwrapper" >
                <p className='span-text-dark' >Show Banner</p>
                <span className='span-text-light d-flex align-items-center' style={{flex: 2}}>
                <input  type="checkbox" checked={status} className='event-toggle' style={{position:'relative',top:0,left:0,marginRight:8}} onChange={(e)=>setEventData({...eventData,["status"]:e.target.checked? 1:0})}></input>Active</span>
                
                </div>
                <div className="inputwrapper" style={{alignItems: 'flex-start'}}>
                <p className='span-text-dark' >Image upload</p>
                <div className="upload-file ">
                {banner ? 
                <div className="d-flex align-items-center " style={{flexDirection:'row',gridGap:20,padding:'1.5rem 2rem '}}>
                
<svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>setEventData({...eventData,["banner"]:""})}>
<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M3.55349 9.81276C3.98869 6.51756 6.51757 3.98869 9.81276 3.55349C12.0781 3.2543 14.9119 3 18 3C21.0881 3 23.9219 3.2543 26.1872 3.55349C29.4824 3.98869 32.0113 6.51757 32.4465 9.81276C32.7457 12.0781 33 14.9119 33 18C33 21.0881 32.7457 23.9219 32.4465 26.1872C32.0113 29.4824 29.4824 32.0113 26.1872 32.4465C23.9219 32.7457 21.0881 33 18 33C14.9119 33 12.0781 32.7457 9.81276 32.4465C6.51756 32.0113 3.98869 29.4824 3.55349 26.1872C3.2543 23.9219 3 21.0881 3 18C3 14.9119 3.2543 12.0781 3.55349 9.81276Z" fill="#B5B5C3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4393 12.4393C13.0251 11.8536 13.9749 11.8536 14.5607 12.4393L18 15.8787L21.4393 12.4393C22.0251 11.8536 22.9749 11.8536 23.5607 12.4393C24.1464 13.0251 24.1464 13.9749 23.5607 14.5607L20.1213 18L23.5607 21.4393C24.1464 22.0251 24.1464 22.9749 23.5607 23.5607C22.9749 24.1464 22.0251 24.1464 21.4393 23.5607L18 20.1213L14.5607 23.5607C13.9749 24.1464 13.0251 24.1464 12.4393 23.5607C11.8536 22.9749 11.8536 22.0251 12.4393 21.4393L15.8787 18L12.4393 14.5607C11.8536 13.9749 11.8536 13.0251 12.4393 12.4393Z" fill="#B5B5C3"/>
</svg>

                <img src={typeof banner == 'string' ? banner : URL.createObjectURL(banner)} style={{width:70, height:70,borderRadius:6}}></img>
                  <div>
<p className='span-text-light'>{banner?.name} </p>
<span className='span-text-dark float-end' style={{marginTop:5}}>100%</span>
<div className='progressbar'>
  <div style={{width:200}}/>
</div>
</div>
</div>
:
                <div className="center-div" onClick={fileupload}>
                    <input type='file' hidden id="uploadefile-event" onChange={(e)=>setEventData({...eventData,["banner"]:e.target.files[0]})}></input>
<svg width="65" height="65" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginBottom:25}}>
<path opacity="0.25" d="M9.875 13.166C9.875 7.7122 14.2962 3.29102 19.75 3.29102H51.868C54.487 3.29102 56.9987 4.33141 58.8507 6.18334L66.2327 13.5654C68.0846 15.4173 69.125 17.929 69.125 20.548V65.8327C69.125 71.2865 64.7038 75.7077 59.25 75.7077H19.75C14.2962 75.7077 9.875 71.2865 9.875 65.8327V13.166Z" fill="#00A3FF"/>
<path d="M49.375 6.22654C49.375 4.6053 50.6893 3.29102 52.3105 3.29102C54.6462 3.29102 56.8862 4.21885 58.5377 5.8704L66.5456 13.8783C68.1972 15.5299 69.125 17.7698 69.125 20.1055C69.125 21.7267 67.8107 23.041 66.1895 23.041H52.6667C50.8487 23.041 49.375 21.5673 49.375 19.7493V6.22654Z" fill="#00A3FF"/>
<path d="M38.2387 29.8748C37.8505 30.0354 37.4867 30.2735 37.1711 30.5891L27.2961 40.4641C26.0107 41.7496 26.0107 43.8338 27.2961 45.1192C28.5816 46.4047 30.6658 46.4047 31.9513 45.1192L36.207 40.8635V55.9583C36.207 57.7763 37.6808 59.25 39.4987 59.25C41.3166 59.25 42.7904 57.7763 42.7904 55.9583V40.8635L47.0461 45.1192C48.3316 46.4047 50.4158 46.4047 51.7013 45.1192C52.9867 43.8338 52.9867 41.7496 51.7013 40.4641L41.8263 30.5891C40.8564 29.6192 39.4318 29.3811 38.2387 29.8748Z" fill="#00A3FF"/>
</svg>

<p className="span-text-dark" style={{marginBottom:0}}> Quick File Uploader</p>
<p className="span-text-light" style={{marginBottom:0}}> Drag & Drop or choose files from computer</p>
<p ></p>

                </div>
                }
                </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
         
          <button className='themeButton' onClick={editEventid ? gameEdit: eventupload}>
            {editEventid ?  "Edit Event ":"Add Event"}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Event