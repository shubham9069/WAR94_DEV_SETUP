import {Outlet} from 'react-router-dom'
import {react,useEffect,useContext,useState} from 'react'
import Toast from '../Toast'

import {AuthContext} from '../AuthProvider'
import axios from '../axios'


const PresistLogin =()=>{
    const {userToken,setUserToken,setUserData,userData,dispatch}= useContext(AuthContext);
    const [isloading,setIsLoading] = useState(true);


  

    useEffect(() => {

        const tokenGet = () =>{
            
            
            const strtoken = window.localStorage.getItem('userToken');
            const strdata = window.localStorage.getItem('userData');
           
            const token = JSON.parse(strtoken);
            const data = JSON.parse(strdata);
            setUserToken(token)
            setUserData(data)
            setIsLoading(false)
          
           
        }

 if(userToken && userData){
  try{
    getdata('/get_all_games',userToken)
    getdata('/get_all_events',userToken)
    getdata('/get_all_tournaments',userToken)
}catch(err){

}finally{
    setIsLoading(false)
}
    
 }
 else{
    tokenGet();
 }
     
    }, [userToken])
  
    const getdata = async(url,token)=>{
        try{
          
          const response = await axios({
            method: "get",
            url: url,
            headers:{
            'Authorization': `Bearer ${token} `,
            
            },
          })
         
            
          if(response.status===200){
            const data = response.data;
            if(url=='/get_all_games'){

            dispatch({type:"initialData",data:data?.games,name:"AllGames"})
            }
            if(url=='/get_all_events'){

            dispatch({type:"initialData",data:data?.events,name:"AllEvents"})
            }
            if(url=='/get_all_tournaments'){

            dispatch({type:"initialData",data:data?.tournaments,name:"TournamnetData"})
            }
            
            
           }
    
  
        } catch (err) {
          const error = err.response.data
          Toast(error.message);
          
        }  
      }
        
       
  
   

    return (
        <>
        {isloading  
            ? <div id="cover-spin"></div>
            :<Outlet/>
         }
    </>
    )

    
}

export default PresistLogin
