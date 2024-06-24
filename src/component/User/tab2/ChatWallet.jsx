import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../AuthProvider'
import { toast } from 'react-toastify'
import axios from '../../../axios'


const ChatWallet = ({ single_user, editpost }) => {

        const [tab, setTab] = useState(1)



        return (
                <>
                        <div className="user-permission-tab padding15rem">
                                <div className='d-flex justify-content-between' style={{ borderBottom: '1px solid #EFF2F5', }}>
                                        <h5 style={{ fontWeight: 900, color: '#3F4254', marginBottom: 0 }}>Chat + Social</h5>
                                        <div className='d-flex' style={{ gridGap: 15 }}>
                                                <span className={tab == 1 ? "span-text-dark" : 'span-text-light'} style={{ cursor: 'pointer', paddingBottom: '1rem', borderBottom: tab == 1 ? '2px solid #00A3FF' : 'none' }} onClick={() => setTab(1)}>Chat + Social</span>
                                                <span className={tab == 2 ? "span-text-dark" : 'span-text-light'} style={{ cursor: 'pointer', paddingBottom: '1rem', borderBottom: tab == 2 ? '2px solid #00A3FF' : 'none' }} onClick={() => setTab(2)}>Recent Chat</span>
                                                <span className={tab == 3 ? "span-text-dark" : 'span-text-light'} style={{ cursor: 'pointer', paddingBottom: '1rem', borderBottom: tab == 3 ? '2px solid #00A3FF' : 'none' }} onClick={() => setTab(3)}>Group chat</span>
                                                <span className={tab == 4 ? "span-text-dark" : 'span-text-light'} style={{ cursor: 'pointer', paddingBottom: '1rem', borderBottom: tab == 4 ? '2px solid #00A3FF' : 'none' }} onClick={() => setTab(4)}>World Chat</span>

                                        </div>
                                </div>

                                <div className='d-flex' style={{ gridGap: 20, margin: '1.5rem 0' }}>
                                        <div className=' dropdown-toggle' style={{ cursor: 'pointer', padding: '1rem', border: '1.04481px dashed rgb(228, 230, 239)', borderRadius: 6.26885, width: 180 }} data-bs-toggle="dropdown" aria-expanded="false">
                                                <p className='span-text-dark' style={{ marginBottom: 0, fontWeight: 900, fontSize: 18 }}>{single_user?.followers}</p>
                                                <span className='span-text-light'>Followers</span>

                                        </div>
                                        <div className=' dropdown-toggle' style={{ cursor: 'pointer', padding: '1rem', border: '1.04481px dashed rgb(228, 230, 239)', borderRadius: 6.26885, width: 180 }} data-bs-toggle="dropdown" aria-expanded="false">
                                                <p className='span-text-dark' style={{ marginBottom: 0, fontWeight: 900, fontSize: 18 }}>{single_user?.following}</p>
                                                <span className='span-text-light'>Following</span>

                                        </div>
                                        <div className=' dropdown-toggle' style={{ cursor: 'pointer', padding: '1rem', border: '1.04481px dashed rgb(228, 230, 239)', borderRadius: 6.26885, width: 180 }} data-bs-toggle="dropdown" aria-expanded="false">
                                                <p className='span-text-dark' style={{ marginBottom: 0, fontWeight: 900, fontSize: 18 }}>30</p>
                                                <span className='span-text-light'>Blocking</span>

                                        </div>



                                </div>

                                <div className="inputwrapper" style={{ margin: '2rem 0' }} >
                                        <p className='span-text-dark' >Wallet</p>
                                        <span className='span-text-light d-flex align-items-center' style={{ flex: 2, fontSize: 12 }}>
                                                <input type="checkbox" className='event-toggle' checked={single_user?.wallet_status} name="wallet_status" onChange={(e) => editpost(e.target.name, e.target.checked ? 1 : 0)} style={{ position: 'relative', top: 0, left: 0, marginRight: 8 }}></input>Active</span>

                                </div>
                                <div className="inputwrapper" style={{ margin: '2rem 0' }} >
                                        <p className='span-text-dark' >Post</p>
                                        <span className='span-text-light d-flex align-items-center' style={{ flex: 2, fontSize: 12 }}>
                                                <input type="checkbox" className='event-toggle' checked={single_user?.post_status} name="post_status" onChange={(e) => editpost(e.target.name, e.target.checked ? 1 : 0)} style={{ position: 'relative', top: 0, left: 0, marginRight: 8 }}  ></input>Active</span>

                                </div>
                                <div className="inputwrapper" style={{ margin: '2rem 0' }} >
                                        <p className='span-text-dark' >Comment</p>
                                        <span className='span-text-light d-flex align-items-center' style={{ flex: 2, fontSize: 12 }}>
                                                <input type="checkbox" className='event-toggle' checked={single_user?.comment_status} name="comment_status" onChange={(e) => editpost(e.target.name, e.target.checked ? 1 : 0)} style={{ position: 'relative', top: 0, left: 0, marginRight: 8 }} ></input>Active</span>

                                </div>

                                <div className="inputwrapper" style={{ margin: '2rem 0' }} >
                                        <p className='span-text-dark' >World Chat</p>
                                        <span className='span-text-light d-flex align-items-center' style={{ flex: 2, fontSize: 12 }}>
                                                <input type="checkbox" className='event-toggle' checked={single_user?.world_chat_status} name="world_chat_status" onChange={(e) => editpost(e.target.name, e.target.checked ? 1 : 0)} style={{ position: 'relative', top: 0, left: 0, marginRight: 8 }}></input>Active</span>

                                </div>

                                <div className="inputwrapper" style={{ margin: '2rem 0' }} >
                                        <p className='span-text-dark' >Group Chat</p>
                                        <span className='span-text-light d-flex align-items-center' style={{ flex: 2, fontSize: 12 }}>
                                                <input type="checkbox" className='event-toggle' checked={single_user?.group_chat_status} name="group_chat_status" onChange={(e) => editpost(e.target.name, e.target.checked ? 1 : 0)} style={{ position: 'relative', top: 0, left: 0, marginRight: 8 }} ></input>Active</span>

                                </div>

                                <div className="inputwrapper" style={{ margin: '2rem 0' }} >
                                        <p className='span-text-light' >

                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 7 }}>
                                                        <g clip-path="url(#clip0_248_777)">
                                                                <path d="M26.4546 28C27.3079 28 27.9998 27.308 27.9998 26.4547V1.54533C27.9998 0.691673 27.3078 0 26.4546 0H1.54533C0.691673 0 0 0.691778 0 1.54533V26.4546C0 27.308 0.691673 27.9999 1.54533 27.9999H26.4546V28Z" fill="#0181F8" />
                                                                <path d="M19.3194 28.0001V17.157H22.959L23.5039 12.9312H19.3193V10.2332C19.3193 9.00976 19.659 8.17604 21.4135 8.17604L23.6511 8.17499V4.3955C23.2641 4.34409 21.9358 4.229 20.3905 4.229C17.1642 4.229 14.9555 6.19827 14.9555 9.81484V12.9312H11.3066V17.157H14.9555V28H19.3194V28.0001Z" fill="white" />
                                                        </g>
                                                        <defs>
                                                                <clipPath id="clip0_248_777">
                                                                        <rect width="28" height="28" fill="white" />
                                                                </clipPath>
                                                        </defs>
                                                </svg>

                                                rahul 7112
                                        </p>

                                        <input type="checkbox" className='event-toggle' checked={single_user?.fb_status} name="fb_status" onChange={(e) => editpost(e.target.name, e.target.checked ? 1 : 0)} style={{ position: 'relative', top: 0, left: 0, marginRight: 8 }}  ></input>

                                </div>
                                <div className="inputwrapper" style={{ margin: '2rem 0' }} >
                                        <p className='span-text-light' >


                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 7 }}>
                                                        <g clip-path="url(#clip0_248_764)">
                                                                <path d="M18.6514 13.7123C16.0842 12.3404 13.626 11.0791 11.1133 9.76221V17.6401C13.7574 16.2027 16.5444 14.8864 18.6623 13.7123H18.6514Z" fill="white" />
                                                                <path d="M18.6514 13.7123C16.0842 12.3404 11.1133 9.76221 11.1133 9.76221L17.7408 14.2168C17.7413 14.2168 16.5335 14.8864 18.6514 13.7123Z" fill="#E8E0E0" />
                                                                <path d="M11.5964 23.8065C6.2639 23.7084 4.4426 23.62 3.32312 23.3894C2.56572 23.2361 1.90754 22.8959 1.42494 22.4024C1.05195 22.0289 0.755328 21.459 0.525199 20.6684C0.327796 20.0097 0.250913 19.4616 0.141302 18.1229C-0.0264899 15.1016 -0.0664899 12.6315 0.141302 9.87147C0.312731 8.34731 0.395848 6.53796 1.53455 5.48238C2.07221 4.98835 2.69767 4.67043 3.4 4.539C4.49715 4.33069 9.17143 4.16602 14.0104 4.16602C18.8384 4.16602 23.5231 4.33069 24.6213 4.539C25.4987 4.70368 26.3216 5.19718 26.8047 5.83355C27.8436 7.46783 27.8618 9.50004 27.9673 11.0897C28.0109 11.8471 28.0109 16.1478 27.9673 16.9052C27.8031 19.4174 27.6712 20.3063 27.2982 21.2278C27.0675 21.8097 26.8707 22.1167 26.5299 22.4569C25.9954 22.9805 25.3141 23.3288 24.5766 23.4554C19.9621 23.8024 16.0436 23.8777 11.5964 23.8065ZM18.6629 13.712C16.0956 12.34 13.6374 11.0678 11.1247 9.75095V17.6294C13.7688 16.192 16.5564 14.8751 18.6738 13.7011L18.6629 13.712Z" fill="#CD201F" />
                                                        </g>
                                                        <defs>
                                                                <clipPath id="clip0_248_764">
                                                                        <rect width="28" height="28" fill="white" />
                                                                </clipPath>
                                                        </defs>
                                                </svg>


                                                rahul 7112
                                        </p>

                                        <input type="checkbox" className='event-toggle' checked={single_user?.youtube_status} name="youtube_status" onChange={(e) => editpost(e.target.name, e.target.checked ? 1 : 0)} style={{ position: 'relative', top: 0, left: 0, marginRight: 8 }} ></input>

                                </div>
                                <div className="inputwrapper" style={{ margin: '2rem 0' }} >
                                        <p className='span-text-light' >



                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 7 }}>
                                                        <g clip-path="url(#clip0_248_799)">
                                                                <path d="M7.10007 27.901C5.4349 27.8252 4.53033 27.5481 3.92867 27.3135C3.13145 27.0031 2.56308 26.6336 1.96475 26.0361C1.36642 25.4386 0.996107 24.8702 0.687372 24.073C0.4527 23.4713 0.175588 22.5668 0.0998603 20.9016C0.0166434 19.1016 0 18.5615 0 14.0012C0 9.44096 0.0183077 8.90172 0.0990281 7.10007C0.174756 5.4349 0.453532 4.53199 0.68654 3.92867C0.996939 3.13145 1.36725 2.56308 1.96392 1.96392C2.56142 1.36642 3.12979 0.995274 3.92784 0.68654C4.5295 0.451868 5.43407 0.174756 7.09924 0.0990281C8.90005 0.0166434 9.44096 0 13.9996 0C18.5599 0 19.0991 0.0183077 20.9008 0.0990281C22.5659 0.174756 23.4688 0.453532 24.0722 0.68654C24.8694 0.995274 25.4378 1.36642 26.0361 1.96392C26.6344 2.56142 27.0031 3.13062 27.3135 3.92784C27.5481 4.5295 27.8252 5.43407 27.901 7.09924C27.9834 8.90088 28 9.44013 28 14.0004C28 18.559 27.9834 19.0999 27.901 20.9016C27.8252 22.5668 27.5465 23.4713 27.3135 24.073C27.0031 24.8702 26.6336 25.4386 26.0361 26.0361C25.4386 26.6336 24.8694 27.0031 24.0722 27.3135C23.4705 27.5481 22.5659 27.8252 20.9008 27.901C19.1008 27.9834 18.5599 28 13.9996 28C9.44096 28 8.90005 27.9842 7.10007 27.901Z" fill="url(#paint0_radial_248_799)" />
                                                                <path d="M7.10007 27.901C5.4349 27.8252 4.53033 27.5481 3.92867 27.3135C3.13145 27.0031 2.56308 26.6336 1.96475 26.0361C1.36642 25.4386 0.996107 24.8702 0.687372 24.073C0.4527 23.4713 0.175588 22.5668 0.0998603 20.9016C0.0166434 19.1016 0 18.5615 0 14.0012C0 9.44096 0.0183077 8.90172 0.0990281 7.10007C0.174756 5.4349 0.453532 4.53199 0.68654 3.92867C0.996939 3.13145 1.36725 2.56308 1.96392 1.96392C2.56142 1.36642 3.12979 0.995274 3.92784 0.68654C4.5295 0.451868 5.43407 0.174756 7.09924 0.0990281C8.90005 0.0166434 9.44096 0 13.9996 0C18.5599 0 19.0991 0.0183077 20.9008 0.0990281C22.5659 0.174756 23.4688 0.453532 24.0722 0.68654C24.8694 0.995274 25.4378 1.36642 26.0361 1.96392C26.6344 2.56142 27.0031 3.13062 27.3135 3.92784C27.5481 4.5295 27.8252 5.43407 27.901 7.09924C27.9834 8.90088 28 9.44013 28 14.0004C28 18.559 27.9834 19.0999 27.901 20.9016C27.8252 22.5668 27.5465 23.4713 27.3135 24.073C27.0031 24.8702 26.6336 25.4386 26.0361 26.0361C25.4386 26.6336 24.8694 27.0031 24.0722 27.3135C23.4705 27.5481 22.5659 27.8252 20.9008 27.901C19.1008 27.9834 18.5599 28 13.9996 28C9.44096 28 8.90005 27.9842 7.10007 27.901Z" fill="url(#paint1_radial_248_799)" />
                                                                <path d="M10.5623 14.0598C10.5623 12.1449 12.1142 10.5922 14.0291 10.5922C15.944 10.5922 17.4968 12.1449 17.4968 14.0598C17.4968 15.9747 15.944 17.5275 14.0291 17.5275C12.1142 17.5275 10.5623 15.9747 10.5623 14.0598ZM8.68777 14.0598C8.68777 17.0099 11.0791 19.4012 14.0291 19.4012C16.9792 19.4012 19.3705 17.0099 19.3705 14.0598C19.3705 11.1098 16.9792 8.71847 14.0291 8.71847C11.0791 8.71847 8.68785 11.1096 8.68785 14.0598M18.3338 8.50668C18.3337 8.75356 18.4068 8.99493 18.5439 9.20026C18.6809 9.40559 18.8758 9.56566 19.1039 9.66023C19.3319 9.75479 19.5829 9.77961 19.8251 9.73155C20.0672 9.68348 20.2897 9.56468 20.4643 9.39018C20.639 9.21568 20.7579 8.99331 20.8062 8.75119C20.8545 8.50907 20.8298 8.25808 20.7355 8.02996C20.6411 7.80183 20.4812 7.60682 20.2759 7.46957C20.0707 7.33233 19.8294 7.25903 19.5825 7.25893H19.582C19.2511 7.25908 18.9338 7.39057 18.6997 7.62453C18.4657 7.85848 18.3341 8.17576 18.3338 8.50668ZM9.82668 22.527C8.81251 22.4808 8.26128 22.3119 7.89496 22.1692C7.40931 21.9801 7.06279 21.7549 6.69847 21.3911C6.33414 21.0273 6.10863 20.6811 5.92039 20.1954C5.77759 19.8293 5.60866 19.2779 5.56256 18.2637C5.51213 17.1672 5.50206 16.8379 5.50206 14.06C5.50206 11.2821 5.51296 10.9537 5.56256 9.85629C5.60874 8.84213 5.77892 8.29182 5.92039 7.92458C6.10946 7.43893 6.33464 7.09241 6.69847 6.72809C7.06229 6.36376 7.40847 6.13824 7.89496 5.95001C8.26112 5.80721 8.81251 5.63828 9.82668 5.59218C10.9231 5.54175 11.2525 5.53168 14.0291 5.53168C16.8057 5.53168 17.1355 5.54241 18.2328 5.59234C19.247 5.63853 19.7973 5.80871 20.1645 5.95017C20.6502 6.13841 20.9967 6.36443 21.361 6.72825C21.7254 7.09208 21.9501 7.43909 22.1391 7.92475C22.2819 8.2909 22.4508 8.8423 22.497 9.85646C22.5474 10.9538 22.5574 11.2823 22.5574 14.0602C22.5574 16.838 22.5474 17.1665 22.497 18.2639C22.4508 19.278 22.281 19.8293 22.1391 20.1956C21.9501 20.6812 21.7249 21.0278 21.361 21.3912C20.9972 21.7547 20.6502 21.9803 20.1645 22.1693C19.7984 22.3121 19.247 22.4811 18.2328 22.5272C17.1364 22.5776 16.807 22.5877 14.0291 22.5877C11.2513 22.5877 10.9228 22.5776 9.82668 22.5272M9.74055 3.72071C8.63318 3.77114 7.87649 3.94673 7.21566 4.20387C6.5317 4.46941 5.95193 4.82566 5.37299 5.40369C4.79405 5.98171 4.43871 6.56157 4.17317 7.24636C3.91603 7.9076 3.74044 8.66388 3.69001 9.77125C3.63875 10.8804 3.62701 11.2349 3.62701 14.0598C3.62701 16.8847 3.63875 17.2393 3.69001 18.3484C3.74044 19.4559 3.91603 20.2121 4.17317 20.8733C4.43871 21.5573 4.79413 22.1382 5.37299 22.716C5.95185 23.2937 6.53087 23.6495 7.21566 23.9158C7.87774 24.1729 8.63318 24.3485 9.74055 24.399C10.8502 24.4494 11.2042 24.4619 14.0291 24.4619C16.854 24.4619 17.2086 24.4502 18.3177 24.399C19.4252 24.3485 20.1814 24.1729 20.8426 23.9158C21.5266 23.6495 22.1063 23.294 22.6853 22.716C23.2642 22.1379 23.6188 21.5573 23.8851 20.8733C24.1422 20.2121 24.3187 19.4558 24.3683 18.3484C24.4187 17.2385 24.4304 16.8847 24.4304 14.0598C24.4304 11.2349 24.4187 10.8804 24.3683 9.77125C24.3178 8.6638 24.1422 7.90719 23.8851 7.24636C23.6188 6.5624 23.2633 5.98263 22.6853 5.40369C22.1072 4.82475 21.5266 4.46941 20.8434 4.20387C20.1814 3.94673 19.4251 3.77031 18.3185 3.72071C17.2093 3.67003 16.8548 3.65771 14.0304 3.65771C11.2059 3.65771 10.8507 3.66945 9.74096 3.72071" fill="white" />
                                                        </g>
                                                        <defs>
                                                                <radialGradient id="paint0_radial_248_799" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.81213 27.3866) scale(35.5496)">
                                                                        <stop offset="0.09" stop-color="#FA8F21" />
                                                                        <stop offset="0.78" stop-color="#D82D7E" />
                                                                </radialGradient>
                                                                <radialGradient id="paint1_radial_248_799" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.3946 26.4875) scale(31.284)">
                                                                        <stop offset="0.64" stop-color="#8C3AAA" stop-opacity="0" />
                                                                        <stop offset="1" stop-color="#8C3AAA" />
                                                                </radialGradient>
                                                                <clipPath id="clip0_248_799">
                                                                        <rect width="28" height="28" fill="white" />
                                                                </clipPath>
                                                        </defs>
                                                </svg>



                                                rahul 7112
                                        </p>

                                        <input type="checkbox" className='event-toggle' checked={single_user?.insta_status} name="insta_status" onChange={(e) => editpost(e.target.name, e.target.checked ? 1 : 0)} style={{ position: 'relative', top: 0, left: 0, marginRight: 8 }} ></input>

                                </div>


                        </div>

                </>
        )
}

export default ChatWallet