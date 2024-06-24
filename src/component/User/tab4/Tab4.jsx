import React, { useState } from 'react'
import { userTabData } from '../../../dummydata/DummyData'

const Tab4 = () => {
  const [tab, setTab] = useState(1)
  return (
    <>
      <div className='tabinfo padding15rem'>
        <div className='d-flex justify-content-between' style={{ borderBottom: '1px solid #EFF2F5' }}>
          <h5 style={{ fontWeight: 900, color: '#3F4254', marginBottom: 0 }}>Card</h5>
          <div className='d-flex' style={{ gridGap: 15 }}>
            <span className={tab == 1 ? "span-text-dark" : 'span-text-light'} style={{ cursor: 'pointer', paddingBottom: '1rem', borderBottom: tab == 1 ? '2px solid #00A3FF' : 'none' }} onClick={() => setTab(1)}>Credit Card</span>
            <span className={tab == 2 ? "span-text-dark" : 'span-text-light'} style={{ cursor: 'pointer', paddingBottom: '1rem', borderBottom: tab == 2 ? '2px solid #00A3FF' : 'none' }} onClick={() => setTab(2)}>PayPal</span>

          </div>
        </div>

        {userTabData.tab4.saveCard.map((obj) => {
          return <div className='tab4-card'>
            <p className='span-text-dark' style={{ fontWeight: 500 }}>{obj.name} {obj.type && <span className='span-box' style={{ color: '#50CD89', background: '#E8FFF3', marginLeft: 10 }}>{obj.type}</span>}</p>
            <div className='d-flex justify-content-between' style={{ gridGap: 15 }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" style={{ width: 50, objectFit: 'contain' }}></img>
              <div style={{ flex: 1, marginLeft: 10 }}>

                <p className='span-text-dark' style={{ marginBottom: 0, fontWeight: 600 }}>{obj.cardDetails.card_no}</p>
                <p style={{ color: '#7E8299', fontSize: 13, fontWeight: 500, marginBottom: 0 }}>{obj.cardDetails.expire_date}</p>
              </div>
              <button className="themeButton" style={{ color: '#B5B5C3', background: '#F5F8FA', borderColor: 'transparent' }}>Delete</button>
              <button className="themeButton">Edit</button>
            </div>
          </div>
        })}


        {tab == 2 && (<button className="themeButton" >Add New Paypal</button>)}

      </div>
    </>
  )
}

export default Tab4