import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PersonDetails from './PersonDetails';


const Users = () => {
  const location = useLocation();
  const navigate = useNavigate()
  return (
    <>
<div className="event-top padding15rem">
    <span className='span-text-light'>Home </span>
    <span className='span-text-light'> / </span>
    <span className='span-text-dark'> {location?.pathname?.split('/')[1]}</span>

    </div>
    <div className="users padding15rem">
    <div className="user-search ">
         <span id="blackspan">
         
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:5}}>
<path d="M9.91732 3.50065C9.91732 5.11148 8.61148 6.41732 7.00065 6.41732C5.38982 6.41732 4.08398 5.11148 4.08398 3.50065C4.08398 1.88982 5.38982 0.583984 7.00065 0.583984C8.61148 0.583984 9.91732 1.88982 9.91732 3.50065Z" fill="#F9F9F9"/>
<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M10.9772 8.23869C10.6176 7.82179 9.99998 7.84327 9.51705 8.1076C8.76973 8.51665 7.91202 8.7492 7 8.7492C6.08798 8.7492 5.23027 8.51665 4.48295 8.1076C4.00001 7.84327 3.38241 7.82179 3.02284 8.23869C2.22963 9.15835 1.75 10.3561 1.75 11.6659V12.2492C1.75 12.8935 2.27233 13.4159 2.91667 13.4159H11.0833C11.7277 13.4159 12.25 12.8935 12.25 12.2492V11.6659C12.25 10.3561 11.7704 9.15835 10.9772 8.23869Z" fill="#F9F9F9"/>
</svg>
560K Total Users</span>
            <select >
                <option selected hidden >Tournament Type</option>
                <option >Games</option>
                <option >Games</option>
            </select>
            <input type='text' placeholder='search'></input>
            <button className='themeButton'>Search</button>
            <button className='themeButton link-a' style={{backgroundColor:' #EEF6FF',borderColor:'transparent',color:'#3E97FF'}}>
            
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M4.63315 1.67739C3.07709 1.8829 1.8829 3.07709 1.67739 4.63315C1.5361 5.70291 1.41602 7.04108 1.41602 8.49935C1.41602 9.95761 1.5361 11.2958 1.67739 12.3655C1.8829 13.9216 3.07709 15.1158 4.63315 15.3213C5.70291 15.4626 7.04108 15.5827 8.49935 15.5827C9.95761 15.5827 11.2958 15.4626 12.3655 15.3213C13.9216 15.1158 15.1158 13.9216 15.3213 12.3655C15.4626 11.2958 15.5827 9.95761 15.5827 8.49935C15.5827 7.04108 15.4626 5.70291 15.3213 4.63315C15.1158 3.07709 13.9216 1.8829 12.3655 1.67739C11.2958 1.5361 9.95761 1.41602 8.49935 1.41602C7.04108 1.41602 5.70291 1.5361 4.63315 1.67739Z" fill="#2884EF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50065 12.0423C8.89185 12.0423 9.20898 11.7252 9.20898 11.334V9.20898H11.334C11.7252 9.20898 12.0423 8.89185 12.0423 8.50065C12.0423 8.10945 11.7252 7.79232 11.334 7.79232H9.20898V5.66732C9.20898 5.27612 8.89185 4.95898 8.50065 4.95898C8.10945 4.95898 7.79232 5.27612 7.79232 5.66732V7.79232H5.66732C5.27612 7.79232 4.95898 8.10945 4.95898 8.50065C4.95898 8.89185 5.27612 9.20898 5.66732 9.20898H7.79232V11.334C7.79232 11.7252 8.10945 12.0423 8.50065 12.0423Z" fill="#2884EF"/>
</svg>
Add User</button>
        </div>


{[...Array(3)]?.map((a)=>{

return <PersonDetails />
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

export default Users