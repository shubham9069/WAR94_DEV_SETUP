import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from '../axios'
import Toast from '../Toast'
import { toast } from 'react-toastify'
import { AuthContext } from '../AuthProvider'
import { useContext } from 'react'
import { io } from 'socket.io-client'
import { worldChat } from '../dummydata/DummyData'


var socket = io("http://localhost:3002", { secure: true })

const WorldChat = () => {
  const { userData } = useContext(AuthContext)
  const location = useLocation()
  const lastMessageRef = useRef()
  const [messageArr, setMessageArr] = useState(worldChat.default_chat)
  const [textarea, settextarea] = useState("")
  const [typing, settyping] = useState("")
  const [files, setfiles] = useState([])


  const clickinput = () => {

    var input = document.getElementById('inputclip')
    input.click()

  }

  const sendmsg = async (e) => {

    if (!files?.length && !textarea) return toast("plz write something")
    var formData = new FormData();

    formData.append("message", textarea)
    formData.append("sender", userData?.id)
    formData.append("added_by", userData?.added_by)
    if (files?.length) {
      for (var i = 0; i < files.length; i++) {

        formData.append('messageFile', files[i])
      }

    }



    try {
      const response = await toast.promise(axios({
        method: "post",
        url: `http://localhost:3001/Frontend/many-to-many-message`,
        data: formData,

      }),
        {
          pending: 'waiting',
          success: {
            render({ data }) {
              const newdata = data?.data
              var obj = {
                id: newdata?.id,
                sender: userData?.id,
                message: textarea,
                added_by: userData?.added_by,
                messageFile: JSON.stringify(newdata?.messageFile),
                user: userData,
                Message_date: new Date()

              }
              setMessageArr([...messageArr, obj])
              socket.emit('World-new-msg', obj)
              settextarea("")
              setfiles([])

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
  useEffect(() => {

    socket.emit("new-user", userData)

  }, []);
  useEffect(() => {

    socket.on("world-send-msg", data => {
      console.log(data)

      setMessageArr([...messageArr, data])

    });
    var falsetyping;
    socket.on("typing-server", username => {

      settyping(username)

      clearTimeout(falsetyping)
      falsetyping = setTimeout(() => {

        settyping("")
      }, 1000)
    });


  }, [messageArr]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current.scrollTop = lastMessageRef.current.scrollHeight;

  }, [messageArr]);

  const handleinput = (e) => {

    settextarea(e.target.value)

    socket.emit("start-typing", userData?.name)
  }
  return (
    <>
      <div className="event-top padding15rem">
        <span className='span-text-light'>Home </span>
        <span className='span-text-light'> / </span>
        <span className='span-text-dark'> {location?.pathname?.split('/')[1]} </span>

      </div>
      <div className="report padding15rem">
        <div >
          <div className='nameofchat d-flex' style={{ gridGap: 10, background: 'white', }}>
            <div >
              <p style={{ marginBottom: 0 }}>World Chat </p>
              {typing ? <p style={{ fontSize: 12, color: '#B5B5C3', marginBottom: 0 }}> {typing} - typing</p> :

                <p style={{ fontSize: 12, color: '#B5B5C3', marginBottom: 10 }}>offline - last seen today 9:18 pm</p>
              }
            </div>

            <div style={{ display: 'flex' }} >

              {worldChat.active_user?.map((user, i) => {
                return <img src={user.image} style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 50, position: 'relative', right: 15 * i }}></img>
              })}

            </div>
          </div>
          <div style={{ overflow: 'scroll', height: 350, padding: '1.5rem', position: "relative" }} ref={lastMessageRef} >
            {messageArr?.map((element, i) => {


              return <div className='rigth-chat-box ' style={{ margin: userData?.id == element?.sender && element?.added_by == userData?.added_by ? '1rem 0 1rem auto' : "1rem 0 1rem 0", width: 'fit-content', maxWidth: 400 }}>

                <div className='d-flex align-items-center' style={{ gridGap: 8, justifyContent: userData?.id == element?.sender && element?.added_by == userData?.added_by ? "flex-end" : "flex-start" }}>
                  <img src={element.added_by == "admin" ? "images/logo.png" : element.user.image} alt="" style={{ width: 40, height: 40, borderRadius: 50 }}></img>
                  <span style={{ fontWeight: 'bold', lineHeight: '25px', marginBottom: 0, fontSize: 12 }}>{element?.user?.name}</span>
                  <span style={{ fontSize: 10, color: '#B5B5C3', fontWeight: 500 }}>{new Date(element?.Message_date).toLocaleTimeString()}</span>

                </div>

                <div style={{ background: userData?.id == element?.sender && element?.added_by == userData?.added_by ? "#EEF6FF" : "#F8F5FF", borderRadius: 6, padding: '1rem', fontSize: 11, marginTop: 10, width: 300, border: 'none', resize: 'none' }}>
                  {element.messageFile.length ?
                    element.messageFile?.map((a) => {

                      return <a href={a?.Url} target="_blank" className="messageFile-a" style={{ margin: '0.5rem 0' }}>
                        {/* for file message  */}
                        {a?.mimetype == "image/png" || a?.mimetype == "image/jpeg" ?

                          <img src={a?.Url} style={{ objectFit: 'contain', width: 200 }}></img>
                          :
                          a?.mimetype == "video/mp4" ?
                            <video src={a?.Url} width="100%" style={{ borderRadius: 12, }} muted autoPlay controls></video>
                            :
                            a?.mimetype == "application/pdf" ?

                              <svg height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 309.267 309.267" >
                                <g>
                                  <path style={{ fill: '#E2574C' }} d="M38.658,0h164.23l87.049,86.711v203.227c0,10.679-8.659,19.329-19.329,19.329H38.658
		c-10.67,0-19.329-8.65-19.329-19.329V19.329C19.329,8.65,27.989,0,38.658,0z"/>
                                  <path style={{ fill: "#B53629" }} d="M289.658,86.981h-67.372c-10.67,0-19.329-8.659-19.329-19.329V0.193L289.658,86.981z" />
                                  <path style={{ fill: "#FFFFFF" }} d="M217.434,146.544c3.238,0,4.823-2.822,4.823-5.557c0-2.832-1.653-5.567-4.823-5.567h-18.44
		c-3.605,0-5.615,2.986-5.615,6.282v45.317c0,4.04,2.3,6.282,5.412,6.282c3.093,0,5.403-2.242,5.403-6.282v-12.438h11.153
		c3.46,0,5.19-2.832,5.19-5.644c0-2.754-1.73-5.49-5.19-5.49h-11.153v-16.903C204.194,146.544,217.434,146.544,217.434,146.544z
		 M155.107,135.42h-13.492c-3.663,0-6.263,2.513-6.263,6.243v45.395c0,4.629,3.74,6.079,6.417,6.079h14.159
		c16.758,0,27.824-11.027,27.824-28.047C183.743,147.095,173.325,135.42,155.107,135.42z M155.755,181.946h-8.225v-35.334h7.413
		c11.221,0,16.101,7.529,16.101,17.918C171.044,174.253,166.25,181.946,155.755,181.946z M106.33,135.42H92.964
		c-3.779,0-5.886,2.493-5.886,6.282v45.317c0,4.04,2.416,6.282,5.663,6.282s5.663-2.242,5.663-6.282v-13.231h8.379
		c10.341,0,18.875-7.326,18.875-19.107C125.659,143.152,117.425,135.42,106.33,135.42z M106.108,163.158h-7.703v-17.097h7.703
		c4.755,0,7.78,3.711,7.78,8.553C113.878,159.447,110.863,163.158,106.108,163.158z"/>
                                </g>
                              </svg> :
                              <>
                                <svg width="30px" height="30px" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M36.03 25.291C35.4996 25.291 34.9909 25.0803 34.6158 24.7052C34.2407 24.3301 34.03 23.8214 34.03 23.291V6.271H16C14.4087 6.271 12.8826 6.90313 11.7574 8.02835C10.6321 9.15357 10 10.6797 10 12.271V52.351C10 53.9423 10.6321 55.4684 11.7574 56.5936C12.8826 57.7188 14.4087 58.351 16 58.351H47.06C48.6504 58.3481 50.1748 57.715 51.2994 56.5904C52.424 55.4658 53.0571 53.9414 53.06 52.351V25.291H36.03Z" fill="#999999" />
                                  <path d="M51.88 21.291L38.03 7.44092V8.27094V21.291H51.06H51.88Z" fill="#000000" />
                                </svg>
                                <p>{a?.originalname}</p>
                              </>
                        }

                      </a>
                    })

                    : ""
                  }

                  {element?.message}
                </div>

              </div>
            })}

          </div>

          <div className="write-messge" style={{ position: 'relative' }} >
            {files?.length ? <div style={{ width: '100%', flexWrap: "wrap", zIndex: 999, boxShadow: 'rgba(0, 0, 0, 0.25) 0px -10px 50px -12px', padding: "1rem", left: 0, bottom: 80, position: 'absolute', height: 'fit-content', display: 'flex', gridGap: 20 ,backgroundColor:'white'}}>
              {Array.from(files)?.map((img) => {

                return img?.type == "video/mp4" ? <video key={img?.name} width="200px" height="100px" style={{ borderRadius: 12, border: '2px dotted #c9c9c9' }} controls><source src={URL.createObjectURL(img)} /></video> : <img src={URL.createObjectURL(img)} style={{ height: 100, objectFit: "contain", borderRadius: 12, border: '2px dotted #c9c9c9' }}></img>
              })}

            </div>
              : ""
            }
            <textarea placeholder='write message' value={textarea} onChange={handleinput}></textarea>
            <button className="themeButton" style={{ background: '#D9214E', opacity: 0.8 }} onClick={sendmsg}> send <i class="bi bi-chevron-right" style={{ color: 'white', marginLeft: 3 }}  ></i> </button>
            <i class="bi bi-paperclip" style={{ color: '#7E8299', transform: 'matrix(-0.72, -0.7, 0.72, -0.7, 0, 0)' }} onClick={clickinput}></i>
            <input multiple type='file' hidden onChange={(e) => setfiles(e.target.files)} id="inputclip" ></input>

          </div>
        </div>


      </div>


    </>
  )
}

export default WorldChat