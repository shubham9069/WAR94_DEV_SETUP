import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'


const Sidebar = () => {
  const location = useLocation()
  console.log(location?.pathname)
  const [sidebarToggle, setsidebarToggle] = useState(true)
  const [subEventToggle, setSubEventToggle] = useState(false)
  const [subGamesToggle, setSubGamesToggle] = useState(false)
  const [subBannerToggle, setBannerToggle] = useState(false)
  const [subTournamentToggle, setTournamentToggle] = useState(false)
  const [TournamentRoomToggle, setTournamentRoomToggle] = useState(false)
  const [subAdminToggle, setAdminToggle] = useState(false)
  const [subuserToggle, setuserToggle] = useState(false)
  const [spotlighttoggle, setspotlighttoggle] = useState(false)
  const [subCategortToggle, setSubCategortToggle] = useState(false)
  const [subpaymentToggle, setPaymentToggle] = useState(false)

  return (
    <>
      <div className="top-header between-div ">
        <div id="togglebtn" onClick={() => setsidebarToggle(!sidebarToggle)}>
          <i class="bi bi-arrow-right-circle-fill"></i>
        </div>

        <div className="top-header-left">
          <img src={'images/logo.png'} />
          <span>War94</span>
        </div>
        <div className="top-header-middle">
          <h4>Dashboard</h4>
        </div>
        <div className="top-header-right">

          {/* cart */}
          <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.3" d="M13.5 4.81869L8.73928 9.9603C8.34152 10.3899 7.63213 10.4479 7.15482 10.0899C6.67751 9.73195 6.61302 9.0935 7.01078 8.66392L12.6358 2.58892C13.0856 2.10317 13.9145 2.10317 14.3643 2.58892L19.9893 8.66392C20.387 9.0935 20.3225 9.73195 19.8452 10.0899C19.3679 10.4479 18.6585 10.3899 18.2608 9.9603L13.5 4.81869Z" fill="#F1416C" />
            <path fill-rule="evenodd" cliprule="evenodd" d="M5.51879 9.3125C4.78465 9.3125 4.30076 10.0772 4.61509 10.7407L8.18916 18.2845C8.6855 19.3321 9.74102 20 10.9003 20H16.1034C17.2628 20 18.3184 19.332 18.8146 18.2842L22.3879 10.7406C22.7022 10.0771 22.2183 9.3125 21.4841 9.3125H5.51879ZM15.751 15.3883C15.751 16.5067 14.7436 17.4133 13.501 17.4133C12.2583 17.4133 11.251 16.5067 11.251 15.3883C11.251 14.2699 12.2583 13.3633 13.501 13.3633C14.7436 13.3633 15.751 14.2699 15.751 15.3883Z" fill="#F1416C" />
          </svg>

          {/* layout  */}

          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4.83203" y="4.83203" width="8.45833" height="8.45833" rx="1.5" fill="#F1416C" />
            <path opacity="0.3" fill-rule="evenodd" cliprule="evenodd" d="M15.707 6.33203C15.707 5.5036 16.3786 4.83203 17.207 4.83203H22.6654C23.4938 4.83203 24.1654 5.5036 24.1654 6.33203V11.7904C24.1654 12.6188 23.4938 13.2904 22.6654 13.2904H17.207C16.3786 13.2904 15.707 12.6188 15.707 11.7904V6.33203ZM4.83203 17.207C4.83203 16.3786 5.5036 15.707 6.33203 15.707H11.7904C12.6188 15.707 13.2904 16.3786 13.2904 17.207V22.6654C13.2904 23.4938 12.6188 24.1654 11.7904 24.1654H6.33203C5.5036 24.1654 4.83203 23.4938 4.83203 22.6654V17.207ZM17.207 15.707C16.3786 15.707 15.707 16.3786 15.707 17.207V22.6654C15.707 23.4938 16.3786 24.1654 17.207 24.1654H22.6654C23.4938 24.1654 24.1654 23.4938 24.1654 22.6654V17.207C24.1654 16.3786 23.4938 15.707 22.6654 15.707H17.207Z" fill="#F1416C" />
          </svg>


          <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.3" x="15.707" y="5.01953" width="3.625" height="18.0779" rx="1.8125" fill="#F1416C" />
            <rect x="9.66797" y="10.668" width="3.625" height="12.4286" rx="1.8125" fill="#F1416C" />
            <rect x="21.75" y="12.9277" width="3.625" height="10.1688" rx="1.8125" fill="#F1416C" />
            <rect x="3.625" y="15.1875" width="3.625" height="7.90909" rx="1.8125" fill="#F1416C" />
          </svg>


          <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" cliprule="evenodd" d="M23.1448 17.3582C23.4672 17.6484 23.981 17.4184 23.9792 16.9846L23.9618 12.587V5.4817C23.9618 4.17366 22.7836 3.11328 21.3302 3.11328H9.04955C7.59617 3.11328 6.41797 4.17366 6.41797 5.4817V8.73828H13.668C15.3248 8.73828 16.668 10.0814 16.668 11.7383V14.9554H20.4749L23.1448 17.3582Z" fill="#F1416C" />
            <path opacity="0.3" fill-rule="evenodd" cliprule="evenodd" d="M2.06641 17.1758V12.4883C2.06641 11.4527 2.99915 10.6133 4.14974 10.6133H12.4831C13.6337 10.6133 14.5664 11.4527 14.5664 12.4883V17.1758C14.5664 18.2113 13.6337 19.0508 12.4831 19.0508H4.27029L2.91998 20.214C2.59589 20.4931 2.09365 20.2629 2.09365 19.8351V17.4798C2.07572 17.3808 2.06641 17.2793 2.06641 17.1758ZM6.25 13.8945C6.25 13.6356 6.45987 13.4258 6.71875 13.4258H12.0312C12.2901 13.4258 12.5 13.6356 12.5 13.8945C12.5 14.1534 12.2901 14.3633 12.0312 14.3633H6.71875C6.45987 14.3633 6.25 14.1534 6.25 13.8945ZM9.84375 15.3008C9.58487 15.3008 9.375 15.5106 9.375 15.7695C9.375 16.0284 9.58487 16.2383 9.84375 16.2383H12.0313C12.2901 16.2383 12.5 16.0284 12.5 15.7695C12.5 15.5106 12.2901 15.3008 12.0313 15.3008H9.84375Z" fill="#F1416C" />
          </svg>


          <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="35" rx="4" fill="#FFF5F8" />
            <path d="M20.412 23L17.692 18.274H16.213V23H14.275V11.185H18.355C19.2617 11.185 20.0267 11.3437 20.65 11.661C21.2847 11.9783 21.755 12.4033 22.061 12.936C22.3783 13.4687 22.537 14.0637 22.537 14.721C22.537 15.4917 22.3103 16.1943 21.857 16.829C21.415 17.4523 20.7293 17.8773 19.8 18.104L22.724 23H20.412ZM16.213 16.727H18.355C19.0803 16.727 19.6243 16.5457 19.987 16.183C20.361 15.8203 20.548 15.333 20.548 14.721C20.548 14.109 20.3667 13.633 20.004 13.293C19.6413 12.9417 19.0917 12.766 18.355 12.766H16.213V16.727Z" fill="#F1416C" />
          </svg>


        </div>


      </div>
      <div className="sidebar-section">


        <motion.div
          animate={sidebarToggle ? "open" : "closed"}
          variants={
            {
              open: { opacity: 1, x: 0 },
              closed: { opacity: 0, x: "-100%" },
            }
          }
        >
          <div className="sidebar-left" style={{ display: sidebarToggle ? "inline-block" : "none" }} >

            <p style={{ padding: '1rem' }}>

              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M11.4686 16.766C12.017 17.2053 12.7967 17.205 13.3448 16.7654L20.0167 11.4143L20.2457 11.2316C20.9974 10.6319 20.9987 9.48971 20.2482 8.88841L13.3449 3.35701C12.7967 2.91779 12.0172 2.91779 11.469 3.35701L4.5612 8.892C3.8122 9.49214 3.81172 10.6316 4.5602 11.2324L4.78687 11.4143L11.4686 16.766Z" fill="#181C32" />
                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M13.3337 19.4712C12.7856 19.9103 12.0062 19.9104 11.458 19.4714L5.52523 14.7195C5.1138 14.3899 4.51196 14.4625 4.19071 14.8805C3.87421 15.2922 3.95106 15.8825 4.36243 16.1995L11.4892 21.6912C12.0287 22.1069 12.7805 22.107 13.3201 21.6914L20.4435 16.2044C20.8584 15.8848 20.9357 15.2894 20.6162 14.8745C20.2923 14.4539 19.6862 14.3811 19.2719 14.7131L13.3337 19.4712Z" fill="#181C32" />
              </svg>
              Hi Shubham
            </p>

            <div>
              <a style={{ color: '#4A4B68' }}>Admin controll</a>

              <Link to='/' id="admintoggle1" style={"/" == location?.pathname ? { backgroundColor: "#F1416C", color: "white" } : { backgroundColor: "white", color: "#A1A5B7" }}>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <rect x="4" y="4" width="7" height="7" rx="1.5" fill="white" />
                  <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 4.67157 13.6716 4 14.5 4H18.5C19.3284 4 20 4.67157 20 5.5V9.5C20 10.3284 19.3284 11 18.5 11H14.5C13.6716 11 13 10.3284 13 9.5V5.5ZM4 14.5C4 13.6716 4.67157 13 5.5 13H9.5C10.3284 13 11 13.6716 11 14.5V18.5C11 19.3284 10.3284 20 9.5 20H5.5C4.67157 20 4 19.3284 4 18.5V14.5ZM14.5 13C13.6716 13 13 13.6716 13 14.5V18.5C13 19.3284 13.6716 20 14.5 20H18.5C19.3284 20 20 19.3284 20 18.5V14.5C20 13.6716 19.3284 13 18.5 13H14.5Z" fill="#A1A5B7" />
                </svg>
                Dashboard
                <i class="bi bi-chevron-right" style={"/" == location?.pathname ? { color: "white" } : { color: "#A1A5B7" }}></i>
              </Link>

              <a id="admintoggle1" onClick={() => setSubEventToggle(!subEventToggle)} style={"/Active-event" == location?.pathname || '/In-active-event' == location?.pathname ? { backgroundColor: "#F1416C", color: "white" } : { backgroundColor: "white", color: "#A1A5B7" }}>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <rect x="4" y="4" width="7" height="7" rx="1.5" fill="white" />
                  <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 4.67157 13.6716 4 14.5 4H18.5C19.3284 4 20 4.67157 20 5.5V9.5C20 10.3284 19.3284 11 18.5 11H14.5C13.6716 11 13 10.3284 13 9.5V5.5ZM4 14.5C4 13.6716 4.67157 13 5.5 13H9.5C10.3284 13 11 13.6716 11 14.5V18.5C11 19.3284 10.3284 20 9.5 20H5.5C4.67157 20 4 19.3284 4 18.5V14.5ZM14.5 13C13.6716 13 13 13.6716 13 14.5V18.5C13 19.3284 13.6716 20 14.5 20H18.5C19.3284 20 20 19.3284 20 18.5V14.5C20 13.6716 19.3284 13 18.5 13H14.5Z" fill="#A1A5B7" />
                </svg>
                Event
                <i class={subEventToggle ? "bi bi-chevron-down" : "bi bi-chevron-right"} style={"/Active-event" == location?.pathname || '/In-active-event' == location?.pathname ? { color: "white" } : { color: "#A1A5B7" }} ></i>
              </a>
              <motion.div
                animate={subEventToggle ? "open" : "closed"}
                variants={
                  {
                    open: { opacity: 1, y: 0, },
                    closed: { opacity: 0, y: "100%" },
                  }}>

                <ul className="sub-category" style={{ display: subEventToggle ? "block" : "none" }}  >

                  <li><Link to="/Active-event" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>Active Event<i class="bi bi-chevron-right"></i></Link></li>
                  <li><Link to="/In-active-event" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>inActive Event <i class="bi bi-chevron-right"></i></Link></li>

                </ul>
              </motion.div>

              <a id="admintoggle1" onClick={() => setSubGamesToggle(!subGamesToggle)} style={"/Active-Games" == location?.pathname || '/InActive-Games' == location?.pathname ? { backgroundColor: "#F1416C", color: "white" } : { backgroundColor: "white", color: "#A1A5B7" }}>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <rect x="4" y="4" width="7" height="7" rx="1.5" fill="white" />
                  <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 4.67157 13.6716 4 14.5 4H18.5C19.3284 4 20 4.67157 20 5.5V9.5C20 10.3284 19.3284 11 18.5 11H14.5C13.6716 11 13 10.3284 13 9.5V5.5ZM4 14.5C4 13.6716 4.67157 13 5.5 13H9.5C10.3284 13 11 13.6716 11 14.5V18.5C11 19.3284 10.3284 20 9.5 20H5.5C4.67157 20 4 19.3284 4 18.5V14.5ZM14.5 13C13.6716 13 13 13.6716 13 14.5V18.5C13 19.3284 13.6716 20 14.5 20H18.5C19.3284 20 20 19.3284 20 18.5V14.5C20 13.6716 19.3284 13 18.5 13H14.5Z" fill="#A1A5B7" />
                </svg>
                Games
                <i class={subGamesToggle ? "bi bi-chevron-down" : "bi bi-chevron-right"} style={"/Active-Games" == location?.pathname || '/InActive-Games' == location?.pathname ? { color: "white" } : { color: "#A1A5B7" }} ></i>
              </a>
              <motion.div
                animate={subGamesToggle ? "open" : "closed"}
                variants={
                  {
                    open: { opacity: 1, y: 0, },
                    closed: { opacity: 0, y: "100%" },
                  }}>

                <ul className="sub-category" style={{ display: subGamesToggle ? "block" : "none" }}  >

                  <li><Link to="/Active-Games" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>Active Games<i class="bi bi-chevron-right"></i></Link></li>
                  <li><Link to="/InActive-Games" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>inActive Games <i class="bi bi-chevron-right"></i></Link></li>

                </ul>
              </motion.div>

              <a id="admintoggle1" onClick={() => setBannerToggle(!subBannerToggle)} style={"/Active-Banner" == location?.pathname || '/InActive-Banner' == location?.pathname ? { backgroundColor: "#F1416C", color: "white" } : { backgroundColor: "white", color: "#A1A5B7" }}>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <rect x="4" y="4" width="7" height="7" rx="1.5" fill="white" />
                  <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 4.67157 13.6716 4 14.5 4H18.5C19.3284 4 20 4.67157 20 5.5V9.5C20 10.3284 19.3284 11 18.5 11H14.5C13.6716 11 13 10.3284 13 9.5V5.5ZM4 14.5C4 13.6716 4.67157 13 5.5 13H9.5C10.3284 13 11 13.6716 11 14.5V18.5C11 19.3284 10.3284 20 9.5 20H5.5C4.67157 20 4 19.3284 4 18.5V14.5ZM14.5 13C13.6716 13 13 13.6716 13 14.5V18.5C13 19.3284 13.6716 20 14.5 20H18.5C19.3284 20 20 19.3284 20 18.5V14.5C20 13.6716 19.3284 13 18.5 13H14.5Z" fill="#A1A5B7" />
                </svg>
                Banner
                <i class={subBannerToggle ? "bi bi-chevron-down" : "bi bi-chevron-right"} style={"/Active-Banner" == location?.pathname || '/InActive-Banner' == location?.pathname ? { color: "white" } : { color: "#A1A5B7" }} ></i>
              </a>
              <motion.div
                animate={subBannerToggle ? "open" : "closed"}
                variants={
                  {
                    open: { opacity: 1, y: 0, },
                    closed: { opacity: 0, y: "100%" },
                  }}>

                <ul className="sub-category" style={{ display: subBannerToggle ? "block" : "none" }}  >

                  <li><Link to="/Active-Banner" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>Active Banner<i class="bi bi-chevron-right"></i></Link></li>
                  <li><Link to="/InActive-Banner" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>inActive Banner <i class="bi bi-chevron-right"></i></Link></li>

                </ul>
              </motion.div>

              <a id="admintoggle1" onClick={() => setTournamentToggle(!subTournamentToggle)} style={"/Active-Tournament" == location?.pathname || '/InActive-Tournament' == location?.pathname || '/Feature-Tournament' == location?.pathname || '/Daily-Tournament' == location?.pathname ? { backgroundColor: "#F1416C", color: "white" } : { backgroundColor: "white", color: "#A1A5B7" }}>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <rect x="4" y="4" width="7" height="7" rx="1.5" fill="white" />
                  <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 4.67157 13.6716 4 14.5 4H18.5C19.3284 4 20 4.67157 20 5.5V9.5C20 10.3284 19.3284 11 18.5 11H14.5C13.6716 11 13 10.3284 13 9.5V5.5ZM4 14.5C4 13.6716 4.67157 13 5.5 13H9.5C10.3284 13 11 13.6716 11 14.5V18.5C11 19.3284 10.3284 20 9.5 20H5.5C4.67157 20 4 19.3284 4 18.5V14.5ZM14.5 13C13.6716 13 13 13.6716 13 14.5V18.5C13 19.3284 13.6716 20 14.5 20H18.5C19.3284 20 20 19.3284 20 18.5V14.5C20 13.6716 19.3284 13 18.5 13H14.5Z" fill="#A1A5B7" />
                </svg>
                Tournament
                <i class={subTournamentToggle ? "bi bi-chevron-down" : "bi bi-chevron-right"} style={"/Active-Tournament" == location?.pathname || '/InActive-Tournament' == location?.pathname || '/Feature-Tournament' == location?.pathname || '/Daily-Tournament' == location?.pathname ? { color: "white" } : { color: "#A1A5B7" }} ></i>
              </a>
              <motion.div
                animate={subTournamentToggle ? "open" : "closed"}
                variants={
                  {
                    open: { opacity: 1, y: 0, },
                    closed: { opacity: 0, y: "100%" },
                  }}>

                <ul className="sub-category" style={{ display: subTournamentToggle ? "block" : "none" }}  >

                  <li><Link to="/Active-Tournament" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>Active Tournament<i class="bi bi-chevron-right"></i></Link></li>
                  <li><Link to="/InActive-Tournament" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>InActive Tournament<i class="bi bi-chevron-right"></i></Link></li>
                  <li><Link to="/Feature-Tournament" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>Feature Tournament<i class="bi bi-chevron-right"></i></Link></li>
                  <li><Link to="/Daily-Tournament" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>Daily Tournament<i class="bi bi-chevron-right"></i></Link></li>


                </ul>
              </motion.div>
              <a id="admintoggle1" onClick={() => setTournamentRoomToggle(!TournamentRoomToggle)} style={location.pathname?.includes("match") ? { backgroundColor: "#F1416C", color: "white" } : { backgroundColor: "white", color: "#A1A5B7" }}>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <rect x="4" y="4" width="7" height="7" rx="1.5" fill="white" />
                  <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 4.67157 13.6716 4 14.5 4H18.5C19.3284 4 20 4.67157 20 5.5V9.5C20 10.3284 19.3284 11 18.5 11H14.5C13.6716 11 13 10.3284 13 9.5V5.5ZM4 14.5C4 13.6716 4.67157 13 5.5 13H9.5C10.3284 13 11 13.6716 11 14.5V18.5C11 19.3284 10.3284 20 9.5 20H5.5C4.67157 20 4 19.3284 4 18.5V14.5ZM14.5 13C13.6716 13 13 13.6716 13 14.5V18.5C13 19.3284 13.6716 20 14.5 20H18.5C19.3284 20 20 19.3284 20 18.5V14.5C20 13.6716 19.3284 13 18.5 13H14.5Z" fill="#A1A5B7" />
                </svg>
                Tournament Room
                <i class={TournamentRoomToggle ? "bi bi-chevron-down" : "bi bi-chevron-right"} style={location.pathname?.includes("match") ? { color: "white" } : { color: "#A1A5B7" }} onClick={() => setTournamentRoomToggle(!TournamentRoomToggle)}></i>
              </a>
              <motion.div
                animate={TournamentRoomToggle ? "open" : "closed"}
                variants={
                  {
                    open: { opacity: 1, y: 0, },
                    closed: { opacity: 0, y: "100%" },
                  }}>

                <ul className="sub-category" style={{ display: TournamentRoomToggle ? "block" : "none" }}  >


                  <li><Link to="/Running-match" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>Running match<i class="bi bi-chevron-right"></i></Link></li>
                  <li><Link to="/Completed-match" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>Completed match<i class="bi bi-chevron-right"></i></Link></li>
                  <li><Link to="/Cancelled-match" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>Cancelled match<i class="bi bi-chevron-right"></i></Link></li>


                </ul>
              </motion.div>




            </div>
            <div>
              <a style={{ color: '#4A4B68' }}>Account</a>

              <a id="admintoggle1" style={"/Active-Subadmin" == location?.pathname || '/InActive-Subadmin' == location?.pathname || '/Feature-Subadmin' == location?.pathname ? { backgroundColor: "#F1416C", color: "white" } : { backgroundColor: "white", color: "#A1A5B7" }} onClick={() => setAdminToggle(!subAdminToggle)}>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <rect x="4" y="4" width="7" height="7" rx="1.5" fill="white" />
                  <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 4.67157 13.6716 4 14.5 4H18.5C19.3284 4 20 4.67157 20 5.5V9.5C20 10.3284 19.3284 11 18.5 11H14.5C13.6716 11 13 10.3284 13 9.5V5.5ZM4 14.5C4 13.6716 4.67157 13 5.5 13H9.5C10.3284 13 11 13.6716 11 14.5V18.5C11 19.3284 10.3284 20 9.5 20H5.5C4.67157 20 4 19.3284 4 18.5V14.5ZM14.5 13C13.6716 13 13 13.6716 13 14.5V18.5C13 19.3284 13.6716 20 14.5 20H18.5C19.3284 20 20 19.3284 20 18.5V14.5C20 13.6716 19.3284 13 18.5 13H14.5Z" fill="#A1A5B7" />
                </svg>
                Sub Admin
                <i class={subAdminToggle ? "bi bi-chevron-down" : "bi bi-chevron-right"} style={"/Active-Subadmin" == location?.pathname || '/InActive-Subadmin' == location?.pathname || '/Feature-Subadmin' == location?.pathname ? { color: "white" } : { color: "#A1A5B7" }} ></i>
              </a>
              <motion.div
                animate={subAdminToggle ? "open" : "closed"}
                variants={
                  {
                    open: { opacity: 1, y: 0, },
                    closed: { opacity: 0, y: "100%" },
                  }}>

                <ul className="sub-category" style={{ display: subAdminToggle ? "block" : "none" }}  >

                  <li><Link to="/Active-Subadmin" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>Active Sub Admin<i class="bi bi-chevron-right"></i></Link></li>



                </ul>
              </motion.div>

              <a id="admintoggle1" onClick={() => setuserToggle(!subuserToggle)} style={location?.pathname.includes("Users") ? { backgroundColor: "#F1416C", color: "white" } : { backgroundColor: "white", color: "#A1A5B7" }}>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <rect x="4" y="4" width="7" height="7" rx="1.5" fill="white" />
                  <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 4.67157 13.6716 4 14.5 4H18.5C19.3284 4 20 4.67157 20 5.5V9.5C20 10.3284 19.3284 11 18.5 11H14.5C13.6716 11 13 10.3284 13 9.5V5.5ZM4 14.5C4 13.6716 4.67157 13 5.5 13H9.5C10.3284 13 11 13.6716 11 14.5V18.5C11 19.3284 10.3284 20 9.5 20H5.5C4.67157 20 4 19.3284 4 18.5V14.5ZM14.5 13C13.6716 13 13 13.6716 13 14.5V18.5C13 19.3284 13.6716 20 14.5 20H18.5C19.3284 20 20 19.3284 20 18.5V14.5C20 13.6716 19.3284 13 18.5 13H14.5Z" fill="#A1A5B7" />
                </svg>
                Users
                <i class={subuserToggle ? "bi bi-chevron-down" : "bi bi-chevron-right"} style={location?.pathname.includes("Users") ? { color: "white" } : { color: "#A1A5B7" }} ></i>
              </a>
              <motion.div
                animate={subuserToggle ? "open" : "closed"}
                variants={
                  {
                    open: { opacity: 1, y: 0, },
                    closed: { opacity: 0, y: "100%" },
                  }}>

                <ul className="sub-category" style={{ display: subuserToggle ? "block" : "none" }}  >

                  <li><Link to="/Active-Users" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>Active Users<i class="bi bi-chevron-right"></i></Link></li>
                </ul>
              </motion.div>

              <Link to='/All-Posts' style={"/All-Posts" == location?.pathname ? { backgroundColor: "#F1416C", color: "white" } : { backgroundColor: "white", color: "#A1A5B7" }}>



                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.98528 4.01472 11 6.5 11Z" fill="white" />
                  <path opacity="0.3" d="M13 6.5C13 4 15 2 17.5 2C20 2 22 4 22 6.5C22 9 20 11 17.5 11C15 11 13 9 13 6.5ZM6.5 22C9 22 11 20 11 17.5C11 15 9 13 6.5 13C4 13 2 15 2 17.5C2 20 4 22 6.5 22ZM17.5 22C20 22 22 20 22 17.5C22 15 20 13 17.5 13C15 13 13 15 13 17.5C13 20 15 22 17.5 22Z" fill="#A1A5B7" />
                </svg>


                All Posts
                <i class="bi bi-chevron-right" style={"/Story" == location?.pathname ? { color: "white" } : { color: "#A1A5B7" }}></i>
              </Link>
              <Link to='/World-Chat' style={"/World-Chat" == location?.pathname ? { backgroundColor: "#F1416C", color: "white" } : { backgroundColor: "white", color: "#A1A5B7" }}>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M14.7499 2.5H9.2499C6.9899 2.5 5.1499 4.34 5.1499 6.6V17.4C5.1499 19.66 6.9899 21.5 9.2499 21.5H14.7499C17.0099 21.5 18.8499 19.66 18.8499 17.4V6.6C18.8499 4.34 17.0099 2.5 14.7499 2.5Z" fill="#A1A5B7" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.95 18.15C11.44 18.15 11 17.71 11 17.2C11 16.69 11.44 16.25 11.95 16.25C12.46 16.25 12.9 16.69 12.9 17.2C12.9 17.71 12.46 18.15 11.95 18.15Z" fill="white" />
                </svg>


                world chat
                <i class="bi bi-chevron-right" style={"/World-Chat" == location?.pathname ? { color: "white" } : { color: "#A1A5B7" }}></i>
              </Link>

              <a id="admintoggle1" style={"/add_money_request" == location?.pathname ? { backgroundColor: "#F1416C", color: "white" } : { backgroundColor: "white", color: "#A1A5B7" }} onClick={() => setPaymentToggle(!subpaymentToggle)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <rect x="4" y="4" width="7" height="7" rx="1.5" fill="white" />
                  <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 4.67157 13.6716 4 14.5 4H18.5C19.3284 4 20 4.67157 20 5.5V9.5C20 10.3284 19.3284 11 18.5 11H14.5C13.6716 11 13 10.3284 13 9.5V5.5ZM4 14.5C4 13.6716 4.67157 13 5.5 13H9.5C10.3284 13 11 13.6716 11 14.5V18.5C11 19.3284 10.3284 20 9.5 20H5.5C4.67157 20 4 19.3284 4 18.5V14.5ZM14.5 13C13.6716 13 13 13.6716 13 14.5V18.5C13 19.3284 13.6716 20 14.5 20H18.5C19.3284 20 20 19.3284 20 18.5V14.5C20 13.6716 19.3284 13 18.5 13H14.5Z" fill="#A1A5B7" />
                </svg>
                payment
                <i class={subpaymentToggle ? "bi bi-chevron-down" : "bi bi-chevron-right"} style={"/All-Payment" == location?.pathname ? { color: "white" } : { color: "#A1A5B7" }}></i>
              </a>
              <motion.div
                animate={subpaymentToggle ? "open" : "closed"}
                variants={
                  {
                    open: { opacity: 1, y: 0, },
                    closed: { opacity: 0, y: "100%" },
                  }
                }
              >
                <ul className="sub-category" style={{ display: subpaymentToggle ? "block" : "none" }}  >

                  <li><Link to="/add_money_request" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>Add Money Req<i class="bi bi-chevron-right"></i></Link></li>
                  <li><Link to="/withdraw_money_request" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>Withdraw  Req<i class="bi bi-chevron-right"></i></Link></li>




                </ul>
              </motion.div>
              <Link to='/report-posts' style={"/report-posts" == location?.pathname ? { backgroundColor: "#F1416C", color: "white" } : { backgroundColor: "white", color: "#A1A5B7" }}>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z" fill="#A1A5B7" />
                  <path d="M19.1 9.99922C18.7 9.59922 18.1 9.59922 17.7 9.99922L10.7 16.9992H2V18.9992C2 19.5992 2.4 19.9992 3 19.9992H21C21.6 19.9992 22 19.5992 22 18.9992V12.8992L19.1 9.99922Z" fill="#A1A5B7" />
                </svg>


                Report posts
                <i class="bi bi-chevron-right" style={"/report-posts" == location?.pathname ? { color: "white" } : { color: "#A1A5B7" }}></i>
              </Link>


              <Link to='/Reason-List' style={"/Reason-List" == location?.pathname ? { backgroundColor: "#F1416C", color: "white" } : { backgroundColor: "white", color: "#A1A5B7" }}>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z" fill="#A1A5B7" />
                  <path d="M19.1 9.99922C18.7 9.59922 18.1 9.59922 17.7 9.99922L10.7 16.9992H2V18.9992C2 19.5992 2.4 19.9992 3 19.9992H21C21.6 19.9992 22 19.5992 22 18.9992V12.8992L19.1 9.99922Z" fill="#A1A5B7" />
                </svg>


                Reason
                <i class="bi bi-chevron-right" style={"/Reason-List" == location?.pathname ? { color: "white" } : { color: "#A1A5B7" }}></i>
              </Link>

              <Link to='/contact-us' style={"/contact-us" == location?.pathname ? { backgroundColor: "#F1416C", color: "white" } : { backgroundColor: "white", color: "#A1A5B7" }}>


                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z" fill="#A1A5B7" />
                  <path d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z" fill="white" />
                </svg>



                Contact Us
                <i class="bi bi-chevron-right" style={"/contact-us" == location?.pathname ? { color: "white" } : { color: "#A1A5B7" }}></i>
              </Link>

              <Link to='/device-ban' style={"/device-ban" == location?.pathname ? { backgroundColor: "#F1416C", color: "white" } : { backgroundColor: "white", color: "#A1A5B7" }}>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M14.7499 2.5H9.2499C6.9899 2.5 5.1499 4.34 5.1499 6.6V17.4C5.1499 19.66 6.9899 21.5 9.2499 21.5H14.7499C17.0099 21.5 18.8499 19.66 18.8499 17.4V6.6C18.8499 4.34 17.0099 2.5 14.7499 2.5Z" fill="#A1A5B7" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.95 18.15C11.44 18.15 11 17.71 11 17.2C11 16.69 11.44 16.25 11.95 16.25C12.46 16.25 12.9 16.69 12.9 17.2C12.9 17.71 12.46 18.15 11.95 18.15Z" fill="white" />
                </svg>


                Device Ban
                <i class="bi bi-chevron-right" style={"/device-ban" == location?.pathname ? { color: "white" } : { color: "#A1A5B7" }}></i>
              </Link>

              <Link to='/static-list' style={"/static-list" == location?.pathname ? { backgroundColor: "#F1416C", color: "white" } : { backgroundColor: "white", color: "#A1A5B7" }}>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M14.7499 2.5H9.2499C6.9899 2.5 5.1499 4.34 5.1499 6.6V17.4C5.1499 19.66 6.9899 21.5 9.2499 21.5H14.7499C17.0099 21.5 18.8499 19.66 18.8499 17.4V6.6C18.8499 4.34 17.0099 2.5 14.7499 2.5Z" fill="#A1A5B7" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.95 18.15C11.44 18.15 11 17.71 11 17.2C11 16.69 11.44 16.25 11.95 16.25C12.46 16.25 12.9 16.69 12.9 17.2C12.9 17.71 12.46 18.15 11.95 18.15Z" fill="white" />
                </svg>


                Static List
                <i class="bi bi-chevron-right" style={"/static-list" == location?.pathname ? { color: "white" } : { color: "#A1A5B7" }}></i>
              </Link>
              <Link to='/Chat-group' style={"/Chat-group" == location?.pathname ? { backgroundColor: "#F1416C", color: "white" } : { backgroundColor: "white", color: "#A1A5B7" }}>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M14.7499 2.5H9.2499C6.9899 2.5 5.1499 4.34 5.1499 6.6V17.4C5.1499 19.66 6.9899 21.5 9.2499 21.5H14.7499C17.0099 21.5 18.8499 19.66 18.8499 17.4V6.6C18.8499 4.34 17.0099 2.5 14.7499 2.5Z" fill="#A1A5B7" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.95 18.15C11.44 18.15 11 17.71 11 17.2C11 16.69 11.44 16.25 11.95 16.25C12.46 16.25 12.9 16.69 12.9 17.2C12.9 17.71 12.46 18.15 11.95 18.15Z" fill="white" />
                </svg>


                Chat Group
                <i class="bi bi-chevron-right" style={"/static-list" == location?.pathname ? { color: "white" } : { color: "#A1A5B7" }}></i>
              </Link>

              <motion.div
                animate={spotlighttoggle ? "open" : "closed"}
                variants={
                  {
                    open: { opacity: 1, y: 0, },
                    closed: { opacity: 0, y: "100%" },
                  }
                }
              >
                <ul className="sub-category" style={{ display: spotlighttoggle ? "block" : "none" }}  >

                  <li><Link to="/pending-spotlight" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>Pending<i class="bi bi-chevron-right"></i></Link></li>
                  <li><Link to="/ongoing-spotlight" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>Ongoing<i class="bi bi-chevron-right"></i></Link></li>
                  <li><Link to="/complete-spotlight" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>Complete<i class="bi bi-chevron-right"></i></Link></li>
                  <li><Link to="/rejected-spotlight" className='link-a ' style={{ width: '100%', display: 'block', height: '100%' }}>Rejected<i class="bi bi-chevron-right"></i></Link></li>




                </ul>
              </motion.div>

             

              <Link to='/Live-Support' style={"/Live-Support" == location?.pathname ? { backgroundColor: "#F1416C", color: "white" } : { backgroundColor: "white", color: "#A1A5B7" }}>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M15.3567 4.94166C15.3567 4.56288 15.4165 4.20203 15.5219 3.86384C15.5623 3.73447 15.469 3.59766 15.3336 3.59766H6.6015C4.3839 3.59766 2.5791 5.40246 2.5791 7.62966V14.292C2.5791 16.5192 4.3839 18.324 6.6015 18.324H7.6287C8.1087 18.324 8.5791 18.5256 8.9247 18.8616L10.2879 20.2344C10.6047 20.5512 11.0175 20.724 11.4591 20.724C11.9007 20.724 12.3231 20.5512 12.6303 20.2344L13.9935 18.8616C14.3487 18.516 14.7999 18.324 15.2895 18.324H16.3167C18.5343 18.324 20.3391 16.5192 20.3391 14.292V8.51433C20.3391 8.37694 20.1987 8.28352 20.0683 8.32688C19.7099 8.44603 19.325 8.51286 18.9279 8.51286C16.9599 8.51286 15.3567 6.90966 15.3567 4.94166Z" fill="#A1A5B7" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9096 2.81348C17.7336 2.81348 16.7803 3.76676 16.7803 4.94276C16.7803 6.11876 17.7336 7.07204 18.9096 7.07204C20.0856 7.07204 21.0388 6.11876 21.0388 4.94276C21.0388 3.76676 20.0856 2.81348 18.9096 2.81348Z" fill="white" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3298 12.1806C13.7826 12.1806 13.3314 11.7294 13.3314 11.1822C13.3314 10.635 13.7826 10.1934 14.3298 10.1934C14.877 10.1934 15.3186 10.635 15.3186 11.1822C15.3186 11.7294 14.877 12.1806 14.3298 12.1806ZM8.84818 12.1806C8.30098 12.1806 7.85938 11.7294 7.85938 11.1822C7.85938 10.635 8.30098 10.1934 8.84818 10.1934C9.39538 10.1934 9.84659 10.635 9.84659 11.1822C9.84659 11.7294 9.39538 12.1806 8.84818 12.1806Z" fill="white" />
                </svg>


                Live Support
                <i class="bi bi-chevron-right" style={"/Live-Support" == location?.pathname ? { color: "white" } : { color: "#A1A5B7" }}></i>
              </Link>





              <Link to='/setting' style={"/setting" == location?.pathname ? { backgroundColor: "#F1416C", color: "white" } : { backgroundColor: "white", color: "#A1A5B7" }}>


                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z" fill="#A1A5B7" />
                  <path d="M17.0996 12.0996C17.0996 14.8996 14.8996 17.0996 12.0996 17.0996C9.29961 17.0996 7.09961 14.8996 7.09961 12.0996C7.09961 9.29961 9.29961 7.09961 12.0996 7.09961C14.8996 7.09961 17.0996 9.29961 17.0996 12.0996ZM12.0996 10.0996C10.9996 10.0996 10.0996 10.9996 10.0996 12.0996C10.0996 13.1996 10.9996 14.0996 12.0996 14.0996C13.1996 14.0996 14.0996 13.1996 14.0996 12.0996C14.0996 10.9996 13.1996 10.0996 12.0996 10.0996Z" fill="white" />
                </svg>

                Setting
                <i class="bi bi-chevron-right" style={"/setting" == location?.pathname ? { color: "white" } : { color: "#A1A5B7" }}></i>
              </Link>
            </div>



          </div>
        </motion.div>


        <div className="sidebar-right ">
          <Outlet />

        </div>

      </div>


    </>
  )
}

export default Sidebar