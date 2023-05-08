import React from 'react'
import './App.css'
import './dashboard/dashboard.css'
import './component/component.css'
import './Auth/Auth.css'
import './Pages/ContactUs'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './component/Sidebar'
import { HashRouter, Route,Routes } from 'react-router-dom'
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
const  PresistLogin  = React.lazy(() => import('./Auth/PresistLogin'));
const  Required_Login  = React.lazy(() => import('./Auth/Requiredlogin'));





const App = () => {
  return (
   <>
   <HashRouter>
    <Routes>
    <Route element={<Protected_Details />}>
    <Route path="/login" element={<Login/>} />
    <Route path="/Verify-Otp" element={<Otp/>} />
    <Route path="/forget" element={<Forget/>} />
    </Route>
 <Route element={<PresistLogin />}>
 <Route element={<Required_Login />}>
    <Route path="/" element={<Sidebar/>}>
<Route path="/" element={<Dashboard/>} />
<Route path="/event" element={<Event/>} />
<Route path="/Games" element={<Games/>} />
<Route path="/Tournament" element={<Tournament/>} />
<Route path="/AddTournament" element={<AddTournament/>} />
<Route path="/Users" element={<Users/>} />
<Route path="/Usersdetails" element={<UserDetails/>} />
<Route path="/Story" element={<Story/>} />
<Route path="/Edit-Story" element={<EditStory/>} />
<Route path="/Tournament-page" element={<Tournament_page/>} />
<Route path="/Tournament-details" element={<Tournament_details/>} />
<Route path="/Rooms_Details" element={<Rooms_Details/>} />
<Route path="/report-user" element={<Report/>} />
<Route path="/Live-Support" element={<LiveSupport/>} />
<Route path="/live-support-Details" element={<Details/>} />
<Route path="/contact-us" element={<ContactUs/>} />
<Route path="/device-ban" element={<DeviceBan/>} />
<Route path="/static-list" element={<StaticList/>} />
<Route path="/setting" element={<Setting/>} />
</Route> 
</Route>

    

    </Route>
    </Routes>
    </HashRouter>

    <ToastContainer />

   </>
  )
}

export default App