import React from 'react'
import PostTab1 from '../User/tab5/PostTab1'
import { useContext } from 'react'
import { AuthContext } from '../../AuthProvider'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { userTabData } from '../../dummydata/DummyData'

const Posts = () => {
  const location = useLocation()
  
  const [posts, setposts] = useState(userTabData.tab5.postData)
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