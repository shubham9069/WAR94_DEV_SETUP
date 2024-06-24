import React from 'react'

const Tab2 = ({ tournamentData, setTournamentData, handleinput }) => {
  const {
    tournament_show,
    date,
    start_time,
    entry_open_time,
    entry_close_time,
  } = tournamentData
  return (
    <>
      <div className="inputwrapper">
        <p className='span-text-dark' >Tournament Show</p>
        <select className="form-input" name="tournament_show" onChange={handleinput} >
          <option selected={tournament_show == "1"} value={"1"}>featured </option>
          <option selected={tournament_show == "2"} value={"2"}>daily</option>
        </select>
      </div>
      <div className="inputwrapper">
        <p className='span-text-dark' >Tournament date </p>
        <input type="date" className="form-input" value={date} name="date" onChange={handleinput}></input>
      </div>
      <div className="inputwrapper">
        <p className='span-text-dark' >Tournament Start Time</p>
        <input type="time" className="form-input" value={start_time} name="start_time" onChange={handleinput}></input>
      </div>
      <div className="inputwrapper">
        <p className='span-text-dark' >Tournament end Time</p>
        <input type="time" className="form-input" value={entry_close_time} name="entry_close_time" onChange={handleinput}></input>
      </div>
      {tournament_show == '2' && (<div className="inputwrapper">
        <p className='span-text-dark' >Entry Open  Time</p>
        <input type="time" className="form-input" value={entry_open_time} name="entry_open_time" onChange={handleinput}></input>
      </div>)}




    </>
  )
}

export default Tab2