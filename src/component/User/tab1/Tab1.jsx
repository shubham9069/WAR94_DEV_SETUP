import React from 'react'
import { TimePeriod, userTabData } from '../../../dummydata/DummyData'

const Tab1 = () => {
  return (
    <>
      <div className='tabinfo padding15rem'>
        <div className='between-div' style={{ borderBottom: '1px solid #EFF2F5' }}>
          <h5 style={{ fontWeight: 900, color: '#3F4254', marginBottom: 0 }}>Sep 21, 2022</h5>
          <div className='d-flex' style={{ gridGap: 15 }}>
            {TimePeriod?.map((item, i) => {
              return <span className='span-text-light' style={i == 0 ? { paddingBottom: '1rem', borderBottom: '2px solid #00A3FF' } : {}}>{item}</span>
            })}


          </div>
        </div>

        <div className='tab1-block' style={{ marginTop: '2rem' }}>
          <div className='d-flex align-items-center tab1-left' style={{ flexDirection: 'column' }}>
            <div className='center-div' style={{ minWidth: 36, minHeight: 36, backgroundColor: ' #EFF2F5', borderRadius: '50%' }}>


              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.66675 2C3.11446 2 2.66675 2.44772 2.66675 3V13C2.66675 13.5523 3.11446 14 3.66675 14C4.21903 14 4.66675 13.5523 4.66675 13V3C4.66675 2.44772 4.21903 2 3.66675 2ZM7.00007 2C6.44779 2 6.00007 2.44772 6.00007 3V13C6.00007 13.5523 6.44779 14 7.00007 14C7.55236 14 8.00007 13.5523 8.00007 13V3C8.00007 2.44772 7.55236 2 7.00007 2Z" fill="#7E8299" />
                <rect opacity="0.3" x="8.98486" y="2.61609" width="2" height="12" rx="1" transform="rotate(-19 8.98486 2.61609)" fill="#7E8299" />
              </svg>

            </div>
            <img src='images/Rectangle.png'></img>
          </div>
          <div className='tab1-right w-100'>
            <p style={{ fontSize: 14, color: '#3F4254', marginBottom: 0 }}>Upcoming event</p>
            <span className="span-text-light" style={{ fontSize: 12 }}>4:23 PM by <span style={{ color: '#00A3FF' }}>Rahul Kumar</span></span>

            {userTabData.tab1.event.map((obj, i) => {
              return <div className='center-div tab1-right-div '>

                <h6 style={{ flex: 1, marginBottom: 0, fontWeight: 600 }}>{obj?.event_name}</h6>
                <span className="span-box" style={{ color: '#A1A5B7', background: '#F5F8FA' }}>{obj?.date}</span>
                <span className="span-box" style={obj?.status == 'Joined' ? { color: '#50CD89', background: '#E8FFF3' } : { color: '#00A3FF' }}>{obj?.status}</span>
                <span className="span-box" style={{ color: '#A1A5B7', background: '#F5F8FA', marginLeft: 18 }}>{obj?.btn_name}</span>
              </div>
            })}
          </div>

        </div>
        <div className='tab1-block'>
          <div className='d-flex align-items-center tab1-left' style={{ flexDirection: 'column' }}>
            <div className='center-div' style={{ minWidth: 36, minHeight: 36, backgroundColor: ' #EFF2F5', borderRadius: '50%' }}>


              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.66675 2C3.11446 2 2.66675 2.44772 2.66675 3V13C2.66675 13.5523 3.11446 14 3.66675 14C4.21903 14 4.66675 13.5523 4.66675 13V3C4.66675 2.44772 4.21903 2 3.66675 2ZM7.00007 2C6.44779 2 6.00007 2.44772 6.00007 3V13C6.00007 13.5523 6.44779 14 7.00007 14C7.55236 14 8.00007 13.5523 8.00007 13V3C8.00007 2.44772 7.55236 2 7.00007 2Z" fill="#7E8299" />
                <rect opacity="0.3" x="8.98486" y="2.61609" width="2" height="12" rx="1" transform="rotate(-19 8.98486 2.61609)" fill="#7E8299" />
              </svg>

            </div>
            <img src='images/Rectangle.png'></img>
          </div>
          <div className='tab2-right w-100'>
            <p style={{ fontSize: 14, color: '#3F4254', marginBottom: 0 }}>Payment Request</p>
            <span className="span-text-light" style={{ fontSize: 12 }}>4:23 PM by <span style={{ color: '#00A3FF' }}>Rahul Kumar</span></span>

            <div className='center-div tab1-right-div' style={{ background: '#F1FAFF', border: '1px dashed #00A3FF' }}>

              <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.25" d="M6.12913 13.3333H11.6369V22.6666H14.3908V13.3333H19.8985V22.6666H22.6524V13.3333H28.1602V22.6666C29.6811 22.6666 30.9141 23.8605 30.9141 25.3333V26.6666C30.9141 28.1393 29.6811 29.3333 28.1602 29.3333H6.12913C4.6082 29.3333 3.37524 28.1393 3.37524 26.6666V25.3333C3.37524 23.8605 4.6082 22.6666 6.12913 22.6666V13.3333Z" fill="#00A3FF" />
                <path d="M3.37524 9.8054C3.37524 8.71499 4.06083 7.73443 5.10636 7.32947L16.1219 3.0628C16.7784 2.80849 17.5109 2.80849 18.1674 3.0628L29.1829 7.32947C30.2285 7.73443 30.9141 8.71499 30.9141 9.8054V10.6666C30.9141 12.1394 29.6811 13.3333 28.1602 13.3333H6.12913C4.6082 13.3333 3.37524 12.1394 3.37524 10.6666V9.8054Z" fill="#00A3FF" />
              </svg>

              <p style={{ flex: 1, marginBottom: 0, fontWeight: 600, fontSize: 15 }}>Pubg Mobile
                <p style={{ color: '#7E8299', fontSize: 13, fontWeight: 500, marginBottom: 0 }}>Withdraw money to your bank account. ₹1200</p>
              </p>
              <button className='themeButton'>Withdraw</button>
            </div>

          </div>

        </div>
        <div className='tab1-block'>
          <div className='d-flex align-items-center tab1-left' style={{ flexDirection: 'column' }}>
            <div className='center-div' style={{ minWidth: 36, minHeight: 36, backgroundColor: ' #EFF2F5', borderRadius: '50%' }}>


              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.66675 2C3.11446 2 2.66675 2.44772 2.66675 3V13C2.66675 13.5523 3.11446 14 3.66675 14C4.21903 14 4.66675 13.5523 4.66675 13V3C4.66675 2.44772 4.21903 2 3.66675 2ZM7.00007 2C6.44779 2 6.00007 2.44772 6.00007 3V13C6.00007 13.5523 6.44779 14 7.00007 14C7.55236 14 8.00007 13.5523 8.00007 13V3C8.00007 2.44772 7.55236 2 7.00007 2Z" fill="#7E8299" />
                <rect opacity="0.3" x="8.98486" y="2.61609" width="2" height="12" rx="1" transform="rotate(-19 8.98486 2.61609)" fill="#7E8299" />
              </svg>

            </div>
            <img src='images/Rectangle.png'></img>
          </div>
          <div className='tab2-right w-100'>
            <p style={{ fontSize: 14, color: '#3F4254', marginBottom: 0 }}><span style={{ color: '#00A3FF' }}>Rahul kumar </span> Reported Hacker</p>
            <span className="span-text-light" style={{ fontSize: 12 }}>4:23 PM by <span style={{ color: '#00A3FF' }}>Rahul Kumar</span></span>

            <div className='center-div tab1-right-div' style={{ background: '#FFF5F8', border: '1px dashed #F1416C' }}>


              <p style={{ flex: 1, marginBottom: 0, fontWeight: 600, fontSize: 15 }}>Pubg Mobile

              </p>
              <button className='themeButton' style={{ background: '#F1416C', borderColor: 'transparent' }}>Mark As Hacker</button>
            </div>

          </div>

        </div>
        <div className='tab1-block'>
          <div className='d-flex align-items-center tab1-left' style={{ flexDirection: 'column' }}>
            <div className='center-div' style={{ minWidth: 36, minHeight: 36, backgroundColor: ' #EFF2F5', borderRadius: '50%' }}>


              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.66675 2C3.11446 2 2.66675 2.44772 2.66675 3V13C2.66675 13.5523 3.11446 14 3.66675 14C4.21903 14 4.66675 13.5523 4.66675 13V3C4.66675 2.44772 4.21903 2 3.66675 2ZM7.00007 2C6.44779 2 6.00007 2.44772 6.00007 3V13C6.00007 13.5523 6.44779 14 7.00007 14C7.55236 14 8.00007 13.5523 8.00007 13V3C8.00007 2.44772 7.55236 2 7.00007 2Z" fill="#7E8299" />
                <rect opacity="0.3" x="8.98486" y="2.61609" width="2" height="12" rx="1" transform="rotate(-19 8.98486 2.61609)" fill="#7E8299" />
              </svg>

            </div>
            <img src='images/Rectangle.png'></img>
          </div>
          <div className='tab2-right w-100'>
            <p style={{ fontSize: 14, color: '#3F4254', marginBottom: 0 }}>Add Posts</p>
            <span className="span-text-light" style={{ fontSize: 12 }}>4:23 PM by <span style={{ color: '#00A3FF' }}>Rahul Kumar</span></span>

            <div className='d-flex' style={{ gridGap: 20, margin: '1rem 0' }}>
              <img src="https://www.91-cdn.com/hub/wp-content/uploads/2021/12/ar88u.jpg" style={{ width: 200, height: 200, borderRadius: 6, objectFit: 'cover' }}></img>
              <img src="https://www.91-cdn.com/hub/wp-content/uploads/2021/12/ar88u.jpg" style={{ width: 200, height: 200, borderRadius: 6, objectFit: 'cover' }}></img>
              <img src="https://www.91-cdn.com/hub/wp-content/uploads/2021/12/ar88u.jpg" style={{ width: 200, height: 200, borderRadius: 6, objectFit: 'cover' }}></img>
            </div>

          </div>

        </div>

        <div className='tab1-block'>
          <div className='d-flex align-items-center tab1-left' style={{ flexDirection: 'column' }}>
            <div className='center-div' style={{ minWidth: 36, minHeight: 36, backgroundColor: ' #EFF2F5', borderRadius: '50%' }}>


              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.66675 2C3.11446 2 2.66675 2.44772 2.66675 3V13C2.66675 13.5523 3.11446 14 3.66675 14C4.21903 14 4.66675 13.5523 4.66675 13V3C4.66675 2.44772 4.21903 2 3.66675 2ZM7.00007 2C6.44779 2 6.00007 2.44772 6.00007 3V13C6.00007 13.5523 6.44779 14 7.00007 14C7.55236 14 8.00007 13.5523 8.00007 13V3C8.00007 2.44772 7.55236 2 7.00007 2Z" fill="#7E8299" />
                <rect opacity="0.3" x="8.98486" y="2.61609" width="2" height="12" rx="1" transform="rotate(-19 8.98486 2.61609)" fill="#7E8299" />
              </svg>

            </div>
          </div>
          <div className='tab2-right w-100'>
            <p style={{ fontSize: 14, color: '#3F4254', marginBottom: 0 }}>Recent conversation in World Chat <span style={{ color: '#00A3FF' }}>Gamerstan</span></p>
            <span className="span-text-light" style={{ fontSize: 12 }}>4:23 PM by <span style={{ color: '#00A3FF' }}>Rahul Kumar</span></span>


            <button className="themeButton" style={{ margin: '1rem 0' }}>view</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tab1