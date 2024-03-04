import React from 'react'
import PostTab1 from '../User/tab5/PostTab1'
import { useContext } from 'react'
import { AuthContext } from '../../AuthProvider'
import { useState } from 'react'
import axios from '../../axios'
import Toast from '../../Toast'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Posts = () => {
  const location = useLocation()
    const {userToken} = useContext(AuthContext)
    const [posts,setposts] = useState([])
   
    const getpost = async()=>{
      try{
        
        const response = await axios({
          method: "get",
          url: `/get_all_posts`,
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
      <div className="event-top padding15rem">
    <span className='span-text-light'>Home </span>
    <span className='span-text-light'> / </span>
    <span className='span-text-dark'> {location?.pathname?.split('/')[1]} </span>

    </div>
    <div className="tab5-container padding15rem" >
    
        <PostTab1 setposts={setposts} posts={posts} />
        </div>
       
        </>
  )
}

export default Posts