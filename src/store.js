import {  createStore , combineReducers , applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools   } from "redux-devtools-extension"
import { addEmployeeReducer } from "./reducers/employeeReducer"
import { userLogin } from "./reducers/userReducer"

const reducer = combineReducers({
    user : userLogin,
    employee : addEmployeeReducer
})


const initialState = {
    user : {
        userDetail : null
    },
    employee : {
        employeeList : []
    }
}

const middleware = [thunk]

const store = createStore(reducer , initialState , composeWithDevTools(applyMiddleware(...middleware)))

export default store
