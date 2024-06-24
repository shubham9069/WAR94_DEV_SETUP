import React, { useState } from 'react'
import { userTabData } from '../../../dummydata/DummyData'

const Tab8 = () => {
  const [tab, setTab] = useState(1)

  return (
    <>
      <div className="tab7 padding15rem">

        <div className='between-div' style={{ borderBottom: '1px solid #EFF2F5' }}>
          <h5 style={{ fontWeight: 900, color: '#3F4254', marginBottom: 0 }}>Joining Match</h5>
          <div className='d-flex' style={{ gridGap: 15 }}>
            <span className='span-text-light'>Last  update - 1-10-2022 12:42 PM</span>
            <span className={tab == 1 ? "span-text-dark" : 'span-text-light'} style={{ paddingBottom: '1rem', borderBottom: tab == 1 ? '2px solid #00A3FF' : "none" }} onClick={() => setTab(1)}>Game Character </span>
            <span className={tab == 2 ? "span-text-dark" : 'span-text-light'} style={{ paddingBottom: '1rem', borderBottom: tab == 2 ? '2px solid #00A3FF' : "none" }} onClick={() => setTab(2)}>History</span>

          </div>
        </div>
        <div className="matchlist-table">
          <table style={{ width: '100%' }} >
            <tr>
              <th>Game name</th>
              <th>Character Id </th>
              <th>IGN</th>
              <th>update  </th>
            </tr>
            {userTabData.tab8.characterList?.map((a) => {

              return <tr>
                <td style={{ color: '#7E8299', fontSize: 14 }}>{a?.game_id}</td>
                {/* type 1 = add 2= join tournament 0= withdraw money */}
                <td><span className="span-box">
                  <img src={a.avatar} style={{ height: 30, width: 30, marginRight: '10px' }}></img>
                  {a?.character_id}</span></td>
                {/* 1 = Paytm wallet 2 =Amazon pay 3= UPI 4= bank details */}
                <td style={{ color: '#7E8299', fontSize: 14 }}>{a?.ign}</td>
                <td style={{ color: '#7E8299', fontSize: 14 }}>{new Date(a?.updated_at).toDateString()} &emsp;{new Date(a?.updated_at).toLocaleTimeString()}</td>
              </tr>
            })}
          </table>
        </div>
      </div>

    </>
  )
}

export default Tab8