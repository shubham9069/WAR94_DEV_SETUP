import React, { useState } from 'react'

const Referal = () => {
  const [tab, setTab] = useState(1)
  return (
    <>
      <div className="user-permission-tab padding15rem">
        <div className='d-flex justify-content-between' style={{ borderBottom: '1px solid #EFF2F5', }}>
          <h5 style={{ fontWeight: 900, color: '#3F4254', marginBottom: 0 }}>Referral</h5>
          <div className='d-flex' style={{ gridGap: 15 }}>
            <span className={tab == 1 ? "span-text-dark" : 'span-text-light'} style={{ cursor: 'pointer', paddingBottom: '1rem', borderBottom: tab == 1 ? '2px solid #00A3FF' : 'none' }} onClick={() => setTab(1)}>Referral</span>
            <span className={tab == 2 ? "span-text-dark" : 'span-text-light'} style={{ cursor: 'pointer', paddingBottom: '1rem', borderBottom: tab == 2 ? '2px solid #00A3FF' : 'none' }} onClick={() => setTab(2)}>View All</span>


          </div>
        </div>

        <div className='d-flex' style={{ gridGap: 20, margin: '1.5rem 0', flexWrap: 'wrap' }}>
          {[...Array(4)]?.map((a, b) => {

            return <div className=' dropdown-toggle center-div' style={{ flexDirection: 'column', minWidth: 215, cursor: 'pointer', padding: '1rem', border: '1.04481px dashed rgb(228, 230, 239)', borderRadius: 6.26885, width: 180 }} data-bs-toggle="dropdown" aria-expanded="false">
              <span className='span-text-light' style={{ color: b == 1 ? "#7239EA" : b == 2 ? "#50CD89" : "#00A3FF" }}>Followers</span>
              <p className='span-text-dark' style={{ marginBottom: 0, fontWeight: 900, fontSize: 18 }}>30</p>


            </div>


          })}

        </div>

        <div >
          <p style={{ fontSize: 14, color: '#3F4254', marginBottom: 0 }}>Payment method change</p>
          <span className="span-text-light" style={{ fontSize: 12 }}>4:23 PM by <span style={{ color: '#E9B500' }}>In Procees</span></span>

          <div className='center-div tab1-right-div' style={{ background: '#FFF8DD', border: '1px dashed #E9B500' }}>

            <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.25" d="M6.12913 13.3333H11.6369V22.6666H14.3908V13.3333H19.8985V22.6666H22.6524V13.3333H28.1602V22.6666C29.6811 22.6666 30.9141 23.8605 30.9141 25.3333V26.6666C30.9141 28.1393 29.6811 29.3333 28.1602 29.3333H6.12913C4.6082 29.3333 3.37524 28.1393 3.37524 26.6666V25.3333C3.37524 23.8605 4.6082 22.6666 6.12913 22.6666V13.3333Z" fill="#E9B500" />
              <path d="M3.37524 9.8054C3.37524 8.71499 4.06083 7.73443 5.10636 7.32947L16.1219 3.0628C16.7784 2.80849 17.5109 2.80849 18.1674 3.0628L29.1829 7.32947C30.2285 7.73443 30.9141 8.71499 30.9141 9.8054V10.6666C30.9141 12.1394 29.6811 13.3333 28.1602 13.3333H6.12913C4.6082 13.3333 3.37524 12.1394 3.37524 10.6666V9.8054Z" fill="#E9B500" />
            </svg>

            <p style={{ flex: 1, marginBottom: 0, fontWeight: 600, fontSize: 15 }}>Withdraw Request
              <p style={{ color: '#7E8299', fontSize: 13, fontWeight: 500, marginBottom: 0 }}>Withdraw money to your bank account. ₹1200</p>
            </p>

            <button className="themeButton" style={{ background: '#E9B500', borderColor: 'transparent' }}>View</button>
          </div>
        </div>

        <h5 style={{ fontWeight: 900, color: '#3F4254', margin: '1.5rem 0' }}> Recent Referral</h5>

        <table style={{ width: '100%' }} >
          <tr>
            <th style={{ fontWeight: 500, paddingBottom: '1rem' }}>Name</th>
            <th style={{ fontWeight: 500, paddingBottom: '1rem' }}>Earnings</th>
            <th style={{ fontWeight: 500, paddingBottom: '1rem' }}>Leaderboard Position</th>
            <th style={{ fontWeight: 500, paddingBottom: '1rem' }}>Date</th>

          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center" style={{ gridGap: 10 }}>
                <img src="images/Users.png" style={{ width: 40, height: 40, borderRadius: '50%' }}></img>
                <div style={{ lineHeight: '15px' }}>
                  <p style={{ marginBottom: 0 }}> Rahul</p>
                  <spans style={{ fontSize: 12, color: '#B5B5C3' }}> rahulsjs</spans>
                </div>
              </div>
            </td>
            <td><span className="span-text-light" >4521</span></td>
            <td><span className="span-text-light" >#4</span></td>
            <td><span className="span-text-light">22 Aug 2022, 12:22 PM </span></td>


          </tr>

        </table>

      </div>
    </>
  )
}

export default Referal