import React, { useState } from 'react'
import { json, useLocation } from 'react-router-dom'
import Tab1 from './Tab1'
import Tab3 from './Tab3'
import Tab4 from './Tab4'
import Tab2 from './Tab2'
import axios from '../../axios'
import { toast } from 'react-toastify'
import { AuthContext } from '../../AuthProvider'
import { useContext } from 'react'



const AddTournament = () => {
  const { userToken, dispatch, state } = useContext(AuthContext)
  const { AllGames, TournamnetData } = state

  const location = useLocation()
  const Tdata = location.state?.item

  const [tab, settab] = useState(1)
  const [Country, setCountry] = useState(Tdata != undefined ? JSON.parse(Tdata?.country_name) : []);
  const [tournamentData, setTournamentData] = useState({
    name: Tdata?.name || "",
    status: Tdata?.status || "0",
    tournament_image: Tdata?.tournament_image || "",
    tournament_type: Tdata?.tournament_type || "",
    camera_type: Tdata?.camera_type || "1",
    match_map: Tdata?.match_map || "",
    tournament_show: Tdata?.tournament_show || "1",
    date: Tdata?.date || "",
    start_time: Tdata?.start_time || "",
    entry_open_time: Tdata?.entry_open_time || "",
    entry_close_time: Tdata?.entry_close_time || "",
    price_per_kill: Tdata?.price_per_kill || "",
    entry_type: Tdata?.entry_type || "1",
    entry_fees: Tdata?.entry_fees || "0",
    max_players: Tdata?.max_players || "",
    max_one_room: Tdata?.max_one_room || "",
    min_one_room: Tdata?.min_one_room || "",
    allow_cancel: Tdata?.allow_cancel || "0",
    game_id: Tdata?.game_id || ""
  })
  const { name,
    status,
    tournament_image,
    tournament_type,
    camera_type,
    match_map,
    tournament_show,
    date,
    start_time,
    entry_open_time,
    entry_close_time,
    price_per_kill,
    entry_type,
    entry_fees,
    max_players,
    max_one_room,
    min_one_room,
    allow_cancel,
    game_id } = tournamentData

  const [ranks, setRanks] = useState(Tdata != undefined ? JSON.parse(Tdata?.ranks) : [{ rank: 1, price: "" }])
  const handleinput = (e) => {
    console.log(e.target.value)
    setTournamentData({ ...tournamentData, [e.target.name]: e.target.value })
  }

  const TournamnetUpload = async (e) => {
    e.preventDefault()


    var formData = new FormData();

    formData.append("name", name)
    formData.append("status", status)
    formData.append("image", tournament_image)
    formData.append("tournament_type", tournament_type)
    formData.append("camera_type", camera_type)
    formData.append("match_map", match_map)
    formData.append("tournament_show", tournament_show)
    formData.append("date", date)
    formData.append("start_time", start_time)
    formData.append("entry_open_time", entry_open_time)
    formData.append("entry_close_time", entry_close_time)
    formData.append("price_per_kill", price_per_kill)
    formData.append("entry_fees", entry_fees)
    formData.append("entry_type", entry_type)
    formData.append("max_players", max_players)
    formData.append("max_one_room", max_one_room)
    formData.append("min_one_room", min_one_room)
    formData.append("allow_cancel", allow_cancel)
    formData.append("game_id", game_id)
    formData.append("country_name", JSON.stringify(Country))
    formData.append("ranks", JSON.stringify(ranks))


    try {
      const response = await toast.promise(axios({
        method: "post",
        url: "/add_tournament",
        data: formData,
        headers: {
          'Authorization': `Bearer ${userToken} `,
          'Content-Type': 'multipart/form-data'
        },
      }),
        {
          pending: 'waiting',
          success: {
            render({ data }) {
              const newdata = data?.data
              var obj = {
                name,
                status,
                tournament_image: `https://shopninja.in/anurag/war94/public/storage/tournaments/${newdata?.image}`,
                tournament_type,
                camera_type,
                match_map,
                tournament_show,
                date,
                start_time,
                entry_open_time,
                entry_close_time,
                price_per_kill,
                entry_type,
                entry_fees,
                max_players,
                max_one_room,
                min_one_room,
                allow_cancel,
                game_id,
                game_name: AllGames.find(d => d.game_id == game_id)?.name,
                ranks: JSON.stringify(ranks),
                country_name: JSON.stringify(Country),
                tournament_id: newdata?.tournament_id

              }


              dispatch({ type: "Add", data: obj, name: "TournamnetData" })

              return newdata?.message
            }
          },
          error: {
            render({ data }) {

              return data?.response?.data?.message
            }
          },
        });


    } catch (err) {
      console.log(err)

    }

  }
  const TournamnetUpdate = async (e) => {
    e.preventDefault()


    var formData = new FormData();

    formData.append("name", name)
    formData.append("status", status)
    if (tournament_image['type'] != undefined) {
      formData.append("image", tournament_image)
    }

    formData.append("tournament_type", tournament_type)
    formData.append("camera_type", camera_type)
    formData.append("match_map", match_map)
    formData.append("tournament_show", tournament_show)
    formData.append("date", date)
    formData.append("start_time", start_time)
    formData.append("entry_open_time", entry_open_time)
    formData.append("entry_close_time", entry_close_time)
    formData.append("price_per_kill", price_per_kill)
    formData.append("entry_fees", entry_fees)
    formData.append("entry_type", entry_type)
    formData.append("max_players", max_players)
    formData.append("max_one_room", max_one_room)
    formData.append("min_one_room", min_one_room)
    formData.append("allow_cancel", allow_cancel)
    formData.append("game_id", game_id)
    formData.append("country_name", JSON.stringify(Country))
    formData.append("ranks", JSON.stringify(ranks))
    formData.append("tournament_id", Tdata?.tournament_id)

    try {
      const response = await toast.promise(axios({
        method: "post",
        url: '/update_tournament',
        data: formData,
        headers: {
          'Authorization': `Bearer ${userToken} `,
          'Content-Type': 'multipart/form-data'
        },
      }),
        {
          pending: 'waiting',
          success: {
            render({ data }) {
              const newdata = data?.data
              var obj = {
                name,
                status,
                tournament_image: `https://shopninja.in/anurag/war94/public/storage/tournaments/${newdata?.image}`,
                tournament_type,
                camera_type,
                match_map,
                tournament_show,
                date,
                start_time,
                entry_open_time,
                entry_close_time,
                price_per_kill,
                entry_type,
                entry_fees,
                max_players,
                max_one_room,
                min_one_room,
                allow_cancel,
                game_id,
                game_name: AllGames.find(d => d.game_id == game_id)?.name,
                ranks: JSON.stringify(ranks),
                country_name: JSON.stringify(Country),
                tournament_id: Tdata?.tournament_id

              }
              let arr = TournamnetData?.map((element) => {

                return element.tournament_id == Tdata.tournament_id ? obj : element


              })
              console.log(arr)
              dispatch({ type: "initialData", data: arr, name: "TournamnetData" })

              return newdata?.message
            }
          },
          error: {
            render({ data }) {

              return data?.response?.data?.message
            }
          },
        });


    } catch (err) {
      console.log(err)

    }

  }


  return (
    <>
      <div className="event-top padding15rem">
        <span className='span-text-light'>Home </span>
        <span className='span-text-light'> / </span>
        <span className='span-text-dark'> {location?.pathname?.split('/')[1]} </span>

      </div>

      <div className="tournament padding15rem ">
        <div className="user-search">
          <span className="span-text-light" style={{ color: tab == 1 ? "#00A3FF" : '#A1A5B7', cursor: 'pointer' }} onClick={() => settab(1)}> Tournament Details</span>
          <span className="span-text-light" style={{ color: tab == 2 ? "#00A3FF" : '#A1A5B7', cursor: 'pointer' }} onClick={() => settab(2)}> Tournament Timing</span>
          <span className="span-text-light" style={{ color: tab == 3 ? "#00A3FF" : '#A1A5B7', cursor: 'pointer' }} onClick={() => settab(3)}> Pricing</span>
          <span className="span-text-light" style={{ color: tab == 4 ? "#00A3FF" : '#A1A5B7', cursor: 'pointer' }} onClick={() => settab(4)}> Setting</span>
        </div>

        <div className="padding15rem" style={{ backgroundColor: 'white', borderRadius: 12, margin: '1.5rem 0' }}>
          {tab == 1 && (<Tab1 tournamentData={tournamentData} setTournamentData={setTournamentData} handleinput={handleinput} setCountry={setCountry} Country={Country} />)}
          {tab == 2 && (<Tab2 tournamentData={tournamentData} setTournamentData={setTournamentData} handleinput={handleinput} />)}
          {tab == 3 && (<Tab3 ranks={ranks} setRanks={setRanks} handleinput={handleinput} tournamentData={tournamentData} setTournamentData={setTournamentData} />)}
          {tab == 4 && (<Tab4 handleinput={handleinput} tournamentData={tournamentData} setTournamentData={setTournamentData} />)}
          {tab == 4 ?
            <button className="themeButton" style={{ margin: '1.5rem 1rem 0 auto' }} onClick={Tdata ? TournamnetUpdate : TournamnetUpload}>Launch Tournaments</button>
            :
            <button className="themeButton" style={{ margin: '1.5rem 1rem 0 auto' }} onClick={() => settab(prev => prev == 4 ? 1 : prev + 1)}>Next</button>
          }
        </div>

      </div>



    </>
  )
}

export default AddTournament