import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


const Tournament_details = () => {
    const location = useLocation()
    const navigate = useNavigate()
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

        {[...Array(3)]?.map((a)=>{

            return<>
            <div style={{background:'white',margin:'1.5rem 0 ',borderRadius:12}}  >
             <div className="userList" style={{margin:0,borderRadius:0}}>
        <img src="images/eventgame.jpg" style={{width:170,height:170,borderRadius:6}}></img>

        <div style={{flex:1}}>
            <h6  style={{marginBottom:26,fontWeight:600,color:'#3F4254'}}>BGMI 
            <span className="span-box" style={{marginLeft:10,background:'#F4F4F4',color:"#A1A5B7"}}>Fetaured</span>
            <span className="span-box-green" style={{marginLeft:10}}>completed</span>
            <span className="span-box" style={{marginLeft:10,background:'#EEE5FF',color:"#8950FC"}}>https://bitly.com/pages/pricing</span></h6>
           
            <p className="span-text-light" style={{fontSize:12,}}>Tounament Type - <strong>solo</strong> &nbsp; Tounament Date - <strong>24 Oct 6:32 PM</strong> </p>
            <div  className="tournament-type" >
            
            <div>
                <h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>76898789</h5>
                <p className="span-text-light" style={{fontSize:13,marginBottom:0}}>Room ID  </p>
            </div>
            <div>
                <h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>9809</h5>
                <p className="span-text-light" style={{fontSize:13,marginBottom:0}}>Password</p>
            </div>
           
            </div>
        </div>

        <div className="d-flex flex-column justify-content-between" >
<div style={{display: 'flex',gridGap:10,height:'fit-content',justifyContent :'flex-end'}}>
<button className="themeButton" style={{backgroundColor:'#F4F4F4',color:' #A1A5B7',borderColor:'#F4F4F4'}}>Delete</button>
<button className="themeButton" onClick={()=>navigate('/Rooms_Details')}>Edit</button>

</div>
<div>
<p className='span-text-light'>People Joined <span className='span-text-dark float-end' >64</span></p>
<div className='progressbar'>
  <div style={{width:64*2}}/>
</div>
</div>
</div>
        </div>
       
        <div className="center-div" style={{border: '1px solid #EFF2F5',padding: '1rem',gridGap:20}}>
        {[...Array(5)]?.map((a,i)=>{

            return  <span className="span-text-dark" style={{fontWeight: 500}}>Rank {i+1} &nbsp;-&nbsp;<span className="span-text-light" style={{color:'#7E8299',}}>₹140</span></span>

            })}
       
        </div>
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