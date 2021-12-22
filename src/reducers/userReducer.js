import { USER_LOGIN_INITIAL , USER_LOGIN_SUCCESS , USER_LOGIN_FAIL , USER_LOGOUT_SUCCESS} from "../Constants/userConstants"

export const userLogin = (state = { userDetail : {} },action) =>{

    switch(action.type){
        case USER_LOGIN_INITIAL:
            return{
                loading : true
            }
        
        case USER_LOGIN_SUCCESS:
            return{
                userDetail : action.payload
            }

        case USER_LOGOUT_SUCCESS:
                return{
                    userDetail : null
                }

        case USER_LOGIN_FAIL:
            return{
                error : action.payload
            }
        
        default:
            return{
                ...state
            }
        }
    }