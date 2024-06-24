import {createContext,useEffect,useReducer,useState} from "react";
import axios from "./axios";
import Loader from "./Loader";
import Toast from "./Toast";



export const AuthContext = createContext({})

const AuthProvider = ({children}) => {
    const [userToken, setUserToken] = useState("")
    const [userData, setUserData] = useState("")
  var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
   
  
    const [isLoading,setIsLoading]=useState(false)
    var initialState ={
      AllGames:[],
      AllEvents:[],
      TournamnetData:[],
      UserData: []
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    

    function reducer(state, action) {
      let newState;
      switch (action.type) {
        case 'initialData':
       
          state[action?.name]=action.data
          
          return {...state}

        case 'Add':
          
          state?.[action?.name].push(action.data)
          console.log(state)
          
          return {...state} ;
        case 'delete':
          var data = state[action?.name]?.filter(a=>a[action.idname]!=action.Id)
          
          state[action?.name] = data 
           return {...state};
       
        default:
          throw new Error();
      }
      return newState;
    }

  return (
    <>
    {isLoading&&(<Loader/>)}
  <AuthContext.Provider value={{userToken,setUserToken,userData,setUserData,state,dispatch,country_list}}>
        {children}
        </AuthContext.Provider>

    </>
  )
}

export default AuthProvider