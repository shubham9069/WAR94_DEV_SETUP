import React, { useEffect, useRef, useState } from 'react'
import { Dropdown, Form, Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { spotLightList } from '../dummydata/DummyData'

const Spotlight = () => {
    const location = useLocation()
    const [modal, setmodal] = useState(false)
    return (
        <>
            <div className="event-top padding15rem">
                <span className='span-text-light'>Home </span>
                <span className='span-text-light'> / </span>
                <span className='span-text-dark'> {location?.pathname?.split('/')[1]} </span>

            </div>
            <div className="report padding15rem">

                <div className="user-search">
                    <select >
                        <option selected hidden >Games</option>
                        <option >Games</option>:
                        <option >Games</option>
                    </select>
                    <select >
                        <option selected hidden >Tournament Type</option>
                        <option >Games</option>
                        <option >Games</option>
                    </select>
                    <input type='text' placeholder='search'></input>
                    <button className='themeButton'>Search</button>


                </div>

                <div style={{ marginTop: '1.5rem' }}>

                    <div className='between-div' style={{ borderBottom: '1px solid #EFF2F5', paddingBottom: '1.5rem' }}>
                        <h5 style={{ fontWeight: 900, color: '#3F4254', marginBottom: 0 }}>Spotlighted Message</h5>


                    </div>
                    <div className="matchlist-table">
                        <table style={{ width: '100%' }} >
                            <tr>
                                <th>Action</th>
                                <th>status</th>
                                <th>Created By</th>
                                <th>Media/image</th>
                                <th>messsage</th>
                                <th>Created Date</th>




                            </tr>
                            {spotLightList?.map((obj) => {

                                return <tr>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle className='dropdown-default' style={{}} id="dropdown-basic">
                                                Edit
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="post-dropdown">
                                                <li >
                                                    <p>View</p>
                                                    <svg width="19" height="19" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.825 6.73346C16.658 7.78019 16.658 9.21989 15.825 10.2666C14.5017 11.9296 12.0598 14.1667 8.49929 14.1667C4.93883 14.1667 2.49692 11.9296 1.17355 10.2666C0.340586 9.21989 0.340586 7.78019 1.17355 6.73346C2.49692 5.07047 4.93883 2.83337 8.49929 2.83337C12.0598 2.83337 14.5017 5.07047 15.825 6.73346Z" fill="#E3E4E9" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91602 8.49996C9.91602 9.28236 9.28175 9.91663 8.49935 9.91663C7.71695 9.91663 7.08268 9.28236 7.08268 8.49996C7.08268 8.47985 7.0831 8.45984 7.08393 8.43994C7.19435 8.47881 7.31313 8.49996 7.43685 8.49996C8.02365 8.49996 8.49935 8.02426 8.49935 7.43746C8.49935 7.31374 8.4782 7.19496 8.43933 7.08454C8.45923 7.08371 8.47924 7.08329 8.49935 7.08329C9.28175 7.08329 9.91602 7.71756 9.91602 8.49996ZM11.3327 8.49996C11.3327 10.0648 10.0642 11.3333 8.49935 11.3333C6.93454 11.3333 5.66602 10.0648 5.66602 8.49996C5.66602 6.93515 6.93454 5.66663 8.49935 5.66663C10.0642 5.66663 11.3327 6.93515 11.3327 8.49996Z" fill="#A1A5B7" />
                                                    </svg>

                                                </li>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                     
                                    </td>
                                    <td> <span className={obj.status ? 'span-box-green' : 'span-box-yellow'}>{obj.status ?'Active':'Pending'}</span></td>
                                    <td style={{ color: '#00A3FF', fontSize: 14, fontWeight: 600 }}>{obj.created_by}</td>

                                    <td >
                                        <img src={obj.image} style={{ width: '100%', height: 50, objectFit: 'cover', borderRadius: 6 }}></img>
                                    </td>
                                    <td style={{ color: '#777E90', fontSize: 14, fontWeight: 500 }}>{obj.message}</td>
                                    <td style={{ color: '#7E8299', fontSize: 14 }}>{new Date(obj.created_at).toLocaleDateString()}</td>
                                </tr>
                            })}


                        </table>
                    </div>

                </div>





            </div>

            <Modal show={modal} onHide={() => setmodal(false)} style={{ backdropFilter: 'blur(8px)' }}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: 18, fontWeight: 600, color: '#3F4254', letterSpacing: 1 }}>Update Spotlight Message Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='center-div tab1-right-div' style={{ background: '#FFF7E7', border: '1px dashed #FFA800' }}>


                        <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M16.4412 30.4364C24.0081 30.4364 30.1422 24.3023 30.1422 16.7354C30.1422 9.16856 24.0081 3.03442 16.4412 3.03442C8.87437 3.03442 2.74023 9.16856 2.74023 16.7354C2.74023 24.3023 8.87437 30.4364 16.4412 30.4364Z" fill="#F89C47" />
                            <rect x="15.0703" y="9.88489" width="2.7402" height="10.9608" rx="1" fill="#F89C47" />
                            <rect x="15.0703" y="22.2157" width="2.7402" height="2.7402" rx="1" fill="#F89C47" />
                        </svg>


                        <p style={{ flex: 1, marginBottom: 2, fontWeight: 600, fontSize: 13 }}>Warning
                            <p style={{ color: '#7E8299', fontSize: 11, fontWeight: 500, marginBottom: 0, marginTop: 3 }}>By editing the ban, user might notified the changes</p>
                        </p>


                    </div>

                    <div>
                        <span className='span-text-dark'> Message</span>
                        <p className='span-text-dark' style={{ color: "#777E90", margin: "1rem 0", fontSize: 12 }}>
                            Hi Guy’s check this <br />

                        </p>
                        <img src="images/users.png" style={{ borderRadius: 6, objectFit: "cover", margin: '1rem 0' }}></img>
                        <p style={{ color: "#3F4254", margin: "0", fontWeight: 600, fontSize: 12 }}>From</p>
                        <p className='span-text-dark' style={{ color: "#777E90", marginBottom: "1.5rem", fontWeight: 600 }}>20 Oct 2023, 09:00 AMTo 11:00 AM</p>

                        <p style={{ color: "#3F4254", margin: "0", fontWeight: 600, fontSize: 12 }}>Rate</p>
                        <p className='span-text-dark' style={{ color: "#777E90", fontWeight: 600 }}>₹2000/H</p>

                        <select className='form-input' style={{ margin: '1rem 0' }}>
                            <option selected hidden>reject</option>
                        </select>
                    </div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{ fontSize: 13 }}>Reject</Form.Label>
                        <textarea className="text-area" style={{ resize: 'none', height: 100 }} placeholder='write Something'></textarea>
                    </Form.Group>


                    <div className='d-flex justify-content-end' style={{ gridGap: 20, padding: '1rem 0' }}>
                        <button className="themeButton" >Update</button>
                        <button className="themeButton" style={{ color: '#3E97FF', backgroundColor: '#EEF6FF', borderColor: 'transparent' }} >Cancel</button>
                    </div>


                </Modal.Body>

            </Modal>


        </>

    )
}

export default Spotlight