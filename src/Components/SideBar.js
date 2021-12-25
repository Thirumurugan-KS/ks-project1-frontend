import { useState , useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import { userLoginAction , userLogoutAction} from "../actions/userAction";
import { useSelector , useDispatch } from "react-redux"
import { AiTwotoneHome } from 'react-icons/ai';
import { CgInsertAfter } from 'react-icons/cg';
import { GoSignOut } from 'react-icons/go'
export default function SideBar({value}) {
    const dispatch = useDispatch()

    const user = useSelector(state => state.user)

    const { userDetail , error } = user

    const navigate = useNavigate()

    useEffect(() => {

        if(!userDetail){
          navigate("/")
        }
      }, [userDetail])

    return (
        <div className='aside'>
        <div className="sidebar">
        <div className='sidebarTitle'>
        <h5>Employee Details</h5>
        </div>
        <div >
        <div className='sidebarItem'>
        <p><Link to="/home" style={{ textDecoration: 'none' , color : 'white' }} className={value==='home' ? "text-black": " "}><AiTwotoneHome color="white"/> . Home</Link></p>
        </div>
        <div className='sidebarItem'>
        <p><Link to="/details" style={{ textDecoration: 'none' , color : 'white' }} className={value==='employee' ? "text-black": " "}><CgInsertAfter color="white"/> . Employee Details</Link></p>
        </div>
        <div className='sidebarItem'>
        <p><GoSignOut color="white"/><Link to="/" style={{ textDecoration: 'none' , color : 'white' }} onClick={ e =>dispatch(userLogoutAction())}> . Sign out</Link></p>
        </div>
        </div>
       
        </div>
        </div>
    )
}
