import React, { useState } from 'react'
import PersonDetails from '../User/PersonDetails'
import { useLocation } from 'react-router-dom'
import LiveChat from './LiveChat'
import { userDataDummy } from '../../dummydata/DummyData'

const Details = () => {
  const location = useLocation()
  const [tab, setTab] = useState(1)
  return (
    <>
      <div className="event-top padding15rem">
        <span className='span-text-light'>Home </span>
        <span className='span-text-light'> / </span>
        <span className='span-text-dark'> {location?.pathname?.split('/')[1]} </span>

      </div>
      <div className="padding15rem">
        <PersonDetails persondata={userDataDummy[0]} />
        <div className="tab7 padding15rem" style={{ paddingBottom: 0 }}>
          <div className='between-div' style={{}}>
            <h5 style={{ fontWeight: 900, color: '#3F4254', marginBottom: '1.5rem' }}>Live Support</h5>
            <div className='d-flex' style={{ gridGap: 15 }}>
              <span className={tab == 1 ? "span-text-dark" : 'span-text-light'} style={{ paddingBottom: '1.5rem', borderBottom: tab == 1 ? '2px solid #00A3FF' : "none" }} onClick={() => setTab(1)}>New Ticket </span>
              <span className={tab == 2 ? "span-text-dark" : 'span-text-light'} style={{ paddingBottom: '1.5rem', borderBottom: tab == 2 ? '2px solid #00A3FF' : "none" }} onClick={() => setTab(2)}>Current Support</span>
              <span className={tab == 3 ? "span-text-dark" : 'span-text-light'} style={{ paddingBottom: '1.5rem', borderBottom: tab == 3 ? '2px solid #00A3FF' : "none" }} onClick={() => setTab(3)}>Resolve </span>


            </div>
          </div>
        </div>

        <LiveChat />
      </div>


    </>
  )
}

export default Details