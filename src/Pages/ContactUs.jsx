import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import Toast from '../Toast'
import axios from '../axios'
import { contactList } from '../dummydata/DummyData'

const ContactUs = () => {
  const [editModal, setEditModal] = useState(false)
  const [modalData, setModalData] = useState({})
  const { userToken } = useContext(AuthContext)
  const location = useLocation()
  const [data, setData] = useState(contactList)


  const Modaldata = (data) => {
    setModalData(data)
    setEditModal(true)

  }


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
                <th>Email</th>
                <th>User Name</th>
                <th>Subject</th>
                <th>Date</th>
              </tr>
              {data?.map((a) => {

                return <tr>
                  <td>
                    <div className="dropdown">
                      <button className='themeButton dropdown-toggle' style={{ background: "#F5F8FA", color: "#A1A5B7", }} onClick={() => Modaldata(a)}>Edit</button>

                    </div>
                  </td>
                  <td><p style={{ color: '#7E8299', fontSize: 14 }}>{a?.email}</p></td>
                  <td> <p style={{ color: '#7E8299', fontSize: 14 }}>{a?.user?.name}<br /><span style={{ color: '#B5B5C3', fontSize: 12 }}>{a?.user?.username}</span></p></td>
                  <td> <span className='span-box' style={{ color: '#7E8299', background: '#F4F4F4' }}>{a?.subject}</span></td>
                  <td style={{ color: '#7E8299', fontSize: 14 }}>{new Date(a?.created_at).toDateString()} &emsp; {new Date(a?.created_at).toLocaleTimeString()}</td>
                </tr>
              })}


            </table>
          </div>

        </div>
      </div>

      {/* edit Details */}
      <Modal show={editModal} onHide={() => setEditModal(false)} style={{ backdropFilter: 'blur(8px)' }} size="lg">
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: 18, fontWeight: 600, color: '#3F4254', letterSpacing: 1 }}>Edit Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="padding15rem">
            <div style={{ borderRadius: 12, padding: 18 }}>
              <h6 style={{ fontWeight: 900, color: '#3F4254', marginBottom: 18 }}>User Details</h6>

              <div className="inputwrapper">
                <p className='span-text-dark' > userName </p>
                <p style={{ color: '#2884EF', fontWeight: 400 }}>{modalData?.user?.username}</p>
              </div>
              <div className="inputwrapper">
                <p className='span-text-dark' > Email</p>
                <input type="text" className="form-input" placeholder='Event Name' value={modalData?.email} ></input>
              </div>
              <div className="inputwrapper">
                <p className='span-text-dark' > Subject</p>
                <input type="text" className="form-input" placeholder='Event Name' value={modalData?.subject} ></input>
              </div>
              <div className="inputwrapper">
                <p className='span-text-dark' style={{ alignSelf: 'flex-start' }}> Message</p>
                <textarea type="text" disabled className="form-input" placeholder='message' value={modalData?.message} rows={6} ></textarea>
              </div>
              <div className="inputwrapper">
                <p className='span-text-dark' > Date</p>
                <p style={{ color: 'black', fontWeight: 400 }}>{new Date(modalData?.created_at).toDateString()} &emsp; {new Date(modalData?.created_at).toLocaleTimeString()}</p>
              </div>

            </div>
          </div>



        </Modal.Body>

      </Modal>

    </>
  )
}

export default ContactUs