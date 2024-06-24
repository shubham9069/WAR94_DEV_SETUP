import React, { Suspense } from 'react'
import './App.css'
import './dashboard/dashboard.css'
import './component/component.css'
import './Auth/Auth.css'
import './Pages/ContactUs'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './component/Sidebar'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import Event from './component/Event'
import Games from './component/Games'
import Tournament from './component/Torunament/Tournament'
import AddTournament from './component/Torunament/AddTournament'
import Users from './component/User/Users'
import Login from './Auth/Login'
import Forget from './Auth/Forget'
import Otp from './Auth/Otp'
import UserDetails from './component/User/UserDetails'
import Story from './component/Story/Story'
import EditStory from './component/Story/EditStory'
import Tournament_page from './component/Tournament_Room/Tournament_page'
import Tournament_details from './component/Tournament_Room/Tournament_details'
import Rooms_Details from './component/Tournament_Room/Rooms_Details'
import Report from './component/Report/Report'
import LiveSupport from './component/LiveSupport/LiveSupport'
import Details from './component/LiveSupport/Details'
import Protected_Details from './Auth/Protected'
import ContactUs from './Pages/ContactUs'
import DeviceBan from './Pages/DeviceBan'
import StaticList from './Pages/StaticList'
import Setting from './Pages/Setting'

import AddAdmin from './component/SubAdmin/AddAdmin'
import ProVerification from './Pages/ProVerification'
import ChatGroup from './component/ChatGroup/ChatGroup'
import Spotlight from './Pages/Spotlight'
import EmailMarketing from './Pages/EmailMarketing'
import WorldChat from './Pages/WorldChat'


const ReasonList = React.lazy(() => import("./ReasonList"))
const PresistLogin = React.lazy(() => import('./Auth/PresistLogin'));
const Required_Login = React.lazy(() => import('./Auth/Requiredlogin'));
const AllPosts = React.lazy(() => import('./component/AllPosts/Posts'));
const Payment = React.lazy(() => import('./Pages/Payment'));
const Postview = React.lazy(() => import('./component/Report/Postview'));
const Subadmin = React.lazy(() => import('./component/SubAdmin/Subadmin'));
const Banner = React.lazy(() => import('./component/Banner'));
const Tournament_by_Game = React.lazy(() => import('./component/Tournament_Room/Tournament'))





const App = () => {
  return (
    <>


      <HashRouter>
        <Suspense fallback={<div className="loader-gif">
          <img src="images/loadergif.gif"></img>
        </div>}>
          <Routes>

            <Route element={<Protected_Details />}>
              <Route path="/login" element={<Login />} />
              <Route path="/Verify-Otp" element={<Otp />} />
              <Route path="/forget" element={<Forget />} />
            </Route>
            <Route element={<PresistLogin />}>
              <Route element={<Required_Login />}>

                <Route path="/" element={<Sidebar />}>
                  <Route path="/" element={<Dashboard />} />

                  <Route path="/Active-event" element={<Event Status_Active_InActive={1} />} />
                  <Route path="/In-active-event" element={<Event Status_Active_InActive={0} />} />

                  <Route path="/Active-Games" element={<Games Status_Active_InActive={1} />} />
                  <Route path="/InActive-Games" element={<Games Status_Active_InActive={0} />} />

                  <Route path='/Active-Banner' element={<Banner Status_Active_InActive={1} />} />
                  <Route path='/InActive-Banner' element={<Banner Status_Active_InActive={0} />} />

                  <Route path="/Active-Tournament" element={<Tournament Status_Active_InActive={1} type="status" />} />
                  <Route path="/InActive-Tournament" element={<Tournament Status_Active_InActive={0} type="status" />} />
                  <Route path="/Feature-Tournament" element={<Tournament Status_Active_InActive={1} type="tournament_show" />} />
                  <Route path="/Daily-Tournament" element={<Tournament Status_Active_InActive={2} type="tournament_show" />} />

                  <Route path="/AddTournament" element={<AddTournament />} />
                  <Route path="/Active-Subadmin" element={<Subadmin />} />
                  <Route path="/Add-Subadmin" element={<AddAdmin />} />


                  <Route path="/Running-match" element={<Tournament_page status={1} />} />
                  <Route path="/Completed-match" element={<Tournament_page status={2} />} />
                  <Route path="/Cancelled-match" element={<Tournament_page status={3} />} />
                  <Route path="/Tournament/:game_id" element={<Tournament_by_Game />} />
                  <Route path="/Tournament-details/:id" element={<Tournament_details />} />
                  <Route path="/Rooms_Details/:Roomid" element={<Rooms_Details />} />

                  <Route path="/Active-Users" element={<Users />} />
                  <Route path="/Usersdetails/:id" element={<UserDetails />} />

                  <Route path="/report-posts" element={<Report URL={"/get_post_reports"} />} />
                  <Route path="/report-post-view/:id" element={<Postview />} />

                  <Route path="/Reason-List" element={<ReasonList />} />

                  <Route path="/All-Payment" element={<Payment URL={"/get_all_transactions"} />} />
                  <Route path="/withdraw_money_request" element={<Payment URL={"/withdraw_money_request"} />} />
                  <Route path="/add_money_request" element={<Payment URL={"/add_money_request"} />} />

                  <Route path="/All-Posts" element={<AllPosts />} />
                  {/* <Route path="/Story" element={<Story/>} /> */}
                  {/* <Route path="/Edit-Story" element={<EditStory/>} /> */}


                  <Route path="/Live-Support" element={<LiveSupport />} />
                  <Route path="/live-support-Details" element={<Details />} />

                  <Route path="/contact-us" element={<ContactUs />} />

                  <Route path="/Chat-group" element={<ChatGroup />} />

                  <Route path="/World-Chat" element={<WorldChat />} />
                  <Route path="/device-ban" element={<DeviceBan />} />

                  <Route path="/static-list" element={<StaticList />} />
                  <Route path="/setting" element={<Setting />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>

      <ToastContainer />
      <div id="fullpage" >
        <i class="bi bi-x-circle-fill" style={{ color: "white", fontSize: 25, margin: '2rem 2rem 2rem auto', float: 'right' }} onClick={() => {
          const fullPage = document.querySelector('#fullpage');
          fullPage.style.display = 'none';
        }}></i>
      </div>
    </>
  )
}

export default App