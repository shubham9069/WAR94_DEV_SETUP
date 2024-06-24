import React from 'react'
import { useNavigate } from 'react-router-dom'

const PersonDetails = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="Persnal-chat" >
     
        {/* right  */}

        <div style={{width:'100%'}}>
          <div style={{ padding: '1.5rem' }}>
            <p style={{ marginBottom: 0 }}>Rahul Kumar</p>
            <p style={{ fontSize: 12, color: '#B5B5C3', marginBottom: 0 }}>offline - last seen today 9:18 pm</p>
          </div>
          <div style={{ overflow: 'scroll', height: 600, padding: '1.5rem' }}>
            {[...Array(7)]?.map((element, i) => {

              return <div className='rigth-chat-box ' style={{ margin: i % 2 == 0 ? '1rem 0 1rem auto' : '1rem 0 1rem 0', width: 'fit-content', maxWidth: 400 }}>

                <div className='d-flex align-items-center' style={{ gridGap: 8, justifyContent: i % 2 == 0 ? "flex-end" : "flex-start" }}>
                  <img src={i % 2 == 0 ? "images/logo.png" : "images/users.png"} alt="" style={{ width: 40, height: 40, borderRadius: 50 }}></img>
                  <span style={{ fontWeight: 'bold', lineHeight: '25px', marginBottom: 0, fontSize: 12 }}>{ i % 2 == 0 ?"Admin":"Shubham"} </span>
                  <span style={{ fontSize: 12, color: '#B5B5C3', fontWeight: 500 }}>20 hrs</span>

                </div>
                <div style={{ background: i % 2 == 0 ? "#EEF6FF" : "#F8F5FF", borderRadius: 6, padding: '1rem', fontSize: 11, marginTop: 10, width: 'fit-content' }}>
                  Bhai heli bhai kesa h sab thik h kya haal h
                </div>

              </div>
            })}
          </div>

          <div className="write-messge" >
            <textarea placeholder='write message'></textarea>
            <button className="themeButton" style={{ background: '#D9214E', opacity: 0.8 }}> send <i class="bi bi-chevron-right" style={{ color: 'white', marginLeft: 3 }} ></i> </button>
            <i class="bi bi-paperclip" style={{ color: '#7E8299', transform: 'matrix(-0.72, -0.7, 0.72, -0.7, 0, 0)' }}></i>
            <i class="bi bi-trash-fill" style={{ color: '#7E8299' }}></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonDetails