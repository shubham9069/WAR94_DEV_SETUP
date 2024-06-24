import React, { useState } from 'react'

const Room_Tab3 = () => {
  const [img, setImg] = useState("")


  const fileupload = (e) => {
    let file_input = document.getElementById('uploadefile-event')
    file_input.click();
  }
  return (
    <>
      <div className="d-flex Room_Tab3" style={{ gridGap: 20 }}>

        <div className="upload-file ">
          {img ?
            <div className="d-flex align-items-center " style={{ flexDirection: 'row', gridGap: 20, padding: '2rem', width: '100%', position: 'relative' }} >

              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setImg("")} style={{ position: 'absolute', top: 2, left: 2 }}>
                <path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M3.55349 9.81276C3.98869 6.51756 6.51757 3.98869 9.81276 3.55349C12.0781 3.2543 14.9119 3 18 3C21.0881 3 23.9219 3.2543 26.1872 3.55349C29.4824 3.98869 32.0113 6.51757 32.4465 9.81276C32.7457 12.0781 33 14.9119 33 18C33 21.0881 32.7457 23.9219 32.4465 26.1872C32.0113 29.4824 29.4824 32.0113 26.1872 32.4465C23.9219 32.7457 21.0881 33 18 33C14.9119 33 12.0781 32.7457 9.81276 32.4465C6.51756 32.0113 3.98869 29.4824 3.55349 26.1872C3.2543 23.9219 3 21.0881 3 18C3 14.9119 3.2543 12.0781 3.55349 9.81276Z" fill="#B5B5C3" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4393 12.4393C13.0251 11.8536 13.9749 11.8536 14.5607 12.4393L18 15.8787L21.4393 12.4393C22.0251 11.8536 22.9749 11.8536 23.5607 12.4393C24.1464 13.0251 24.1464 13.9749 23.5607 14.5607L20.1213 18L23.5607 21.4393C24.1464 22.0251 24.1464 22.9749 23.5607 23.5607C22.9749 24.1464 22.0251 24.1464 21.4393 23.5607L18 20.1213L14.5607 23.5607C13.9749 24.1464 13.0251 24.1464 12.4393 23.5607C11.8536 22.9749 11.8536 22.0251 12.4393 21.4393L15.8787 18L12.4393 14.5607C11.8536 13.9749 11.8536 13.0251 12.4393 12.4393Z" fill="#B5B5C3" />
              </svg>

              <img src={URL.createObjectURL(img)} style={{ width: '100%', height: '100%', borderRadius: 12 }}></img>
              <div>

              </div>
            </div>
            :
            <div className="center-div" onClick={fileupload} style={{ padding: '2rem' }}>
              <input type='file' hidden id="uploadefile-event" onChange={(e) => setImg(e.target.files[0])}></input>
              <svg width="65" height="65" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 25 }}>
                <path opacity="0.25" d="M9.875 13.166C9.875 7.7122 14.2962 3.29102 19.75 3.29102H51.868C54.487 3.29102 56.9987 4.33141 58.8507 6.18334L66.2327 13.5654C68.0846 15.4173 69.125 17.929 69.125 20.548V65.8327C69.125 71.2865 64.7038 75.7077 59.25 75.7077H19.75C14.2962 75.7077 9.875 71.2865 9.875 65.8327V13.166Z" fill="#00A3FF" />
                <path d="M49.375 6.22654C49.375 4.6053 50.6893 3.29102 52.3105 3.29102C54.6462 3.29102 56.8862 4.21885 58.5377 5.8704L66.5456 13.8783C68.1972 15.5299 69.125 17.7698 69.125 20.1055C69.125 21.7267 67.8107 23.041 66.1895 23.041H52.6667C50.8487 23.041 49.375 21.5673 49.375 19.7493V6.22654Z" fill="#00A3FF" />
                <path d="M38.2387 29.8748C37.8505 30.0354 37.4867 30.2735 37.1711 30.5891L27.2961 40.4641C26.0107 41.7496 26.0107 43.8338 27.2961 45.1192C28.5816 46.4047 30.6658 46.4047 31.9513 45.1192L36.207 40.8635V55.9583C36.207 57.7763 37.6808 59.25 39.4987 59.25C41.3166 59.25 42.7904 57.7763 42.7904 55.9583V40.8635L47.0461 45.1192C48.3316 46.4047 50.4158 46.4047 51.7013 45.1192C52.9867 43.8338 52.9867 41.7496 51.7013 40.4641L41.8263 30.5891C40.8564 29.6192 39.4318 29.3811 38.2387 29.8748Z" fill="#00A3FF" />
              </svg>

              <p className="span-text-dark" style={{ marginBottom: 0 }}> Quick File Uploader</p>
              <p className="span-text-light" style={{ marginBottom: 0, textAlign: 'center' }}> Drag & Drop or choose files from computer</p>
              <p ></p>

            </div>
          }
          <button className="themeButton" style={{ marginTop: '1rem', width: '100%' }}> Add Images</button>
        </div>
        <div className='event-box padding15rem' style={{ background: '#F9F9F9' }}>
          <div className='event-img-div'>
            <img src="images/eventgame.jpg"></img>

            <input type="checkbox" className='event-toggle'></input>
          </div>
          <div>

            <div className='event-icon' style={{ backgroundColor: ' #FFF5F8' }}>

              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 6V15C4.5 15.8284 5.17157 16.5 6 16.5H12C12.8284 16.5 13.5 15.8284 13.5 15V6H4.5Z" fill="#F1416C" />
                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M10.5 3.375V3.25C10.5 2.69772 10.0523 2.25 9.5 2.25H8.5C7.94772 2.25 7.5 2.69772 7.5 3.25V3.375H4.25C3.97386 3.375 3.75 3.59886 3.75 3.875V4C3.75 4.27614 3.97386 4.5 4.25 4.5H13.75C14.0261 4.5 14.25 4.27614 14.25 4V3.875C14.25 3.59886 14.0261 3.375 13.75 3.375H10.5Z" fill="#F1416C" />
              </svg>
            </div>

          </div>
        </div>
      </div>


    </>
  )
}

export default Room_Tab3