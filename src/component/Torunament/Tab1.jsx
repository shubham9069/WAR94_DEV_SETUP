import React, { useContext, useMemo, useState } from 'react'
import { AuthContext } from '../../AuthProvider'
import { Dropdown } from 'react-bootstrap'


const Tab1 = ({ setTournamentData, tournamentData, handleinput, Country, setCountry }) => {
  const { state, country_list } = useContext(AuthContext)
  const { AllGames } = state
  const { name, status,
    tournament_image,
    tournament_type,
    camera_type,
    match_map,
    game_id } = tournamentData
  const [searchCon, setSearchCon] = useState("")


  const fileupload = (e) => {
    let file_input = document.getElementById('uploadefile-event4')
    file_input.click();
  }

  // to set country data 
  const checkItems = (e) => {
    if (e.target.checked) {
      setCountry([...Country, e.target.value])
    } else {

      var data = Country?.filter(element => element != e.target.value)
      setCountry(data)
    }
  }


  const tournamentType = useMemo(() => {
    let data = AllGames.find(game => game.game_id == game_id)
    let tournamentdata = []
    if (data != undefined) {
      tournamentdata = data
    }
    return tournamentdata

  }, [game_id])

  const searchCountry = useMemo(() => {

    if (!searchCon) {
      return country_list
    }
    let arr = country_list?.filter((country) => {
      let countrylow = country?.toLowerCase()

      return countrylow.includes(searchCon?.toLowerCase())
    })
    return arr
  }, [searchCon])

  const debounce = (func, delay) => {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func(...args)  // func.apply(null,args)     
      }, delay)
    }
  }
  const filerSearch = debounce((inputvalue) => setSearchCon(inputvalue.target.value), 300)




  return (
    <>

      <div className="inputwrapper" >
        <p className='span-text-dark' >active</p>
        <span className='span-text-light d-flex align-items-center' style={{ flex: 2 }}>
          <input type="checkbox" checked={Number(status)} className='event-toggle' style={{ position: 'relative', top: 0, left: 0, marginRight: 8 }} onChange={(e) => setTournamentData({ ...tournamentData, ["status"]: e.target.checked ? 1 : 0 })}></input>Active</span>

      </div>
      <div className="inputwrapper">
        <p className='span-text-dark' >Tournament Name</p>
        <input className="form-input" placeholder='Tournamnet Name' value={name} name="name" onChange={handleinput}></input>
      </div>
      <div className="inputwrapper">
        <p className='span-text-dark' >Country</p>
        <Dropdown style={{ width: '100%' }}>
          <Dropdown.Toggle className="form-input" style={{ border: 'none', background: 'transparent', width: '100%' }} id="dropdown-basic">
            <input className="form-input" value={Country} placeholder='Select Tournament' style={{ width: "100%" }}></input>
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu country-dropdown" >
            <div >

              <input className="form-input w-100" placeholder='search Bar' onChange={filerSearch}></input>

              <p style={{ fontSize: 12, color: '#B5B5C3', fontWeight: 600, margin: '1.5rem 0 0 0 ' }}>country</p>
              <div className="country-countainer d-flex " style={{ height: 200, overflowY: "auto" }}>


                {searchCountry?.map((data) => {

                  return <div className='d-flex justify-content-between' style={{ flex: '1 1 100px' }} >
                    <p style={{ fontSize: 12, margin: 0, fontWeight: 600 }}>{data}</p>
                    <input type="checkbox" value={data} checked={Country.includes(data)} onChange={checkItems} />
                  </div>
                })}

              </div>
            </div>

          </Dropdown.Menu>
        </Dropdown>
       
      </div>
      <div className="inputwrapper">
        <p className='span-text-dark' >Game</p>
        <select className="form-input" name="game_id" onChange={handleinput} >
          <option selected hidden >choose games </option>

          {AllGames?.map((game, i) => {

            return <option key={i} selected={game.game_id == game_id} value={game?.game_id} >{game?.name}</option>

          })}
        </select>
      </div>

      <div className="inputwrapper">
        <p className='span-text-dark' >Tournamnet Type</p>
        <select className="form-input" name="tournament_type" onChange={handleinput} >
          <option selected hidden >first chooose game </option>

          {JSON.parse(tournamentType?.game_type || "[]")?.map((item, i) => {

            return <option key={i} selected={item?.type == tournament_type} value={item?.type} >{item?.type}</option>
          })}

        </select>
      </div>
      <div className="inputwrapper">
        <p className='span-text-dark' >Camera Type</p>
        <select className="form-input" name="camera_type" onChange={handleinput} >
          <option selected={camera_type == "1"} value="1" >FPP </option>
          <option selected={camera_type == "2"} value="2" >TPP</option>

        </select>
      </div>
      <div className="inputwrapper">
        <p className='span-text-dark' >Match Type</p>
        <select className="form-input" name="match_map" onChange={handleinput} >
          <option selected hidden >first chooose game </option>

          {JSON.parse(tournamentType?.map_data || "[]")?.map((item, i) => {

            return item?.status == 1 ? <option key={i} selected={item?.game_name == match_map} value={item?.game_name} >{item?.game_name}</option> : ""
          })}

        </select>
      </div>


      <div className="inputwrapper" style={{ alignItems: 'flex-start' }}>
        <p className='span-text-dark' >Profile Img</p>
        <div className="upload-file ">
          {tournament_image ?
            <div className="d-flex align-items-center " style={{ flexDirection: 'row', gridGap: 20, padding: '1.5rem 2rem ' }}>

              <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setTournamentData({ ...tournamentData, ["tournament_image"]: "" })}>
                <path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M3.55349 9.81276C3.98869 6.51756 6.51757 3.98869 9.81276 3.55349C12.0781 3.2543 14.9119 3 18 3C21.0881 3 23.9219 3.2543 26.1872 3.55349C29.4824 3.98869 32.0113 6.51757 32.4465 9.81276C32.7457 12.0781 33 14.9119 33 18C33 21.0881 32.7457 23.9219 32.4465 26.1872C32.0113 29.4824 29.4824 32.0113 26.1872 32.4465C23.9219 32.7457 21.0881 33 18 33C14.9119 33 12.0781 32.7457 9.81276 32.4465C6.51756 32.0113 3.98869 29.4824 3.55349 26.1872C3.2543 23.9219 3 21.0881 3 18C3 14.9119 3.2543 12.0781 3.55349 9.81276Z" fill="#B5B5C3" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4393 12.4393C13.0251 11.8536 13.9749 11.8536 14.5607 12.4393L18 15.8787L21.4393 12.4393C22.0251 11.8536 22.9749 11.8536 23.5607 12.4393C24.1464 13.0251 24.1464 13.9749 23.5607 14.5607L20.1213 18L23.5607 21.4393C24.1464 22.0251 24.1464 22.9749 23.5607 23.5607C22.9749 24.1464 22.0251 24.1464 21.4393 23.5607L18 20.1213L14.5607 23.5607C13.9749 24.1464 13.0251 24.1464 12.4393 23.5607C11.8536 22.9749 11.8536 22.0251 12.4393 21.4393L15.8787 18L12.4393 14.5607C11.8536 13.9749 11.8536 13.0251 12.4393 12.4393Z" fill="#B5B5C3" />
              </svg>

              <img src={typeof tournament_image == 'string' ? tournament_image : URL.createObjectURL(tournament_image)} style={{ width: 70, height: 70, borderRadius: 6 }}></img>
              <div>
                <p className='span-text-light'>{tournament_image?.name} <span className='span-text-dark float-end' >100%</span></p>
                <div className='progressbar'>
                  <div style={{ width: 200 }} />
                </div>
              </div>
            </div>
            :
            <div className="center-div" onClick={fileupload}>
              <input type='file' hidden id="uploadefile-event4" onChange={(e) => setTournamentData({ ...tournamentData, ["tournament_image"]: e.target.files[0] })}></input>
              <svg width="65" height="65" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 25 }}>
                <path opacity="0.25" d="M9.875 13.166C9.875 7.7122 14.2962 3.29102 19.75 3.29102H51.868C54.487 3.29102 56.9987 4.33141 58.8507 6.18334L66.2327 13.5654C68.0846 15.4173 69.125 17.929 69.125 20.548V65.8327C69.125 71.2865 64.7038 75.7077 59.25 75.7077H19.75C14.2962 75.7077 9.875 71.2865 9.875 65.8327V13.166Z" fill="#00A3FF" />
                <path d="M49.375 6.22654C49.375 4.6053 50.6893 3.29102 52.3105 3.29102C54.6462 3.29102 56.8862 4.21885 58.5377 5.8704L66.5456 13.8783C68.1972 15.5299 69.125 17.7698 69.125 20.1055C69.125 21.7267 67.8107 23.041 66.1895 23.041H52.6667C50.8487 23.041 49.375 21.5673 49.375 19.7493V6.22654Z" fill="#00A3FF" />
                <path d="M38.2387 29.8748C37.8505 30.0354 37.4867 30.2735 37.1711 30.5891L27.2961 40.4641C26.0107 41.7496 26.0107 43.8338 27.2961 45.1192C28.5816 46.4047 30.6658 46.4047 31.9513 45.1192L36.207 40.8635V55.9583C36.207 57.7763 37.6808 59.25 39.4987 59.25C41.3166 59.25 42.7904 57.7763 42.7904 55.9583V40.8635L47.0461 45.1192C48.3316 46.4047 50.4158 46.4047 51.7013 45.1192C52.9867 43.8338 52.9867 41.7496 51.7013 40.4641L41.8263 30.5891C40.8564 29.6192 39.4318 29.3811 38.2387 29.8748Z" fill="#00A3FF" />
              </svg>

              <p className="span-text-dark" style={{ marginBottom: 0 }}> Quick File Uploader</p>
              <p className="span-text-light" style={{ marginBottom: 0 }}> Drag & Drop or choose files from computer</p>
              <p ></p>

            </div>
          }

        </div>
      </div>


    </>
  )
}

export default Tab1