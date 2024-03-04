import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider'


const Subadmin = () => {
    const navigate = useNavigate()
    const {state ,userToken,dispatch} = useContext(AuthContext)
    const location = useLocation();
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
            <Link to="/Add-Subadmin" className='themeButton link-a' style={{color:"#00A3FF",backgroundColor:'#EEF6FF',border:'1px solid #EEF6FF'}}>Add Admin</Link>
        </div>

        {[...Array(3)]?.map((persondata)=>{

            return <div className="userList"  >
<img src="images/users.png" style={{width:170,height:170,borderRadius:6}}></img>

<div style={{flex:1}}>
<h6  style={{marginBottom:10,fontWeight:600,color:'#3F4254'}}>{persondata?.name}

{persondata?.kyc_status && <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft:12}}>
<path d="M8.82113 3.25867C9.5243 1.89383 11.4757 1.89383 12.1789 3.25867C12.6014 4.07878 13.5546 4.47361 14.4333 4.19247C15.8956 3.7246 17.2754 5.10445 16.8075 6.56674C16.5264 7.44542 16.9212 8.39861 17.7413 8.82113C19.1062 9.5243 19.1062 11.4757 17.7413 12.1789C16.9212 12.6014 16.5264 13.5546 16.8075 14.4333C17.2754 15.8956 15.8956 17.2754 14.4333 16.8075C13.5546 16.5264 12.6014 16.9212 12.1789 17.7413C11.4757 19.1062 9.5243 19.1062 8.82113 17.7413C8.39861 16.9212 7.44542 16.5264 6.56674 16.8075C5.10445 17.2754 3.7246 15.8956 4.19247 14.4333C4.47361 13.5546 4.07878 12.6014 3.25867 12.1789C1.89383 11.4757 1.89383 9.5243 3.25867 8.82113C4.07878 8.39861 4.47361 7.44542 4.19247 6.56674C3.7246 5.10445 5.10445 3.7246 6.56674 4.19247C7.44542 4.47361 8.39861 4.07878 8.82113 3.25867Z" fill="#00A3FF"/>
<path d="M13.3631 8.04148C13.5501 7.83108 13.8395 7.82116 14.0595 8C14.2795 8.17884 14.2474 8.45626 14.0604 8.66667L10.6247 12.8238C10.4348 13.0375 10.0983 13.06 9.87912 12.8737L7.52667 10.8737C7.31088 10.6902 7.29144 10.3742 7.48325 10.1678C7.67507 9.96142 8.00549 9.94283 8.22128 10.1263L10.1743 11.7867L13.3631 8.04148Z" fill="white"/>
</svg>}

</h6>

<p className="span-text-light" style={{fontSize:12,}}>

<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:4}}>
<path d="M9.91732 3.50065C9.91732 5.11148 8.61148 6.41732 7.00065 6.41732C5.38982 6.41732 4.08398 5.11148 4.08398 3.50065C4.08398 1.88982 5.38982 0.583984 7.00065 0.583984C8.61148 0.583984 9.91732 1.88982 9.91732 3.50065Z" fill="#5E6278"/>
<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M10.9772 8.23869C10.6176 7.82179 9.99998 7.84327 9.51705 8.1076C8.76973 8.51665 7.91202 8.7492 7 8.7492C6.08798 8.7492 5.23027 8.51665 4.48295 8.1076C4.00001 7.84327 3.38241 7.82179 3.02284 8.23869C2.22963 9.15835 1.75 10.3561 1.75 11.6659V12.2492C1.75 12.8935 2.27233 13.4159 2.91667 13.4159H11.0833C11.7277 13.4159 12.25 12.8935 12.25 12.2492V11.6659C12.25 10.3561 11.7704 9.15835 10.9772 8.23869Z" fill="#5E6278"/>
</svg>{persondata?.username}
&nbsp;&nbsp;&nbsp;

<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"  style={{marginRight:2}}>
<g clip-path="url(#clip0_129_6442)">
<path opacity="0.25" d="M13.3682 12.2376L12.1776 13.4281C12.1776 13.4281 9.08405 14.754 4.66463 10.3346C0.245212 5.91513 1.57104 2.82154 1.57104 2.82154L2.76162 1.63096C3.29951 1.09307 4.18909 1.15629 4.6455 1.76484L5.78192 3.28007C6.15516 3.77772 6.10567 4.47409 5.66581 4.91395L4.66463 5.91513C4.66463 5.91513 4.66463 6.79902 6.4324 8.56678C8.20016 10.3346 9.08405 10.3346 9.08405 10.3346L10.0852 9.33337C10.5251 8.89351 11.2215 8.84402 11.7191 9.21726L13.2343 10.3537C13.8429 10.8101 13.9061 11.6997 13.3682 12.2376Z" fill="#5E6278"/>
<path d="M2.76247 1.63042L2.45577 1.93712L5.10742 5.47266L5.66666 4.91342C6.10652 4.47355 6.15601 3.77719 5.78278 3.27954L4.64635 1.76431C4.18994 1.15576 3.30036 1.09254 2.76247 1.63042Z" fill="#5E6278"/>
<path d="M13.3696 12.2375L13.0629 12.5442L9.52734 9.89258L10.0866 9.33334C10.5264 8.89348 11.2228 8.84399 11.7205 9.21722L13.2357 10.3536C13.8442 10.8101 13.9075 11.6996 13.3696 12.2375Z" fill="#5E6278"/>
</g>
<defs>
<clipPath id="clip0_129_6442">
<rect width="15" height="15" fill="white"/>
</clipPath>
</defs>
</svg>+91 {persondata?.mobile}
&nbsp;&nbsp;&nbsp;
 
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"  style={{marginRight:4}}>
<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M6.99935 2.33268C4.42202 2.33268 2.33268 4.42202 2.33268 6.99935C2.33268 9.57668 4.42202 11.666 6.99935 11.666C7.74543 11.666 8.44905 11.4914 9.07308 11.1812C9.36158 11.0379 9.71169 11.1555 9.85507 11.444C9.99844 11.7325 9.88079 12.0826 9.59228 12.226C8.81053 12.6145 7.92958 12.8327 6.99935 12.8327C3.77769 12.8327 1.16602 10.221 1.16602 6.99935C1.16602 3.77769 3.77769 1.16602 6.99935 1.16602C10.221 1.16602 12.8327 3.77769 12.8327 6.99935V7.00455C12.8327 7.16341 12.8328 7.82272 12.6205 8.45986C12.5121 8.78501 12.3352 9.14601 12.0371 9.43086C11.7251 9.72898 11.308 9.91602 10.791 9.91602C10.4688 9.91602 10.2077 9.65485 10.2077 9.33268C10.2077 9.01052 10.4688 8.74935 10.791 8.74935C11.0032 8.74935 11.1329 8.68118 11.2311 8.58737C11.3432 8.48029 11.4397 8.31265 11.5137 8.09092C11.6635 7.64152 11.666 7.14189 11.666 6.99935C11.666 4.42202 9.57668 2.33268 6.99935 2.33268Z" fill="#5E6278"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.75065 7.00065C8.75065 7.96715 7.96715 8.75065 7.00065 8.75065C6.03415 8.75065 5.25065 7.96715 5.25065 7.00065C5.25065 6.03415 6.03415 5.25065 7.00065 5.25065C7.96715 5.25065 8.75065 6.03415 8.75065 7.00065ZM9.18847 8.92954C8.65402 9.53526 7.87195 9.91732 7.00065 9.91732C5.38982 9.91732 4.08398 8.61148 4.08398 7.00065C4.08398 5.38982 5.38982 4.08398 7.00065 4.08398C7.65726 4.08398 8.26319 4.30095 8.75066 4.66711C8.75077 4.34504 9.01189 4.08398 9.33399 4.08398C9.65615 4.08398 9.91732 4.34515 9.91732 4.66732C9.91732 6.15662 9.92093 7.24276 10.0851 7.96512C10.1654 8.31847 10.2692 8.50785 10.3662 8.60705C10.4435 8.68603 10.5568 8.75065 10.7923 8.75065C11.1145 8.75065 11.3757 9.01182 11.3757 9.33398C11.3757 9.65615 11.1145 9.91732 10.7923 9.91732C10.2987 9.91732 9.86513 9.76319 9.53224 9.4229C9.39065 9.27817 9.2784 9.11088 9.18847 8.92954Z" fill="#5E6278"/>
</svg>{persondata?.email}
&nbsp;&nbsp;&nbsp;

<span className={`span-box-${persondata?.is_active ? "green":"red"}`} >{persondata?.is_active ?"Active":'InActive'}</span></p>
{/* 6 block  */}
<div>
<div  className="tournament-type" >

<div className='center-div' style={{padding:"0.5rem 1rem "}}>
                
                <p className="span-text-light" style={{fontSize:13,marginBottom:0}}>Total Earning </p>
            </div>
            <div className='center-div' style={{padding:"0.5rem 1rem "}}>
                
                <p className="span-text-light" style={{fontSize:13,marginBottom:0}}>Followers</p>
            </div>
            <div className='center-div' style={{padding:"0.5rem 1rem "}}>
                
                <p className="span-text-light" style={{fontSize:13,marginBottom:0}}>Followings</p>
            </div>
</div>
<div  className="tournament-type" style={{marginTop:10}} >

<div className='center-div' style={{padding:"0.5rem 1rem "}}>
                
                <p className="span-text-light" style={{fontSize:13,marginBottom:0}}>Total Earning </p>
            </div>
            <div className='center-div' style={{padding:"0.5rem 1rem "}}>
                
                <p className="span-text-light" style={{fontSize:13,marginBottom:0}}>Followers</p>
            </div>
            <div className='center-div' style={{padding:"0.5rem 1rem "}}>
                
                <p className="span-text-light" style={{fontSize:13,marginBottom:0}}>Followings</p>
            </div>
</div>
</div>
</div>

<div className="d-flex flex-column justify-content-between" >
<div style={{display: 'flex',gridGap:10,height:'fit-content',justifyContent :'flex-end'}}>

<button className="themeButton" onClick={()=>navigate('/Usersdetails/'+persondata?.id)}>Edit</button>

</div>

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

export default Subadmin