import { USER_LOGIN_INITIAL , USER_LOGIN_SUCCESS , USER_LOGIN_FAIL , USER_LOGOUT_SUCCESS } from "../Constants/userConstants"
import axios from "axios"

export const userLoginAction = (value) =>async(dispatch) =>{

    try{

        dispatch({
            type : USER_LOGIN_INITIAL,
        })

        let config = {
            headers: {
                ACCEPT : 'application/json',
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put("https://ksproject1-backend-mongo.herokuapp.com/api/signin",JSON.stringify(value),config)

        dispatch({
            type : USER_LOGIN_SUCCESS,
            payload : data
        })

        

    }
    catch(error){
        dispatch({
            type : USER_LOGIN_FAIL,
            payload : error
        })
    }

}

export const userLogoutAction = () =>async(dispatch) =>{

        dispatch({
            type : USER_LOGOUT_SUCCESS
        })
    }
