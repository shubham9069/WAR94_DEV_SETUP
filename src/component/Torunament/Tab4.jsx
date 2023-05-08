import React from 'react'

const Tab4 = ({tournamentData,handleinput,setTournamentData}) => {
  const {entry_type,entry_fees,max_players,max_one_room,min_one_room,allow_cancel} = tournamentData
  return (
   <>
         
                <div className="inputwrapper">
                <p className='span-text-dark' >Enter Type</p>
                <div style={{flex:2}}>
                <select className="form-input" style={{marginRight:10}} name="entry_type" onChange={handleinput}>
                    <option selected={entry_type=='1'} value="1"> free</option>
                    <option selected={entry_type=='2'} value='2'> Paid</option>
                   
                </select>

                {entry_type==2 && (<input type="number" className="form-input" placeholder='₹ 100' name="entry_fees" value={entry_fees} onChange={handleinput}></input>)}
                
                </div>
                </div>

                <div className="inputwrapper">
                <p className='span-text-dark' >Maximum Player</p>
                <input type="Number" className="form-input" placeholder='1000' name="max_players" value={max_players} onChange={handleinput}></input>
                </div>

                <div className="inputwrapper">
                <p className='span-text-dark' >Maximum 1 Room Player</p>
                <input type="Number" className="form-input" placeholder='100' name="max_one_room" value={max_one_room} onChange={handleinput}></input>
                </div>
                <div className="inputwrapper">
                <p className='span-text-dark' >Minimum 1 Room Player</p>
                <input type="Number" className="form-input" placeholder='50' name="min_one_room" value={min_one_room} onChange={handleinput}></input>
                </div>
               
                <div className="inputwrapper" style={{marginBottom:4}} >
                <p className='span-text-dark' >Auto cancel</p>
                <span className='span-text-light d-flex align-items-center' style={{flex: 2}}>
                <input  type="checkbox" className='event-toggle' checked={Number(allow_cancel)} style={{position:'relative',top:0,left:0,marginRight:8}} onChange={(e)=>setTournamentData({...tournamentData,["allow_cancel"]:e.target.checked? 1:0 })}></input>Active
                </span>
                
                </div>
                <div className="inputwrapper" >
                <p className='span-text-dark' ></p>
                <p style={{flex:2,color:'#D9214E',fontSize:'11px',fontWeight:600,letterSpacing:1.2}} >Room will auto cancel if minimum player not joined</p>
                
                </div>
                


   </>
  )
}

export default Tab4