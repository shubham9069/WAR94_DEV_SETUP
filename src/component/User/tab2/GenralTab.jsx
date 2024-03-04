import React, { useContext, useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { AuthContext } from '../../../AuthProvider'
import axios from '../../../axios'
import { toast } from 'react-toastify'


const GenralTab = ({single_user,setSingle_user,editpost}) => {
    const {userToken} = useContext(AuthContext)
    const {
        avatar,
        bio,
        country,
        created_at,
        date_of_birth,
        email,
        id,
        is_gold_member,
        kyc_status,
        mobile,
        name,
        updated_at,
        username,
     
        } = single_user
    const [updateModal,setupdateModal] = useState(false)
    const [editDetails,seteditDetails] = useState({
       
        bio,
        country,
        email,
        mobile,
        name,
        username,
    })

    const fileupload = (e)=>{
     
        var file_input = document.getElementById('update-profile')
        
        file_input.click();
      }
      
      const handleinput =(e)=>{

        seteditDetails({...editDetails,[e.target.name]:e.target.value})
      }

      
  async function editUserData(){
    var formData = new FormData()
    
    try{
      const response = await toast.promise(axios({
        method: "post",
        url: `/update_user`,
        data: {editDetails,user_id:single_user?.id},
        headers:{
        'Authorization': `Bearer ${userToken} `,
          'Content-Type': 'multipart/form-data'
        },
      }),
      {
        pending: 'waiting',
        success: {render({data}){
       const newdata = data?.data
       
       setSingle_user({...single_user,...editDetails})
   
        
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
     <div className='tabinfo padding15rem'>
 <div className='between-div' style={{borderBottom:'1px solid #EFF2F5',paddingBottom:'1rem'}}>
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>General</h5>
<div className='d-flex' style={{gridGap:15}}>
    <span className='span-text-light' style={{paddingBottom:'1rem'}}>Last  update - {updated_at}</span>
    
</div>
</div>

<form style={{margin:'2rem 0' }}>
<div className="inputwrapper">
              <p className='span-text-dark' >Profile pic</p>
        <div style={{position:'relative'}}  >
          <img src={editDetails?.avatar} style={{width:140,height:140,borderRadius:12}}></img>

          <div className="editpost-upload center-div" style={{bottom:10,top:'auto',left:'auto',right:-15,boxShadow:'0px 0px 10px rgba(74, 80, 102, 0.14)'}} onClick={fileupload} >
    <input type="file" hidden id="update-profile"></input>

    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_248_676)">
<path d="M0 9.49965V12H2.50035L9.87802 4.62229L7.37767 2.12195L0 9.49965Z" fill="#B5B5C3"/>
<path d="M11.805 1.7519L10.2481 0.195027C9.98802 -0.065009 9.56462 -0.065009 9.30458 0.195027L8.08441 1.4152L10.5848 3.91554L11.8049 2.69537C12.065 2.43534 12.065 2.01193 11.805 1.7519Z" fill="#B5B5C3"/>
</g>
<defs>
<clipPath id="clip0_248_676">
<rect width="12" height="12" fill="white"/>
</clipPath>
</defs>
</svg>


    </div>
    
        </div>
        <span className='span-text-light' style={{alignSelf:'flex-end',padding : '0 0 1rem 1rem '}} >Remove</span>
    </div>

    <div className="inputwrapper">
                <p className='span-text-dark' >Full Name <span className='span-text-light'>(orignal)</span></p>
                <input className="form-input" placeholder='Name' value={editDetails?.name} name="name" onChange={handleinput}></input>
    </div>
    <div className="inputwrapper">
                <p className='span-text-dark' >User Name <span className='span-text-light'>(unique Id)</span></p>
                <input className="form-input"  value={editDetails?.username} name="username" onChange={handleinput}></input>
    </div>
    {/* <div className="inputwrapper">
                <p className='span-text-dark' >User Type <span className='span-text-light'>(admin/user)</span></p>
                <select className="form-input" >
                    <option selcted hidden > user</option>
                </select>
    </div> */}
    <div className="inputwrapper" >
                <p className='span-text-dark' >User KYC Verification</p>
                <span className='span-text-light d-flex align-items-center' style={{flex: 2}}>
                <input  type="checkbox" className='event-toggle' style={{position:'relative',top:0,left:0,marginRight:8}} checked={kyc_status} name="kyc_status" onChange={(e)=>editpost(e.target.name,e.target.checked ? 1:0)} ></input>Active</span>
                
                </div>

      <div className="inputwrapper" >
                <p className='span-text-dark' >user Gold Member</p>
                <span className='span-text-light d-flex align-items-center' style={{flex: 2}}>
                <input  type="checkbox" className='event-toggle'  checked={is_gold_member} name="is_gold_member" onChange={(e)=>editpost(e.target.name,e.target.checked ? 1:0)} style={{position:'relative',top:0,left:0,marginRight:8}}></input>Active</span>
           </div>          

           <div className="inputwrapper" style={{alignItems: 'flex-start'}}>
                <p className='span-text-dark' >user Bio</p>
                <textarea className="text-area" placeholder='User Bio' value={editDetails?.bio} name="bio" onChange={handleinput}></textarea>
            </div>
            <div className="inputwrapper">
                <p className='span-text-dark' >DOB</p>
                <input type="text" className="form-input" value={date_of_birth} ></input>
          </div> 
            <div className="inputwrapper">
                <p className='span-text-dark' >Email Id</p>
                <input className="form-input" value={editDetails?.email} name='email' onChange={handleinput} ></input>
          </div> 
            <div className="inputwrapper">
                <p className='span-text-dark' >Country</p>
                <input className="form-input" value={editDetails?.country} name="country" onChange={handleinput}></input>
          </div> 
            <div className="inputwrapper">
                <p className='span-text-dark' >Joined Date</p>
                <input className="form-input" value={new Date(created_at).formate}></input>
          </div> 
          
          <button type="button" className='themeButton' style={{margin:'0 0 0 auto'}} onClick={()=>setupdateModal(true)}> Update</button>
</form>



 </div>
  {/* updated model  */}

 
  <Modal show={updateModal} onHide={()=>setupdateModal(false)}>
        <Modal.Header closeButton>
        <Modal.Title style={{fontSize:18,fontWeight:600,color:'#3F4254',letterSpacing:1}}>Update Info</Modal.Title>
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
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Reason</Form.Label>
        <Form.Control as="textarea"  rows={5} />
      </Form.Group>

<div className='d-flex justify-content-end' style={{gridGap:20,padding:'1rem 0'}}>
    <button className="themeButton" onClick={editUserData}>Save Changes </button>
    <button className="themeButton" style={{color:'#3E97FF',backgroundColor:'#EEF6FF',borderColor:'transparent'}} onClick={()=>setupdateModal(false)}>Cancel</button>
</div>


        </Modal.Body>
      
      </Modal>
   </>
  )
}

export default GenralTab