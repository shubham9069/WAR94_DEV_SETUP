
import React from 'react'
import Toast from '../../Toast'
import { useContext } from 'react'
import { AuthContext } from '../../AuthProvider'
import axios from '../../axios'
import { toast } from 'react-toastify';
import { Dropdown } from 'react-bootstrap'


const Room_Tab2 = ({ Roomdata, setData }) => {
  const { userToken } = useContext(AuthContext)

  async function uploadKill(e) {
    const user_id = e.target.getAttribute("user_id")
    var formData = new FormData();
    if (e.target.value >= 100) {
      Toast("100 kill is alowed per player ")
      return
    }
    formData.append("room_id", user_id)
    formData.append("kills", e.target.value)
    try {
      const response = await toast.promise(axios({
        method: "post",
        url: `/update_kills`,
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

              var Arr = Roomdata?.users?.map((elem) => {

                return elem?.id == user_id ? { ...elem, kills: e.target.value } : elem
              })

              setData({ ...Roomdata, users: Arr })

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
  async function DeleteUser(id, user_id) {

    var formData = new FormData();
    formData.append("room_id", id)
    formData.append("user_id", user_id)
    try {
      const response = await toast.promise(axios({
        method: "post",
        url: `/delete_room_member`,
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

              var Arr = Roomdata?.users?.filter((elem) => {

                return elem?.id != id
              })

              setData({ ...Roomdata, users: Arr })

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
      <div className="matchlist-table">
        <table style={{ width: '100%' }} >
          <tr>
            <th>Action</th>
            <th>Real Name</th>
            <th>User Name</th>
            <th>Phone No</th>
            <th>Game Character</th>
            <th>game UserName</th>
            <th>Payment</th>
            <th>Kill Update</th>



          </tr>
          {Roomdata?.users?.map((a) => {

            return <tr key={a?.id}>
              <td>
                <Dropdown style={{ width: '100%' }}>
                  <Dropdown.Toggle  style={{ border: 'none', background: 'transparent', width: '100%' }} id="dropdown-basic">
                    <button className='themeButton dropdown-toggle' style={{ background: "#F5F8FA", color: "#A1A5B7", }}>Action</button>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu post-dropdown" >
                    <ul className="dropdown-menu post-dropdown">

                      <li onClick={() => DeleteUser(a?.id, a?.user_id)} >
                        <p> Remove</p>

                        <i class="bi bi-trash-fill" style={{ color: '#A1A5B7', fontSize: 12, width: 15 }}></i>

                      </li>
                    </ul>

                  </Dropdown.Menu>
                </Dropdown>
               
              </td>

              <td style={{ color: '#7E8299', fontSize: 14 }}>{a?.user?.name}</td>
              <td style={{ color: '#7E8299', fontSize: 14 }}>{a?.user?.username}</td>
              <td style={{ color: '#7E8299', fontSize: 14 }}>{a?.user?.mobile}</td>
              <td style={{ color: '#7E8299', fontSize: 14 }}>48564332116</td>
              <td style={{ color: '#7E8299', fontSize: 14 }}>devilboy452</td>
              <td style={{ color: '#7E8299', fontSize: 14 }}>Cash</td>
              <td><input type='Number' className="form-input" style={{ width: 60 }} defaultValue={a?.kills} user_id={a?.id} onBlur={uploadKill}></input></td>



            </tr>
          })}


        </table>
      </div>
    </>
  )
}

export default Room_Tab2