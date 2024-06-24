import React from 'react'
import GenralTab from './GenralTab'
import UserPermission from './UserPermission'
import Wallent from './Wallent'
import ChatWallet from './ChatWallet'
import Tournamentdetails from './Tournamentdetails'
import Referal from './Referal'
import { toast } from 'react-toastify'
import { AuthContext } from '../../../AuthProvider'
import axios from '../../../axios'
import { useContext } from 'react'



const Tab2 = ({single_user,setSingle_user}) => {
  const {userToken} = useContext(AuthContext)

  async function editpost(name,value){
    var formData = new FormData()
    formData.append('user_id',single_user.id)
    formData.append(name,value)
    
    try{
      const response = await toast.promise(axios({
        method: "post",
        url: `/update_user`,
        data: formData,
        headers:{
        'Authorization': `Bearer ${userToken} `,
          'Content-Type': 'multipart/form-data'
        },
      }),
      {
        pending: 'waiting',
        success: {render({data}){
       const newdata = data?.data
       
       setSingle_user({...single_user,[name]:value})
   

          return newdata?.message
        }},
        error: {render({data}){
          
          return data?.response?.data?.message
        }},
      });
  
  
    } catch (err) {
      console.log(err)
      
    }
  }
  return (
    <>
<GenralTab single_user={single_user} setSingle_user={setSingle_user} editpost={editpost}/>
<UserPermission />
<Wallent single_user={single_user} editpost={editpost} />
<ChatWallet single_user={single_user} editpost={editpost}/>
<Tournamentdetails />
<Referal />
    </>
  )
}

export default Tab2