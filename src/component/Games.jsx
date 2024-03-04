import { Button } from 'bootstrap'
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import { Editor } from '@tinymce/tinymce-react';
import JoditEditor from 'jodit-react';
import Dropdown from 'react-bootstrap/Dropdown';
import { AuthContext } from '../AuthProvider'
import {  toast } from 'react-toastify';
import axios from '../axios';
import Toast from '../Toast';

  

const Games = ({Status_Active_InActive}) => {
 
  const {userToken,state,dispatch,country_list} = useContext(AuthContext)
  const location = useLocation()
  const {AllGames} = state
    const [newGamesArr,setNewGamesArr] = useState([])
    const [newEvent,setNewEvent] = useState(false)
    const [ModalTournamentType,setmodal_tournament_type] = useState(false)
    const [tab,setTab] = useState(1);

  const [gameData,setGameData] = useState({name:"",status:0,app_image:"",dashboard_image:"",game_id_name:"", game_plateform:"",game_id_formate:""});
  const {name,status,app_image,dashboard_image,game_id_name,game_plateform,game_id_formate} = gameData;
  const [Country,setCountry] = useState([])
  const [TournmanetType,setTournamentType] = useState([])
  const [Add_map,setAdd_Map] = useState([{map:"map1",game_name:"",status:1}])

  const [editGameid,setEdit_Gameid] = useState("")
  const editor = useRef(null);
  const [isLoadiing,setisLoading] =useState(true)
  const [searchCon,setSearchCon] = useState("")
const setAllGames=""
   
useEffect(()=>{
  var arr = AllGames?.filter(a=>a?.status==Status_Active_InActive)

  setNewGamesArr(arr)

},[Status_Active_InActive,state])
  const HandleInput = (e) =>{
    e.preventDefault();
    
    setGameData({...gameData,[e.target.name]:e.target.value}); 
  }

  const gameupload = async(e)=>{
    e.preventDefault()
    
    var formData = new FormData();
   
    formData.append("name",name)
    formData.append("country_name",JSON.stringify(Country))
    formData.append("status",status)
    formData.append("image2",app_image)
    formData.append("image1",dashboard_image )
    formData.append("game_id_name",game_id_name )
    formData.append("game_id_format",game_id_formate)
    formData.append("game_plateform",game_plateform)
    formData.append("game_type",JSON.stringify(TournmanetType))
    formData.append("map_data",JSON.stringify(Add_map))

      try{
        const response = await toast.promise(axios({
          method: "post",
          url: `/add_game`,
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
         let obj = {
          name,
    "country_name":JSON.stringify(Country),
    status,
    app_image:`https://shopninja.in/anurag/war94/public/storage/games/${newdata?.image2}`,
    dashboard_image:`https://shopninja.in/anurag/war94/public/storage/games/${newdata?.image1}`,
    game_id_name,
    game_id_formate,
    game_plateform,
    game_id: newdata?.game_id,
    "game_type":JSON.stringify(TournmanetType),
    "map_data":JSON.stringify(Add_map)
         }

         dispatch({type:"Add",data:obj,name:"AllGames"})
       

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

  // to set country data 
  const checkItems=(e,state,setState)=>{
    if(e.target.checked){
      setState([...state,e.target.value])
    }else{

        var data = state?.filter(element=> element!=e.target.value)
        setState(data)
    }
  }

  // solo,squad,duo set 
  const Tournament_SetData=(e)=>{
    var obj = {
      "type":e.target.value,
      desc:""
    }
    if(e.target.checked){
      setTournamentType([...TournmanetType,obj])
    }else{

        var data = TournmanetType?.filter(element=> element.type!=e.target.value)
        setTournamentType(data)
    }
  }

  // solo,duo,squad description set
   
  const descset =(data,content)=> {
    
    var data = TournmanetType?.map((element)=>{

      return element.type == data ? {...element,desc:content}:element
    })
    setTournamentType(data)

  }

// To set map 
  const handlemap=(e)=>{
    e.preventDefault();

    var data = Add_map?.map((element)=>{

    return  element.map == e.target.name ? {...element,game_name:e.target.value}:element
  })
  setAdd_Map(data)
  }


  // To set map status  
  const map_status=(e)=>{
   
    if(e.target.checked){
      var data = Add_map?.map((element)=>{

        return  element.map == e.target.name ? {...element,status:1}:element
      })
      setAdd_Map(data)
    }else{

      var data = Add_map?.map((element)=>{

        return  element.map == e.target.name ? {...element,status:0}:element
      })
      setAdd_Map(data)
    }
  }
  
  // search country 
  const searchCountry = useMemo(()=>{

    if(!searchCon){
      return country_list
    }

    var arr = country_list?.filter((country)=>{
      var countrylow = country?.toLowerCase()
      
      return countrylow.includes(searchCon?.toLowerCase())
    })
    return arr
  },[searchCon])



    const Tab1=[
      <div className="padding15rem">
      <div className="inputwrapper">
      <p className='span-text-dark' >Game Name</p>
      <input type="text" className="form-input" placeholder='Game Name' value={name} name="name" onChange={HandleInput}></input>
      </div>
      <div className="inputwrapper">
      <p className='span-text-dark' >Country Name</p>
      <div className="dropdown" style={{width:'100%'}}>
      <input className="form-input dropdown-toggle" value={Country.toString()} placeholder='Event url' data-bs-toggle="dropdown" aria-expanded="false" style={{width:"100%"}}></input>

      <div className="dropdown-menu country-dropdown">
      
      <input type="text" className="form-input w-100" placeholder='search Bar ' value={searchCon} onChange={(e)=>setSearchCon(e.target.value)}></input>

      <p style={{fontSize:12,color: '#B5B5C3',fontWeight:600,margin:'1.5rem 0 0 0 '}}>country</p>
      <div className="country-countainer d-flex  justify-content-between" style={{  height: 200, overflowY: 'auto'}}>


          {searchCountry?.map((data)=>{

            return <div className='between-div' >
          <p style={{fontSize:12,margin:0,fontWeight:600}}>{data}</p>
          <input type="checkbox" value={data} checked={Country.includes(data)}  onChange={(e)=>checkItems(e,Country,setCountry)}/>
        </div>
          })}
        
      </div>
  </div>
      </div>
      
      </div>
      
      <div className="inputwrapper" >
      <p className='span-text-dark' >Active</p>
      <span className='span-text-light d-flex align-items-center' style={{flex: 2}}>
      <input  type="checkbox"  className='event-toggle' value={status} checked ={status} style={{position:'relative',top:0,left:0,marginRight:8}} onChange={(e)=>setGameData({...gameData,["status"]:e.target.checked? 1:0})}></input>Active</span>
      
      </div>
      <div className="inputwrapper" style={{alignItems: 'flex-start'}}>
      <p className='span-text-dark' >Game Image For App</p>


      {/* app_images  */}
      <div className="upload-file ">
                {app_image ? 
                <div className="d-flex align-items-center " style={{flexDirection:'row',gridGap:20,padding:'1.5rem 2rem'}}>
                
<svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>setGameData({...gameData,["app_image"]:""})}>
<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M3.55349 9.81276C3.98869 6.51756 6.51757 3.98869 9.81276 3.55349C12.0781 3.2543 14.9119 3 18 3C21.0881 3 23.9219 3.2543 26.1872 3.55349C29.4824 3.98869 32.0113 6.51757 32.4465 9.81276C32.7457 12.0781 33 14.9119 33 18C33 21.0881 32.7457 23.9219 32.4465 26.1872C32.0113 29.4824 29.4824 32.0113 26.1872 32.4465C23.9219 32.7457 21.0881 33 18 33C14.9119 33 12.0781 32.7457 9.81276 32.4465C6.51756 32.0113 3.98869 29.4824 3.55349 26.1872C3.2543 23.9219 3 21.0881 3 18C3 14.9119 3.2543 12.0781 3.55349 9.81276Z" fill="#B5B5C3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4393 12.4393C13.0251 11.8536 13.9749 11.8536 14.5607 12.4393L18 15.8787L21.4393 12.4393C22.0251 11.8536 22.9749 11.8536 23.5607 12.4393C24.1464 13.0251 24.1464 13.9749 23.5607 14.5607L20.1213 18L23.5607 21.4393C24.1464 22.0251 24.1464 22.9749 23.5607 23.5607C22.9749 24.1464 22.0251 24.1464 21.4393 23.5607L18 20.1213L14.5607 23.5607C13.9749 24.1464 13.0251 24.1464 12.4393 23.5607C11.8536 22.9749 11.8536 22.0251 12.4393 21.4393L15.8787 18L12.4393 14.5607C11.8536 13.9749 11.8536 13.0251 12.4393 12.4393Z" fill="#B5B5C3"/>
</svg>

                <img src={typeof app_image == 'string' ? app_image : URL.createObjectURL(app_image)} style={{width:70, height:70,borderRadius:6}}></img>
                  <div>
<p className='span-text-light' style={{marginBottom:10}}>{app_image?.name} </p>
<span className='span-text-dark float-end ' style={{marginTop:5}} >100%</span>
<div className='progressbar'>
  <div style={{width:200}}/>
</div>
</div>
</div>
:
                <div className="center-div" onClick={()=>fileupload('uploadefile-event2')}>
                    <input type='file' hidden id="uploadefile-event2" onChange={(e)=>setGameData({...gameData,["app_image"]:e.target.files[0]})}></input>
<svg width="50" height="50" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path opacity="0.25" d="M9.875 13.166C9.875 7.7122 14.2962 3.29102 19.75 3.29102H51.868C54.487 3.29102 56.9987 4.33141 58.8507 6.18334L66.2327 13.5654C68.0846 15.4173 69.125 17.929 69.125 20.548V65.8327C69.125 71.2865 64.7038 75.7077 59.25 75.7077H19.75C14.2962 75.7077 9.875 71.2865 9.875 65.8327V13.166Z" fill="#00A3FF"/>
<path d="M49.375 6.22654C49.375 4.6053 50.6893 3.29102 52.3105 3.29102C54.6462 3.29102 56.8862 4.21885 58.5377 5.8704L66.5456 13.8783C68.1972 15.5299 69.125 17.7698 69.125 20.1055C69.125 21.7267 67.8107 23.041 66.1895 23.041H52.6667C50.8487 23.041 49.375 21.5673 49.375 19.7493V6.22654Z" fill="#00A3FF"/>
<path d="M38.2387 29.8748C37.8505 30.0354 37.4867 30.2735 37.1711 30.5891L27.2961 40.4641C26.0107 41.7496 26.0107 43.8338 27.2961 45.1192C28.5816 46.4047 30.6658 46.4047 31.9513 45.1192L36.207 40.8635V55.9583C36.207 57.7763 37.6808 59.25 39.4987 59.25C41.3166 59.25 42.7904 57.7763 42.7904 55.9583V40.8635L47.0461 45.1192C48.3316 46.4047 50.4158 46.4047 51.7013 45.1192C52.9867 43.8338 52.9867 41.7496 51.7013 40.4641L41.8263 30.5891C40.8564 29.6192 39.4318 29.3811 38.2387 29.8748Z" fill="#00A3FF"/>
</svg>

<p ></p>

                </div>
                }
                </div>
      </div>




      {/* dashboard image  */}
      <div className="inputwrapper" style={{alignItems: 'flex-start'}}>
      <p className='span-text-dark' >Game Image For Dashboard</p>
      <div className="upload-file ">
                {dashboard_image ? 
                <div className="d-flex align-items-center " style={{flexDirection:'row',gridGap:20,padding:'1.5rem 2rem'}}>
                
<svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>setGameData({...gameData,["dashboard_image"]:""})}>
<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M3.55349 9.81276C3.98869 6.51756 6.51757 3.98869 9.81276 3.55349C12.0781 3.2543 14.9119 3 18 3C21.0881 3 23.9219 3.2543 26.1872 3.55349C29.4824 3.98869 32.0113 6.51757 32.4465 9.81276C32.7457 12.0781 33 14.9119 33 18C33 21.0881 32.7457 23.9219 32.4465 26.1872C32.0113 29.4824 29.4824 32.0113 26.1872 32.4465C23.9219 32.7457 21.0881 33 18 33C14.9119 33 12.0781 32.7457 9.81276 32.4465C6.51756 32.0113 3.98869 29.4824 3.55349 26.1872C3.2543 23.9219 3 21.0881 3 18C3 14.9119 3.2543 12.0781 3.55349 9.81276Z" fill="#B5B5C3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4393 12.4393C13.0251 11.8536 13.9749 11.8536 14.5607 12.4393L18 15.8787L21.4393 12.4393C22.0251 11.8536 22.9749 11.8536 23.5607 12.4393C24.1464 13.0251 24.1464 13.9749 23.5607 14.5607L20.1213 18L23.5607 21.4393C24.1464 22.0251 24.1464 22.9749 23.5607 23.5607C22.9749 24.1464 22.0251 24.1464 21.4393 23.5607L18 20.1213L14.5607 23.5607C13.9749 24.1464 13.0251 24.1464 12.4393 23.5607C11.8536 22.9749 11.8536 22.0251 12.4393 21.4393L15.8787 18L12.4393 14.5607C11.8536 13.9749 11.8536 13.0251 12.4393 12.4393Z" fill="#B5B5C3"/>
</svg>

                <img src={ typeof dashboard_image == 'string' ? dashboard_image : URL.createObjectURL(dashboard_image)} style={{width:70, height:70,borderRadius:6}}></img>
                  <div>
<p className='span-text-light' style={{marginBottom:10}}>{dashboard_image?.name} </p>
<span className='span-text-dark float-end ' style={{marginTop:5}} >100%</span>
<div className='progressbar'>
  <div style={{width:200}}/>
</div>
</div>
</div>
:
                <div className="center-div" onClick={()=>fileupload('uploadefile-event3')}>
                    <input type='file' hidden id="uploadefile-event3" onChange={(e)=>setGameData({...gameData,["dashboard_image"]:e.target.files[0]})}></input>
<svg width="50" height="50" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path opacity="0.25" d="M9.875 13.166C9.875 7.7122 14.2962 3.29102 19.75 3.29102H51.868C54.487 3.29102 56.9987 4.33141 58.8507 6.18334L66.2327 13.5654C68.0846 15.4173 69.125 17.929 69.125 20.548V65.8327C69.125 71.2865 64.7038 75.7077 59.25 75.7077H19.75C14.2962 75.7077 9.875 71.2865 9.875 65.8327V13.166Z" fill="#00A3FF"/>
<path d="M49.375 6.22654C49.375 4.6053 50.6893 3.29102 52.3105 3.29102C54.6462 3.29102 56.8862 4.21885 58.5377 5.8704L66.5456 13.8783C68.1972 15.5299 69.125 17.7698 69.125 20.1055C69.125 21.7267 67.8107 23.041 66.1895 23.041H52.6667C50.8487 23.041 49.375 21.5673 49.375 19.7493V6.22654Z" fill="#00A3FF"/>
<path d="M38.2387 29.8748C37.8505 30.0354 37.4867 30.2735 37.1711 30.5891L27.2961 40.4641C26.0107 41.7496 26.0107 43.8338 27.2961 45.1192C28.5816 46.4047 30.6658 46.4047 31.9513 45.1192L36.207 40.8635V55.9583C36.207 57.7763 37.6808 59.25 39.4987 59.25C41.3166 59.25 42.7904 57.7763 42.7904 55.9583V40.8635L47.0461 45.1192C48.3316 46.4047 50.4158 46.4047 51.7013 45.1192C52.9867 43.8338 52.9867 41.7496 51.7013 40.4641L41.8263 30.5891C40.8564 29.6192 39.4318 29.3811 38.2387 29.8748Z" fill="#00A3FF"/>
</svg>

<p ></p>

                </div>
                }
                </div>
      </div>
  </div>
    ]

    const Tab2 =[
      <div className="padding15rem">
      <div className="inputwrapper">
      <p className='span-text-dark' >Game Id Name </p>
      <input type="text" className="form-input" placeholder='character Id' value={game_id_name} name="game_id_name" onChange={HandleInput}></input>
      </div>
      <div className="inputwrapper">
      <p className='span-text-dark' >game Id Formate</p>
      <div className="dropdown" style={{width:'100%'}}>
      <input className="form-input dropdown-toggle" value={game_id_formate} placeholder='Only Alphabet' data-bs-toggle="dropdown" aria-expanded="false" style={{width:"100%"}}></input>

      <div className="dropdown-menu country-dropdown" style={{}}>
    

      <p style={{fontSize:12,color: '#B5B5C3',fontWeight:600,margin:'1.5rem 0 0 0 '}}>Game Id type </p>
      <div className="country-countainer between-div">


          {["1","2","3","4","5","6"]?.map((data)=>{
            {/* 1=alphanumeric, 2=alpha, 3=numeric, 4=alphanumeric+special char, 5 = alpha+special char, 6=numeric+special char */}

            return <div className='between-div' >
          <p style={{fontSize:12,margin:0,fontWeight:600}}> alphabet </p>
          <input type="radio"  value={data} checked={game_id_formate == data} name="game_id_formate"  onChange={(e)=>setGameData({...gameData,[e.target.name]:e.target.value})}/>
        </div>
          })}
        
      </div>
  </div>
      </div>
      
      </div>
      <div className="inputwrapper">
                <p className='span-text-dark' >Game platform</p>
                <select className="form-input" name="game_plateform" onChange={HandleInput} >
                    <option selected={game_plateform==""}  >choose platform</option>
                    <option selected={game_plateform=="mobile"}  value="mobile">mobile</option>
                    <option selected={game_plateform=="web"} value="web">PC</option>
                </select>
      </div>
      

      <div className="inputwrapper">
      <p className='span-text-dark' >Tournaments Type</p>
     
      <input className="form-input " placeholder='solo,duo' value={TournmanetType.map(e=>e.type)} style={{width:"100%"}} onClick={()=>setmodal_tournament_type(true)}/>
      </div>

      <p style={{fontSize:12,color: '#B5B5C3',fontWeight:600,margin:'1.5rem 0 0 0 '}}>Select Map</p>

          {Add_map.map((element)=>{

            return <div className="map">
      <div className="inputwrapper">
                <p className='span-text-dark' >Map</p>
                <select className="form-input" name={element?.map} style={{backgroundColor:'white'}} onChange={handlemap}>
                    <option selected={element?.game_name==""} hidden>select map </option>
                    <option selected={element?.game_name=="erangle"} value="erangle">erangle</option>
                    <option  selected={element?.game_name=="mayamar"} value="mayamar">mayamar</option>
                </select>
      </div>
     
      <div className="inputwrapper" >
      <p className='span-text-dark' >Active</p>
      <span className='span-text-light d-flex align-items-center' style={{flex: 2}}>
      <input  type="checkbox" className='event-toggle' name={element?.map}  style={{position:'relative',top:0,left:0,marginRight:8}} checked={Add_map.find(e=>e.map==element.map)?.status} onChange={map_status}></input>Active
      <span className='span-box-red' style={{margin: '0 0 0 auto',cursor:'pointer'}} onClick={()=>setAdd_Map(Add_map.filter(mapData=>mapData?.map!=element?.map))}>
        
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 6V15C4.5 15.8284 5.17157 16.5 6 16.5H12C12.8284 16.5 13.5 15.8284 13.5 15V6H4.5Z" fill="#F1416C"/>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M10.5 3.375V3.25C10.5 2.69772 10.0523 2.25 9.5 2.25H8.5C7.94772 2.25 7.5 2.69772 7.5 3.25V3.375H4.25C3.97386 3.375 3.75 3.59886 3.75 3.875V4C3.75 4.27614 3.97386 4.5 4.25 4.5H13.75C14.0261 4.5 14.25 4.27614 14.25 4V3.875C14.25 3.59886 14.0261 3.375 13.75 3.375H10.5Z" fill="#F1416C"/>
</svg>

      </span>
      </span>
      
      </div>
      </div>
          })}
      
      <button className="themeButton" style={{background: '#F4F4F4',color:' #5E6278',borderColor:'transparent'}} onClick={()=>setAdd_Map([...Add_map,{map:`map${Add_map.length+1}`,game_name:"",status:1}])}>Add Another </button>
      </div>
      
    ]

    // upload files section 
    function fileupload(id){
     
      var file_input = document.getElementById(id)
      
      file_input.click();
    }



    // edit0-games

    // delete game 

    const gameDelete = async(Id)=>{
  
        try{
          const response = await toast.promise(axios({
            method: "get",
            url: `/delete_game?game_id=${Id}`,
            headers:{
            'Authorization': `Bearer ${userToken} `,
              'Content-Type': 'multipart/form-data'
            },
          }),
          {
            pending: 'waiting',
            success: {render({data}){
           const newdata = data?.data
           
           dispatch({type:"delete",Id,idname:"game_id",name:"AllGames"})
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
      formData.append("country_name",JSON.stringify(Country))
      formData.append("status",status)
      
      if(app_image['type']!=undefined){
        formData.append("image2",app_image)
      }
      if(dashboard_image['type']!=undefined){
        formData.append("image1",dashboard_image)
      }
     
      formData.append("game_id_name",game_id_name)
      formData.append("game_id_format",game_id_formate)
      formData.append("game_plateform",game_plateform)
      formData.append("game_type",JSON.stringify(TournmanetType))
      formData.append("map_data",JSON.stringify(Add_map))
      formData.append("game_id",editGameid)
  
        try{
          const response = await toast.promise(axios({
            method: "post",
            url: `/update_game`,
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
              var data = AllGames?.map((element)=>{

                return element?.game_id == editGameid ? {
                  ...element,
                  name,
                  "country_name":JSON.stringify(Country),
                  status,
                  game_id_name,
                  game_id_formate,
                  game_plateform,
                  "game_type":JSON.stringify(TournmanetType),
                  "map_data":JSON.stringify(Add_map),
                  app_image:`https://shopninja.in/anurag/war94/public/storage/games/${newdata?.image2}`,
                  dashboard_image:`https://shopninja.in/anurag/war94/public/storage/games/${newdata?.image1}`,
                 
                }:element
              })
              dispatch({type:"initialData",data:data,name:"AllGames"})
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
    const gameEditStatus = async(status,editGameid)=>{
  
      var formData = new FormData();
     
      formData.append("status",status)
      formData.append("game_id",editGameid)
  
        try{
          const response = await toast.promise(axios({
            method: "post",
            url: `/update_game`,
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
              var data = AllGames?.map((element)=>{

                return element?.game_id == editGameid ? {
                  ...element,          
                  status,
                 
                 
                }:element
              })
              dispatch({type:"initialData",data:data,name:"AllGames"})
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
  
    


const data = (games)=>{


  if(games){
    var obj={
      name:games.name,
      status:games.status,
      game_plateform:games.game_plateform,
      game_id_name:games.game_id_name,
      game_id_formate:games.game_id_format,
      app_image:games.app_image,
      dashboard_image:games.dashboard_image
    }
  setGameData({...gameData,...obj})
  setCountry(JSON.parse(games?.country_name))
  setTournamentType(JSON.parse(games?.game_type))
  setAdd_Map(JSON.parse(games?.map_data))
  setEdit_Gameid(games?.game_id)
  
  }else{
    var obj={
      name:'',
      status:0,
      game_plateform:"",
      game_id_name:"",
      app_image:"",
      dashboard_image:"",
      game_id_formate:""
    }
    setGameData({...obj})
    setCountry([])
    setTournamentType([])
    setAdd_Map([{map:"map1",game_name:"",status:1}])
    setEdit_Gameid("")
  }
  setTab(1);
  setNewEvent(true)

}



  return (
    <>
    <div className="event-top padding15rem">
    <span className='span-text-light'>Home </span>
    <span className='span-text-light'> / </span>
    <span className='span-text-dark'> {location?.pathname?.split('/')[1]}</span>

    </div>
    <div className="event-middle padding15rem">
    <div className="between-div" style={{  marginBottom:'1.5rem'}}>
<h4 className='section-heading' >All Games</h4>
<button className='themeButton' onClick={()=>data("")}>

<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M5.17961 1.8761C3.44048 2.10579 2.10579 3.44048 1.8761 5.17961C1.7182 6.37522 1.58398 7.87083 1.58398 9.50065C1.58398 11.1305 1.7182 12.6261 1.8761 13.8217C2.10579 15.5608 3.44048 16.8955 5.17961 17.1252C6.37522 17.2831 7.87083 17.4173 9.50065 17.4173C11.1305 17.4173 12.6261 17.2831 13.8217 17.1252C15.5608 16.8955 16.8955 15.5608 17.1252 13.8217C17.2831 12.6261 17.4173 11.1305 17.4173 9.50065C17.4173 7.87083 17.2831 6.37522 17.1252 5.17961C16.8955 3.44048 15.5608 2.10579 13.8217 1.8761C12.6261 1.7182 11.1305 1.58398 9.50065 1.58398C7.87083 1.58398 6.37522 1.7182 5.17961 1.8761Z" fill="#E8FFF3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.49935 13.4577C9.93657 13.4577 10.291 13.1032 10.291 12.666V10.291H12.666C13.1032 10.291 13.4577 9.93657 13.4577 9.49935C13.4577 9.06212 13.1032 8.70768 12.666 8.70768H10.291V6.33268C10.291 5.89546 9.93657 5.54102 9.49935 5.54102C9.06212 5.54102 8.70768 5.89546 8.70768 6.33268V8.70768H6.33268C5.89546 8.70768 5.54102 9.06212 5.54102 9.49935C5.54102 9.93657 5.89546 10.291 6.33268 10.291H8.70768V12.666C8.70768 13.1032 9.06212 13.4577 9.49935 13.4577Z" fill="#E8FFF3"/>
</svg>

Add Game</button>
</div>
    <div className='event-container' >

        {newGamesArr?.map((element)=>{

            return <div className='event-box padding15rem'>
            <input  type="checkbox" className='event-toggle' checked={element?.status} onChange={(e)=>e.target.checked ? gameEditStatus(1,element?.game_id): gameEditStatus(0,element?.game_id)}></input>
         <div className='event-img-div'>   
        <img src={element?.dashboard_image} style={{objectFit:'contain'}}></img>
        
       
        </div>
        <div>
        <span className='span-text-dark' style={{fontSize:14,flex: 1}}> {element?.name}</span>
        
            <div className='event-icon' style={{backgroundColor:'#F3F6F9'}} onClick={()=>data(element)}>
            
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1378 2.98564C14.7152 3.56304 14.7247 4.49625 14.1591 5.08524L8.74224 10.7263C8.46695 11.013 8.08913 11.1787 7.69176 11.1871L5.41644 11.2348L5.46449 8.94424C5.47264 8.5559 5.63111 8.18587 5.90655 7.91201L11.4436 2.40661C12.0298 1.82369 12.9773 1.82505 13.5619 2.40965L14.1378 2.98564Z" fill="#3699FF"/>
<path opacity="0.3" d="M8.5987 1.33398C8.96689 1.33398 9.26536 1.63246 9.26536 2.00065C9.26536 2.36884 8.96689 2.66732 8.5987 2.66732H3.9987C3.26232 2.66732 2.66536 3.26427 2.66536 4.00065V12.0007C2.66536 12.737 3.26232 13.334 3.9987 13.334H11.9987C12.7351 13.334 13.332 12.737 13.332 12.0007V8.66732C13.332 8.29913 13.6305 8.00065 13.9987 8.00065C14.3669 8.00065 14.6654 8.29913 14.6654 8.66732V12.0007C14.6654 13.4734 13.4715 14.6673 11.9987 14.6673H3.9987C2.52594 14.6673 1.33203 13.4734 1.33203 12.0007V4.00065C1.33203 2.52789 2.52594 1.33398 3.9987 1.33398H8.5987Z" fill="#3699FF"/>
</svg>

            </div>
            <div className='event-icon' style={{backgroundColor:' #FFF5F8',cursor:'pointer'}} onClick={()=>gameDelete(element?.game_id)}>
            
            
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 6V15C4.5 15.8284 5.17157 16.5 6 16.5H12C12.8284 16.5 13.5 15.8284 13.5 15V6H4.5Z" fill="#F1416C"/>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M10.5 3.375V3.25C10.5 2.69772 10.0523 2.25 9.5 2.25H8.5C7.94772 2.25 7.5 2.69772 7.5 3.25V3.375H4.25C3.97386 3.375 3.75 3.59886 3.75 3.875V4C3.75 4.27614 3.97386 4.5 4.25 4.5H13.75C14.0261 4.5 14.25 4.27614 14.25 4V3.875C14.25 3.59886 14.0261 3.375 13.75 3.375H10.5Z" fill="#F1416C"/>
</svg>


            </div>
        

        </div>
        <button className='themeButton' style={{width: '100%',marginTop:'1rem'}}>Add Tournament</button> 
        </div>
        })}
        
    </div>
    <div className='pagination between-div'>
        <span className='span-text-dark' style={{color:'#5E6278'}}>Showing 1 to 10 of 50 entries</span>
        <div>

        <div className='pagination-icon'>
        <i className="bi bi-chevron-left"></i>
        </div>
        {[...Array(4)]?.map((a,index) =>{

            return  <div className='pagination-icon' style={{backgroundColor:'transparent'}}>
        <span style={{color:'#7E8299',fontSize:12}}>{index+1}</span>
        </div>
        })}
       

        <div className='pagination-icon'>
        <i className="bi bi-chevron-right"></i>
        </div>

        </div>
    </div>
    </div>
    <Modal show={newEvent} onHide={()=>setNewEvent(false)} size='lg' style={{backdropFilter:'blur(8px)'}}>
        <Modal.Header closeButton>
          <Modal.Title>Games Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           {tab==1 && (Tab1 )}
           {tab==2 && (Tab2 )}
           
        </Modal.Body>
        <Modal.Footer>
         
         {tab==1?
          <button className='themeButton' onClick={()=>setTab(2)}>
            next
          </button>
          :
          <button className='themeButton' onClick={editGameid ? gameEdit:gameupload}>
            {editGameid ? 'Edit Games': "Publish Game"}
          </button>
         }
         
        </Modal.Footer>
      </Modal>

    <Modal show={ModalTournamentType} onHide={()=>setmodal_tournament_type(false)} size='lg' >
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:18,color:'#464658'}}>Tournament type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
      <div className="country-dropdown">
    <p style={{fontSize:12,color: '#B5B5C3',fontWeight:600,margin:'1.5rem 0 0 0 '}}>Tournaments type </p>
    <div className="country-countainer between-div">
        {['solo','duo','squad']?.map((data,i)=>{
          {/* 1=alphanumeric, 2=alpha, 3=numeric, 4=alphanumeric+special char, 5 = alpha+special char, 6=numeric+special char */}

          return <div style={{flex:'1 1 250px'}}>
          <div className='between-div' style={{marginBottom:10}} >
        <p style={{fontSize:12,margin:0,fontWeight:600}}> {data}</p>
        <input type="checkbox"  value={data} checked={TournmanetType.some(d => d.type == data)} onChange={Tournament_SetData}   />
      </div>
      <JoditEditor
			ref={editor}
			value={TournmanetType.find(e=>e?.type==data)?.desc}
			tabIndex={i+1} // tabIndex of textarea
      // preferred to use only this option to update the content for performance reasons
			onChange={content=>descset(data,content)}
		/>
      </div>
        })}
      
    </div>
</div>
           
        </Modal.Body>
       
      </Modal>

    </>
  )
}

export default Games