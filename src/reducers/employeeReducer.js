import { ADD_EMPLOYEE_INITIAL , ADD_EMPLOYEE_SUCCESS , ADD_EMPLOYEE_FAIL, ADD_EMPLOYEE_INSERT, DELETE_EMPLOYEE_INITIAL, DELETE_EMPLOYEE_SUCCESS, EDIT_EMPLOYEE_SUCCESS} from "../Constants/employeeConstants"

export const addEmployeeReducer = (state = { employeeList : []},action) =>{

    switch(action.type){
        case ADD_EMPLOYEE_INITIAL:
            return{
                loading : true
            }

        case ADD_EMPLOYEE_INSERT:
            return{
                success : true
            }

        case ADD_EMPLOYEE_SUCCESS:
            return{
                loading : false,
                employeeList : action.payload
            }

        case ADD_EMPLOYEE_FAIL:
            return{
                error : action.payload
            }
        
        case EDIT_EMPLOYEE_SUCCESS:
            return{
                ...state
            }

        case DELETE_EMPLOYEE_SUCCESS:
            return{
                ...state,
                loading : true
            
            }
        default : 
            return state
    }



}