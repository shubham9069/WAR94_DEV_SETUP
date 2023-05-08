import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const EditStory = () => {
    const location = useLocation();
    const [img,setImg] = useState("")
    
    const fileupload = (e)=>{
     
        var file_input = document.getElementById('uploadefile-event')
        
        file_input.click();

      }
  return (
   <>
 <div className="event-top padding15rem">
    <span className='span-text-light'>Home </span>
    <span className='span-text-light'> / </span>
    <span className='span-text-dark'> {location?.pathname?.split('/')[1]}</span>

    </div>

    <div className="padding15rem">
    <div className="between-div" style={{  marginBottom:'1.5rem'}}>
<h4 className='section-heading' >Story</h4>
</div>


<div className="d-flex top-component" style={{gridGap:20}}>


{/* left  */}
<div className="upload-file " style={{flex:1}}>
            {img ? 
                <div className="d-flex align-items-center " style={{flexDirection:'row',gridGap:20}}>
                
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>setImg("")}>
<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M3.55349 9.81276C3.98869 6.51756 6.51757 3.98869 9.81276 3.55349C12.0781 3.2543 14.9119 3 18 3C21.0881 3 23.9219 3.2543 26.1872 3.55349C29.4824 3.98869 32.0113 6.51757 32.4465 9.81276C32.7457 12.0781 33 14.9119 33 18C33 21.0881 32.7457 23.9219 32.4465 26.1872C32.0113 29.4824 29.4824 32.0113 26.1872 32.4465C23.9219 32.7457 21.0881 33 18 33C14.9119 33 12.0781 32.7457 9.81276 32.4465C6.51756 32.0113 3.98869 29.4824 3.55349 26.1872C3.2543 23.9219 3 21.0881 3 18C3 14.9119 3.2543 12.0781 3.55349 9.81276Z" fill="#B5B5C3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4393 12.4393C13.0251 11.8536 13.9749 11.8536 14.5607 12.4393L18 15.8787L21.4393 12.4393C22.0251 11.8536 22.9749 11.8536 23.5607 12.4393C24.1464 13.0251 24.1464 13.9749 23.5607 14.5607L20.1213 18L23.5607 21.4393C24.1464 22.0251 24.1464 22.9749 23.5607 23.5607C22.9749 24.1464 22.0251 24.1464 21.4393 23.5607L18 20.1213L14.5607 23.5607C13.9749 24.1464 13.0251 24.1464 12.4393 23.5607C11.8536 22.9749 11.8536 22.0251 12.4393 21.4393L15.8787 18L12.4393 14.5607C11.8536 13.9749 11.8536 13.0251 12.4393 12.4393Z" fill="#B5B5C3"/>
</svg>

                <img src={URL.createObjectURL(img)} style={{width:50, height:50}}></img>
                  <div>
<p className='span-text-light'>{img?.name} <span className='span-text-dark float-end' >100%</span></p>
<div className='progressbar'>
  <div style={{width:200}}/>
</div>
</div>
</div>
 :
                <div className="center-div" onClick={fileupload} style={{width:'100%',height:'100%'}}>
                    <input type='file' hidden id="uploadefile-event" onChange={(e)=>setImg(e.target.files[0])}></input>
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

                {/* right  */}
    <div style={{flex:1}}>



    <div  className="tournament-type" style={{margin:0}} >

<div style={{backgroundColor:'white',width:150}}>
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>1300</h5>
<p className="span-text-light" style={{fontSize:13,marginBottom:0}}>Impression</p>
</div>
<div style={{backgroundColor:'white',width:150}}>
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>52</h5>
<p className="span-text-light" style={{fontSize:13,marginBottom:0}}>Clicked</p>
</div>

</div>

<div className="between-div" style={{backgroundColor:'white',padding:'1rem' ,margin:'20px 0 ',borderRadius:6}}>
<p className="span-text-light" style={{fontSize:13,marginBottom:0}}>Start Time</p>
<p style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>29-08-2022 - 12:20 PM</p>

</div>
<div className="between-div" style={{backgroundColor:'white',padding:'1rem',borderRadius:6}}>
<p className="span-text-light" style={{fontSize:13,marginBottom:0}}>end Time</p>
<p style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>29-08-2022 - 12:20 PM</p>

</div>




    </div>            
</div>

<button className="themeButton" style={{margin:'1.5rem 0 1.5rem auto'}}>Save & Changes</button>
</div>

   </>
  )
}

export default EditStory