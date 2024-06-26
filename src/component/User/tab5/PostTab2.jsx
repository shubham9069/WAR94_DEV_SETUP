import React from 'react'
import Toast from '../../../Toast'
import { useEffect } from 'react'
import axios from '../../../axios'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../../AuthProvider'
import { userTabData } from '../../../dummydata/DummyData'



const PostTab2 = ({ single_user, URL }) => {

  const { userToken } = useContext(AuthContext)

  return (
    <>
      {userTabData.tab5.followers.map((details) => {

        return <div className="followers-box padding15rem center-div" style={{ flex: 1 }}>
          <img src={details?.avatar} style={{ width: 80, height: 80, borderRadius: '50%' }}></img>

          <h6 style={{ fontWeight: 800, marginBottom: 0 }}>{details?.name}</h6>
          <p className="span-text-light" style={{ fontWeight: 800, marginBottom: 0 }}>{details?.username}</p>

          <div className="d-flex" style={{ gridGap: 15 }}>
            <div style={{ padding: '1rem 2.5rem 1rem 1rem ', border: '1.04481px dashed #E4E6EF', borderRadius: '6.26885px' }}>
              <p className='span-text-dark' style={{ marginBottom: 0, fontWeight: 900, fontSize: 18 }}>{details.followers}</p>
              <span className='span-text-light'>Followers</span>
            </div>
            <div style={{ padding: '1rem 2.5rem 1rem 1rem ', border: '1.04481px dashed #E4E6EF', borderRadius: '6.26885px' }}>
              <p className='span-text-dark' style={{ marginBottom: 0, fontWeight: 900, fontSize: 18 }}>{details.following}</p>
              <span className='span-text-light'>Following</span>
            </div>
          </div>
        </div>
      })}
    </>
  )
}

export default PostTab2