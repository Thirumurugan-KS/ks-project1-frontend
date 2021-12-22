import { useState , useEffect} from "react"
import { useSelector , useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Col , Row ,Button } from "react-bootstrap"
import '../App.css';
import image from '../Images/sapiens.png'
import { userLoginAction , userLogoutAction} from "../actions/userAction";
import { GoGitCompare } from 'react-icons/go';


function App() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const user = useSelector(state => state.user)

    const { userDetail , error , loading} = user

    const handleSubmit = () =>{
        const valueJson = {
            name : userName,
            password : password
        }
      
        setUserName("")
        setPassword("")

        dispatch(userLoginAction(valueJson))
    }

    useEffect(() => {

      if(userDetail){
        navigate("/home")
      }
     
    }, [userDetail])




  return (
    <div className="main-login">
      {loading ? <p className="text-center">loading...</p> : error ? <p className="text-danger text-center">Username or password is wrong</p> : " "}
     <div className="App">
  <div className="container1">
    <GoGitCompare color="white"/>
    <h3 className="text-white">User Login</h3>
     <input type="text"
      placeholder="Enter the username"
      value={userName}
      onChange={e=> setUserName(e.target.value)}/>
      <input type="password"
      placeholder="Enter the password"
      value={password}
      onChange={e=> setPassword(e.target.value)}/>
      <Button variant="success" className="mt-3" onClick={handleSubmit}>Submit</Button>

  </div>
  <div className="container2">
    <img className="hero" src={image}/>
  </div>
 </div>
    </div>
  );
}

export default App;