
import React from 'react'
import { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { reportedUser } from '../../dummydata/DummyData'

const Report = ({ URL }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [data, setData] = useState(reportedUser)

  return (
    <>
      <div className="event-top padding15rem">
        <span className='span-text-light'>Home </span>
        <span className='span-text-light'> / </span>
        <span className='span-text-dark'> {location?.pathname?.split('/')[1]} </span>

      </div>
      <div className="report padding15rem">
        <div>

          <div className='between-div' style={{ borderBottom: '1px solid #EFF2F5' }}>
            <h5 style={{ fontWeight: 900, color: '#3F4254', marginBottom: 0 }}>Sep 21, 2022</h5>
            <div className='d-flex' style={{ gridGap: 15 }}>
              <span className='span-text-light' style={{ paddingBottom: '1rem', borderBottom: '2px solid #00A3FF' }}>Today</span>
              <span className='span-text-light'>Week</span>
              <span className='span-text-light'>Month</span>
              <span className='span-text-light'>2022</span>
            </div>
          </div>
          <div className="matchlist-table">
            <table style={{ width: '100%' }} >
              <tr>
                <th>Action</th>
                <th>Status</th>
                <th>User Name</th>
                <th>Reported By</th>
                <th>Date</th>
                <th>Reason</th>
                <th>Proof</th>
              </tr>
              {data?.map((a) => {

                return <tr>
                  <td><button className='themeButton' style={{ background: "#F5F8FA", color: "#A1A5B7", }}>edit</button></td>
                  <td>{a?.status ? <p className='span-box-green'>Resolved</p> : <p className='span-box-red'>Pending</p>}</td>
                  <td onClick={() => navigate("/Usersdetails/" + a?.reported_user?.id)}> <p style={{ color: '#7E8299', fontSize: 14, cursor: 'pointer' }}>{a?.reported_user?.username}<br /><span style={{ color: '#B5B5C3', fontSize: 12 }}>{a?.reported_user?.name}</span> <span className="span-box" style={{ padding: '5px 10px', background: '#181C32', color: 'white', fontSize: 8 }}>+10</span></p></td>
                  <td> <p style={{ color: '#7E8299', fontSize: 14 }}>{a?.reported_by?.username}<br /><span style={{ color: '#B5B5C3', fontSize: 12 }}>{a?.reported_by?.name}</span></p></td>
                  <td style={{ color: '#7E8299', fontSize: 14 }}>{new Date(a?.created_at).toDateString()} &emsp;{new Date(a?.created_at).toLocaleTimeString()}</td>
                  <td> <span className='span-box' style={{ color: '#7E8299', background: '#F4F4F4' }}>{a?.remark}</span></td>
                  <td> <Link to={"/report-post-view/" + a?.reported_post_id} target='_blank' style={{ color: '#7E8299', fontSize: 14, textDecoration: 'none' }}>View  </Link>
                  </td>
                </tr>
              })}
            </table>
          </div>

        </div>
      </div>
    </>
  )
}

export default Report