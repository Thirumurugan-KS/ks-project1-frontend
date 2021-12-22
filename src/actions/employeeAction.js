import { ADD_EMPLOYEE_INITIAL , ADD_EMPLOYEE_SUCCESS , ADD_EMPLOYEE_FAIL, 
    ADD_EMPLOYEE_INSERT , EMPLOYEE_FAIL ,EMPLOYEE_INITIAL , EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_INITIAL, DELETE_EMPLOYEE_SUCCESS, EDIT_EMPLOYEE_SUCCESS} from "../Constants/employeeConstants"

import axios from 'axios'


export const employeeAction = (value) =>async(dispatch, getState) =>{

    try{
        const { user } = getState()
    const { userDetail } = user

        
        let config = {
            headers: {
                ACCEPT : 'application/json',
                'Content-Type': 'application/json',
                authorization : `Bearer ${userDetail.token}`
            }
        }

        const { data } = await axios.get("https://ksproject1-backend-mongo.herokuapp.com/api/employee", config)

        dispatch({
            type : ADD_EMPLOYEE_SUCCESS,
            payload : data
        })

    }
    catch(error){
        dispatch({
            type : ADD_EMPLOYEE_FAIL,
            payload : error
        })
    }

}

export const addEmployeeAction = (value) =>async(dispatch , getState) =>{

    const { user } = getState()
    const { userDetail } = user

    try{
        dispatch({
            type : ADD_EMPLOYEE_INITIAL
        })

        let config = {
            headers: {
                ACCEPT : 'application/json',
                'Content-Type': 'application/json',
                authorization : `Bearer ${userDetail.token}`
            }
        }

        const res = await axios.put("https://ksproject1-backend-mongo.herokuapp.com/api/employee/add",JSON.stringify(value),config)
        
        dispatch({
            type : ADD_EMPLOYEE_INSERT
        })

        const { data } = await axios.get("https://ksproject1-backend-mongo.herokuapp.com/api/employee",config)

        dispatch({
            type : ADD_EMPLOYEE_SUCCESS,
            payload : data
        })
    }
    catch(error){
        dispatch({
            type : ADD_EMPLOYEE_FAIL,
            payload : error
        })
    }

}

export const deleteEmployeeAction = (id) =>async(dispatch, getState) =>{

    try{
        
        const { user } = getState()
        const { userDetail } = user

        
        let config = {
            headers: {
                ACCEPT : 'application/json',
                'Content-Type': 'application/json',
                authorization : `Bearer ${userDetail.token}`
            }
        }

        const res = await axios.delete(`https://ksproject1-backend-mongo.herokuapp.com/api/employee/delete/${id}`,config)


        dispatch({
            type : DELETE_EMPLOYEE_SUCCESS
        })

        const { data } = await axios.get("https://ksproject1-backend-mongo.herokuapp.com/api/employee",config)

        dispatch({
            type : ADD_EMPLOYEE_SUCCESS,
            payload : data
        })

    }
    catch(error){
        dispatch({
            type : ADD_EMPLOYEE_FAIL,
            payload : error
        })


    }


}


export const editEmployeeAction = (value) =>async(dispatch,getState) =>{

    try{

        const { user } = getState()
    const { userDetail } = user

        
        let config = {
            headers: {
                ACCEPT : 'application/json',
                'Content-Type': 'application/json',
                authorization : `Bearer ${userDetail.token}`
            }
        }

        const res = await axios.post(`https://ksproject1-backend-mongo.herokuapp.com/api/employee/update/${value.id}`,JSON.stringify(value),config)

        dispatch({
            type : EDIT_EMPLOYEE_SUCCESS
        })

        const { data } = await axios.get("https://ksproject1-backend-mongo.herokuapp.com/api/employee",config)

        dispatch({
            type : ADD_EMPLOYEE_SUCCESS,
            payload : data
        })


    }

    catch(error){
        dispatch({
            type : ADD_EMPLOYEE_FAIL,
            payload : error
        })
    }
}
