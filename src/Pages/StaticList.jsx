import React from 'react'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import axios from '../axios'
import Toast from '../Toast'
import { useContext } from 'react'
import { useEffect } from 'react'
import JoditEditor from 'jodit-react';
import { useRef } from 'react'
import { toast } from 'react-toastify'



const StaticList = () => {
  const {userToken} = useContext(AuthContext)
  const location = useLocation()
  const [editModal,setEditModal] = useState(false)
  const [staticList,setStaticList] = useState([])
  const [staticData,setStaticData] = useState({name:"",status:1,image:"", content:"",});
  const {name,status,image,content} = staticData
  const [editStaticList,setEdit_Static_list] = useState("")
  const editor = useRef(null);

  const HandleInput = (e) =>{
    e.preventDefault();

    setStaticData({...staticData,[e.target.name]:e.target.value}); 
  }

  const static_list = async()=>{
    try{
      
      const response = await axios({
        method: "get",
        url: "/get_all_pages",
        headers:{
        'Authorization': `Bearer ${userToken} `,
        
        },
      })
     
        
      if(response.status===200){
        const data = response.data;
    setStaticList(data?.pages)
        
        
       }


    } catch (err) {
      const error = err.response.data
      Toast(error.message);
      
    }  
  }
  useEffect(()=>{
    static_list()
  },[])
    


  const fileupload = (e)=>{
     
    var file_input = document.getElementById('uploadefile-event')
    
    file_input.click();
  }

  // upload static list 

  const static_list_upload = async(e)=>{
    e.preventDefault()


    var formData = new FormData();
   
    formData.append("name",name)
    formData.append("status",status)
    formData.append("image",image)
    formData.append("content",content)  

      try{
        const response = await toast.promise(axios({
          method: "post",
          url: `/add_page`,
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
         setEditModal(false)
         static_list()
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
  const static_edit = async(e)=>{
    e.preventDefault()


    var formData = new FormData();
   
    formData.append("name",name)
    formData.append("status",status)
    if(image['type']!=undefined){
      formData.append("image",image)
    }
   
    formData.append("content",content)  
    formData.append("page_id",editStaticList)  

      try{
        const response = await toast.promise(axios({
          method: "post",
          url: `/update_page`,
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
         setEditModal(false)
         static_list()
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

  // delete data 

  const static_delete = async(e)=>{
    e.preventDefault()



      try{
        const response = await toast.promise(axios({
          method: "get",
          url: `delete_page?page_id=${editStaticList}`,
          headers:{
          'Authorization': `Bearer ${userToken} `,
            'Content-Type': 'multipart/form-data'
          },
        }),
        {
          pending: 'waiting',
          success: {render({data}){
         const newdata = data?.data
         setEditModal(false)
         var filterArr =  staticList?.filter(el =>el.id!=editStaticList)
         setStaticList(filterArr)
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

  const editData =(data)=>{
    if(data){
  
      var obj={
        name:data?.name,
        image:data?.page_image,
        status:data?.status,
        content:data.content,
       updated_at : new Date(data?.updated_at).toString().split('G')[0]
      }
      setEdit_Static_list(data?.id)
      setStaticData(obj)
    
    }else{
      var obj={
        name:"",
        status:1,
        content:"",
        image:""
      }
      setEdit_Static_list("")
      setStaticData(obj)
     
    }
    setEditModal(true)
  }

  return (
   <>
    <div className="event-top padding15rem">
    <span className='span-text-light'>Home </span>
    <span className='span-text-light'> / </span>
    <span className='span-text-dark'> {location?.pathname?.split('/')[1]} </span>

    </div>
    <button className='themeButton link-a' style={{margin:'1.5rem 1.5rem 0 auto'}} onClick={()=>editData("")}>

<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M5.17961 1.8761C3.44048 2.10579 2.10579 3.44048 1.8761 5.17961C1.7182 6.37522 1.58398 7.87083 1.58398 9.50065C1.58398 11.1305 1.7182 12.6261 1.8761 13.8217C2.10579 15.5608 3.44048 16.8955 5.17961 17.1252C6.37522 17.2831 7.87083 17.4173 9.50065 17.4173C11.1305 17.4173 12.6261 17.2831 13.8217 17.1252C15.5608 16.8955 16.8955 15.5608 17.1252 13.8217C17.2831 12.6261 17.4173 11.1305 17.4173 9.50065C17.4173 7.87083 17.2831 6.37522 17.1252 5.17961C16.8955 3.44048 15.5608 2.10579 13.8217 1.8761C12.6261 1.7182 11.1305 1.58398 9.50065 1.58398C7.87083 1.58398 6.37522 1.7182 5.17961 1.8761Z" fill="#E8FFF3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.49935 13.4577C9.93657 13.4577 10.291 13.1032 10.291 12.666V10.291H12.666C13.1032 10.291 13.4577 9.93657 13.4577 9.49935C13.4577 9.06212 13.1032 8.70768 12.666 8.70768H10.291V6.33268C10.291 5.89546 9.93657 5.54102 9.49935 5.54102C9.06212 5.54102 8.70768 5.89546 8.70768 6.33268V8.70768H6.33268C5.89546 8.70768 5.54102 9.06212 5.54102 9.49935C5.54102 9.93657 5.89546 10.291 6.33268 10.291H8.70768V12.666C8.70768 13.1032 9.06212 13.4577 9.49935 13.4577Z" fill="#E8FFF3"/>
</svg>

Add Static-Content</button>
    <div className="report padding15rem">
  
    <div>

    <div className='between-div' style={{borderBottom:'1px solid #EFF2F5'}}>
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>Sep 21, 2022</h5>
<div className='d-flex' style={{gridGap:15}}>
    <span className='span-text-light' style={{paddingBottom:'1rem', borderBottom:'2px solid #00A3FF'}}>Today</span>
    <span  className='span-text-light'>Week</span>
    <span  className='span-text-light'>Month</span>
    <span  className='span-text-light'>2022</span>
</div>
</div>
 <div className="matchlist-table">
<table style={{width:'100%'}} >
  <tr>
    <th><input type="checkbox"></input></th>
    <th>Action</th>
    <th>image</th>
    <th>Meta Key</th>
    <th>Date</th>
   
   
  
    
  </tr>
  {staticList?.map((a)=>{

    return <tr>
   <td><input type="checkbox"></input></td>
    <td><button className='themeButton' style={{background:"#F5F8FA",color:"#A1A5B7"}} onClick={()=>editData(a)}>edit</button></td>
    <td ><img src={a?.page_image} style={{height:100,width:100,objectFit:'contain'}}></img></td>
    <td style={{width:"100%",}}><p style={{color:'#7E8299',fontSize:14}}>{a?.name}</p></td>
    <td style={{color:'#7E8299',fontSize:14}}>{new Date(a?.updated_at).toString().split('G')[0]}</td>
    
  </tr>
  })}
  
 
  </table>
</div>

</div>
    </div>

     {/* edit Details */}
     <Modal show={editModal} onHide={()=>setEditModal(false)} style={{backdropFilter: 'blur(8px)'}} size="xl">
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:18,fontWeight:600,color:'#3F4254',letterSpacing:1}}>Static Details {editStaticList && (<span className="span-box">{staticData?.updated_atr  }</span>)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="padding15rem">
        <div className="inputwrapper" >
                <p className='span-text-dark' >Is Active</p>
                <span className='span-text-light d-flex align-items-center' style={{flex: 2}}>
                <input  type="checkbox" checked={status} className='event-toggle' style={{position:'relative',top:0,left:0,marginRight:8}} onChange={(e)=>setStaticData({...staticData,["status"]:e.target.checked? 1:0})}></input>Active</span>
                
                </div>
                <div className="inputwrapper">
                <p className='span-text-dark' > Name</p>
                <input type="text" className="form-input" placeholder=' Name' value={name} name="name" onChange={HandleInput} ></input>
                </div>
                <div className="inputwrapper" style={{alignItems: 'flex-start'}}>
                <p className='span-text-dark' >Description</p>
                <div   style={{flex:2}}>
                <JoditEditor
              
                config={{
                  toolbarButtonSize:'small',allowResizeY: true,height:200}} 
			      ref={editor}
			      value={content}
			        tabIndex={1} // tabIndex of textarea
      // preferred to use only this option to update the content for performance reasons
			      onChange={content=>setStaticData({...staticData,["content"]:content})}
		        />
            </div>
                </div>
               
                <div className="inputwrapper" style={{alignItems: 'flex-start'}}>
                <p className='span-text-dark' >Image upload</p>
                <div className="upload-file ">
                {image ? 
                <div className="d-flex align-items-center " style={{flexDirection:'row',gridGap:20,padding:'1.5rem 2rem '}}>
                
<svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>setStaticData({...staticData,["image"]:""})} >
<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M3.55349 9.81276C3.98869 6.51756 6.51757 3.98869 9.81276 3.55349C12.0781 3.2543 14.9119 3 18 3C21.0881 3 23.9219 3.2543 26.1872 3.55349C29.4824 3.98869 32.0113 6.51757 32.4465 9.81276C32.7457 12.0781 33 14.9119 33 18C33 21.0881 32.7457 23.9219 32.4465 26.1872C32.0113 29.4824 29.4824 32.0113 26.1872 32.4465C23.9219 32.7457 21.0881 33 18 33C14.9119 33 12.0781 32.7457 9.81276 32.4465C6.51756 32.0113 3.98869 29.4824 3.55349 26.1872C3.2543 23.9219 3 21.0881 3 18C3 14.9119 3.2543 12.0781 3.55349 9.81276Z" fill="#B5B5C3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4393 12.4393C13.0251 11.8536 13.9749 11.8536 14.5607 12.4393L18 15.8787L21.4393 12.4393C22.0251 11.8536 22.9749 11.8536 23.5607 12.4393C24.1464 13.0251 24.1464 13.9749 23.5607 14.5607L20.1213 18L23.5607 21.4393C24.1464 22.0251 24.1464 22.9749 23.5607 23.5607C22.9749 24.1464 22.0251 24.1464 21.4393 23.5607L18 20.1213L14.5607 23.5607C13.9749 24.1464 13.0251 24.1464 12.4393 23.5607C11.8536 22.9749 11.8536 22.0251 12.4393 21.4393L15.8787 18L12.4393 14.5607C11.8536 13.9749 11.8536 13.0251 12.4393 12.4393Z" fill="#B5B5C3"/>
</svg>

                <img src={typeof image == 'string' ? image : URL.createObjectURL(image)} style={{width:70, height:70,borderRadius:6}}></img>
                  <div>
<p className='span-text-light'>{image?.name} </p>
<span className='span-text-dark float-end' style={{marginTop:5}}>100%</span>
<div className='progressbar'>
  <div style={{width:200}}/>
</div>
</div>
</div>
:
                <div className="center-div" onClick={fileupload}>
                    <input type='file' hidden id="uploadefile-event"  onChange={(e)=>setStaticData({...staticData,["image"]:e.target.files[0]})}></input>
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
                <div className="inputwrapper">
                <p className='span-text-dark' > </p>
                <div className="d-flex" style={{gridGap:15}}>
                  <button className="themeButton" onClick={editStaticList ? static_edit: static_list_upload}>save</button>
                  {editStaticList && (<button className="themeButton" style={{color:'#D9214E',backgroundColor:'#FFF5F8'}} onClick={static_delete}>Delete</button>)}
                </div>
                </div>
            </div>

        </Modal.Body>
      
      </Modal>
   </>
  )
}

export default StaticList