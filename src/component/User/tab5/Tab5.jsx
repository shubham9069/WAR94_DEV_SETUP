import React, { useContext, useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import PostTab1 from './PostTab1';
import PostTab2 from './PostTab2';
import axios from '../../../axios';
import Toast from '../../../Toast';
import { AuthContext } from '../../../AuthProvider';


const Tab5 = ({single_user,}) => {
  const {userToken} = useContext(AuthContext)
    const [tab,setTab]=useState(1);
    const [posts,setposts] = useState([])
   
    const getpost = async()=>{
      try{
        
        const response = await axios({
          method: "get",
          url: `/get-all?user_id=${single_user?.id}`,
          headers:{
          'Authorization': `Bearer ${userToken} `,
          
          },
        })
       
          
        if(response.status===200){
          const data = response.data;
          setposts(data?.posts)
        }
      } catch (err) {
        const error = err.response.data
        Toast(error.message);
        
      }  
    }
    useEffect(()=>{
      getpost()
    },[])
  
  return (
    <>
    <div className='tabinfo padding15rem' style={{marginBottom:'1.5rem'}}>

    <div className='d-flex justify-content-between'  >
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>Post</h5>
<div className='d-flex' style={{gridGap:15}}>
    <span className={tab==1 ?"span-text-dark":'span-text-light'} style={{cursor:'pointer',paddingBottom:'1rem', borderBottom:tab==1? '2px solid #00A3FF':'none'}} onClick={()=>setTab(1)}>Recent Post</span>
    <span className={tab==2 ?"span-text-dark":'span-text-light'} style={{cursor:'pointer',paddingBottom:'1rem', borderBottom:tab==2? '2px solid #00A3FF':'none' }} onClick={()=>setTab(2)}>Followers</span>
    <span className={tab==3 ?"span-text-dark":'span-text-light'} style={{cursor:'pointer',paddingBottom:'1rem', borderBottom:tab==3? '2px solid #00A3FF':'none' }} onClick={()=>setTab(3)}>Following</span>
    <span className={tab==4 ?"span-text-dark":'span-text-light'} style={{cursor:'pointer',paddingBottom:'1rem', borderBottom:tab==4? '2px solid #00A3FF':'none' }} onClick={()=>setTab(4)}>Blocked</span>
    
</div>
</div>
    </div>
    
    <div className="tab5-container">
    
    {tab==1 &&(<PostTab1 posts={posts} single_user={single_user} setposts={setposts} />)}
    {tab==2 &&(<PostTab2  single_user={single_user} URL="/get-followers"/>)}
    {tab==3 &&(<PostTab2  single_user={single_user} URL="/get-followings"/>)}
    {tab==4 &&(<PostTab2   single_user={single_user} URL="/get_blocked_users" />)}
    </div>



   

    </>
  )
}

export default Tab5