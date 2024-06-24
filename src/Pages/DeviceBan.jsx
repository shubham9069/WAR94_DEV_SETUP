import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const DeviceBan = () => {
  const location = useLocation()
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
                <th>User-Id</th>
                <th>Device Id</th>
                <th>Device Modal</th>
                <th>Date</th>




              </tr>
              {[...Array(4)]?.map((a) => {

                return <tr>


                  <td>
                    <Dropdown style={{ width: '100%' }}>
                      <Dropdown.Toggle style={{ border: 'none', background: 'transparent', width: '100%' }} id="dropdown-basic">
                        <button className='themeButton' style={{ background: "#F5F8FA", color: "#A1A5B7", }}>edit</button>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="post-dropdown" >
                        <ul className="post-dropdown">
                          <li>
                            <p>Iphone 14</p>
                            <input type="checkbox" className='event-toggle' color='green' style={{ position: 'relative', top: 0, left: 0 }}></input>
                          </li>
                          <li>
                            <p>Samsung s20</p>
                            <input type="checkbox" className='event-toggle' color='green' style={{ position: 'relative', top: 0, left: 0 }}></input>
                          </li>
                        </ul>
                      </Dropdown.Menu>
                    </Dropdown>
                    </td>
                  <td> <p style={{ color: '#7E8299', fontSize: 14 }}>@devil432</p></td>
                  <td> <span className='span-box' style={{ color: '#7E8299', background: '#F9F9F9' }}>4581139547</span></td>
                  <td> <p style={{ color: '#7E8299', fontSize: 14 }}>iphone 14 </p></td>
                  <td style={{ color: '#7E8299', fontSize: 14 }}>5 Nov 2022 - 12:44 PM</td>






                </tr>
              })}


            </table>
          </div>

        </div>
      </div>
    </>
  )
}

export default DeviceBan