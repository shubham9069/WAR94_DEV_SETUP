import React, { useEffect, useRef, useState } from 'react'
import { Form, Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';

const EmailMarketing = () => {
    const location = useLocation()
    const [modal,setmodal] = useState(false)
    const [tab,setTab] = useState(1)
    const editorRef = useRef(null);
    const [modal1,setmodal1] = useState(false)

    // useEffect(()=>{
    //     console.log(editorRef.current.getContent())
    // },[editorRef,])
  return (
    <>
        <div className="event-top padding15rem">
    <span className='span-text-light'>Home </span>
    <span className='span-text-light'> / </span>
    <span className='span-text-dark'> {location?.pathname?.split('/')[1]} </span>

    </div>
    <div className="report padding15rem">

    <div className="user-search">
    <div className='between-div' style={{borderBottom:'1px solid #EFF2F5',flex:2}}>
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>Email Marketing</h5>
<div className='d-flex' style={{gridGap:15}}>


<span className={tab==3 ?"span-text-dark" : 'span-text-light'}  style={{paddingBottom:'1rem', borderBottom:tab==3 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(3)}>All Payment </span>

    <span className={tab==0 ?"span-text-dark" : 'span-text-light'} style={{paddingBottom:'1rem', borderBottom:tab==0 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(0)}>Withdraw </span>
    <span className={tab==1 ?"span-text-dark" : 'span-text-light'}  style={{paddingBottom:'1rem', borderBottom:tab==1 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(1)}>Add Amount</span>
    <span className={tab==2 ?"span-text-dark" : 'span-text-light'}  style={{paddingBottom:'1rem', borderBottom:tab==2 ?'2px solid #00A3FF':"none"}} onClick={()=>setTab(2)}>joined Tournament</span>

    
</div>
</div>

            <button className='themeButton' onClick={()=>setmodal(true)}>Add Email</button>
            
         
        </div>

        <div style={{marginTop:'1.5rem'}}>

<div className='between-div' style={{borderBottom:'1px solid #EFF2F5', paddingBottom:'1.5rem'}}>
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>Spotlighted Message</h5>


</div>
<div className="matchlist-table">
<table style={{width:'100%'}} >
<tr>
<th>Action</th>
<th>to user </th>
<th>Subject</th>
<th>Body</th>
<th>Status</th>
<th>Created Date</th>




</tr>
{[1,2,3]?.map((a)=>{

return <tr>
<td>
<div className="dropdown">
    <button className='themeButton dropdown-toggle' style={{background:"#F5F8FA",color:"#A1A5B7",}} data-bs-toggle="dropdown" aria-expanded="false">Edit</button>

    <ul class="dropdown-menu post-dropdown">

<li onClick={()=>setmodal(true)}><p> update</p> <i class="bi bi-send-fill" style={{color:'#A1A5B7',fontSize:12,width:15}}></i></li>

<li >
<p>View</p> 
<svg width="19" height="19" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.825 6.73346C16.658 7.78019 16.658 9.21989 15.825 10.2666C14.5017 11.9296 12.0598 14.1667 8.49929 14.1667C4.93883 14.1667 2.49692 11.9296 1.17355 10.2666C0.340586 9.21989 0.340586 7.78019 1.17355 6.73346C2.49692 5.07047 4.93883 2.83337 8.49929 2.83337C12.0598 2.83337 14.5017 5.07047 15.825 6.73346Z" fill="#E3E4E9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.91602 8.49996C9.91602 9.28236 9.28175 9.91663 8.49935 9.91663C7.71695 9.91663 7.08268 9.28236 7.08268 8.49996C7.08268 8.47985 7.0831 8.45984 7.08393 8.43994C7.19435 8.47881 7.31313 8.49996 7.43685 8.49996C8.02365 8.49996 8.49935 8.02426 8.49935 7.43746C8.49935 7.31374 8.4782 7.19496 8.43933 7.08454C8.45923 7.08371 8.47924 7.08329 8.49935 7.08329C9.28175 7.08329 9.91602 7.71756 9.91602 8.49996ZM11.3327 8.49996C11.3327 10.0648 10.0642 11.3333 8.49935 11.3333C6.93454 11.3333 5.66602 10.0648 5.66602 8.49996C5.66602 6.93515 6.93454 5.66663 8.49935 5.66663C10.0642 5.66663 11.3327 6.93515 11.3327 8.49996Z" fill="#A1A5B7"/>
</svg>
            
    </li>

</ul>
    </div>
</td>
<td style={{color:'#7E8299',fontSize:14,fontWeight:500}}>arman</td>
<td><span className="span-box" style={{backgroundColor:'#F4F4F4',color:'#7E8299'}}>body </span></td>
<td style={{color:'#7E8299',fontSize:14}}>asdfghj</td> 
<td> <span className='span-box-yellow'>pending</span></td>
<td style={{color:'#7E8299',fontSize:14}}>{new Date().toLocaleDateString()}</td>




</tr>
})}


</table>
</div>

</div>





    </div>

    <Modal show={modal} onHide={()=>setmodal(false)} style={{backdropFilter: 'blur(8px)'}} size="lg">
        <Modal.Header closeButton>
        <Modal.Title style={{fontSize:18,fontWeight:600,color:'#3F4254',letterSpacing:1}}>Email Marketing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<div className='d-flex flex-column' style={{gridGap:20}}>
<select className='form-input' style={{background:'#F9F9F9',color:"#A1A5B7" ,maxWidth:200}}>
    <option selected hidden >from</option>
</select>
<div className='d-flex' style={{gridGap:20}}>
<select className='form-input' style={{background:'#F9F9F9',color:"#A1A5B7",maxWidth:200}}>
    <option selected hidden >country</option>
</select>
<select className='form-input' style={{background:'#F9F9F9',color:"#A1A5B7",maxWidth:200}}>
    <option selected hidden >All users</option>
</select>

<input className='form-input' defaultValue="search" style={{background:'#F9F9F9',color:"#A1A5B7",maxWidth:200}}></input>
</div>

<input className='form-input' defaultValue="subject" style={{background:'#F9F9F9',color:"#A1A5B7",maxWidth:200}}></input>

<Editor
        apiKey='your-api-key'
        onInit={(evt, editor) => editorRef.current = editor}
        initialdefaultValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        />
</div>

<div className='d-flex ' style={{gridGap:20,padding:'1rem 0'}}>
    <button className="themeButton" >Save Now</button>
    <button className="themeButton" style={{color:'#D9214E',backgroundColor:'#F8F5FF',borderColor:'transparent'}} onClick={()=>setmodal1(true)} >Schedule</button>
</div>


        </Modal.Body>
      
      </Modal>

      
    <Modal show={modal1} onHide={()=>setmodal1(false)} style={{backdropFilter: 'blur(8px)', background: "#ffffff75"}}>
        <Modal.Header closeButton>
        <Modal.Title style={{fontSize:18,fontWeight:600,color:'#3F4254',letterSpacing:1}}>Schedule Email To Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className='center-div tab1-right-div' style={{background:'#FFF7E7',border:'1px dashed #FFA800'}}>


        <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M16.4412 30.4364C24.0081 30.4364 30.1422 24.3023 30.1422 16.7354C30.1422 9.16856 24.0081 3.03442 16.4412 3.03442C8.87437 3.03442 2.74023 9.16856 2.74023 16.7354C2.74023 24.3023 8.87437 30.4364 16.4412 30.4364Z" fill="#F89C47"/>
<rect x="15.0703" y="9.88489" width="2.7402" height="10.9608" rx="1" fill="#F89C47"/>
<rect x="15.0703" y="22.2157" width="2.7402" height="2.7402" rx="1" fill="#F89C47"/>
</svg>


<p style={{flex:1,marginBottom:2,fontWeight:600,fontSize:13}}>Warning
<p style={{color:'#7E8299',fontSize:11,fontWeight:500,marginBottom:0,marginTop:3}}>By editing the ban, user might notified the changes</p>
</p>


</div>
  <select className='form-input' style={{margin:'1rem 0',width:200}}> 
    <option selected hidden>one time</option>
    </select>
<div >
    
    <select className='form-input' style={{margin:'1rem 1rem 1rem 0',width:200}}> 
    <option selected hidden>time</option>
    </select>
    <select className='form-input' style={{margin:'1rem 0',width:150}}> 
    <option selected hidden>Date</option>
    </select>
</div>



<div className='d-flex justify-content-end' style={{gridGap:20,padding:'1rem 0'}}>
    <button className="themeButton" >Update</button>
    <button className="themeButton" style={{color:'#3E97FF',backgroundColor:'#EEF6FF',borderColor:'transparent'}} >Cancel</button>
</div>


        </Modal.Body>
      
      </Modal>
    </>
  )
}

export default EmailMarketing