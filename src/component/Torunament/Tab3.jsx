import React from 'react'

const Tab3 = ({ ranks, setRanks, tournamentData, setTournamentData, handleinput }) => {
  const { price_per_kill } = tournamentData

  const RankData = (rank, price) => {
    console.log(price)
    var data = ranks.map((element) => {

      return element.rank == rank ? { rank: Number(rank), price: price } : element
    })
    console.log(data)
    setRanks(data)

  }
  return (
    <>
      <button className="themeButton" style={{ margin: '0 1rem 1rem auto', background: ' #A1A5B7', borderColor: 'transparent' }} onClick={() => setRanks([...ranks, { rank: ranks.length + 1, price: "" }])} >Add Rank</button>
      <div className="inputwrapper">
        <p className='span-text-dark' >Per Kill</p>
        <input type="number" className="form-input" placeholder='0Rs' value={price_per_kill} name="price_per_kill" onChange={handleinput}></input>
      </div>
      {ranks?.map((data) => {

        return <div className="inputwrapper">
          <p className='span-text-dark' >Rank {data?.rank}</p>
          <input type="number" className="form-input" placeholder='0Rs' name={data?.rank} value={ranks.find(a => a.rank == data?.rank)?.price} onChange={(e) => RankData(e.target.name, e.target.value)}></input>
        </div>
      })}


    </>
  )
}

export default Tab3