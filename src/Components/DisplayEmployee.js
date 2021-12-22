import React , { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Col , ListGroup, ListGroupItem, Row , Modal, Form} from "react-bootstrap"
import { employeeAction } from '../actions/employeeAction';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
export default function DisplayEmployee() {

    
    const dispatch = useDispatch()

    const [search, setSearch] = useState("")


    useEffect(() => {
        dispatch(employeeAction())     
    }, [])

    const employee = useSelector(state => state.employee)

    const { loading , employeeList } = employee

    return (

        <div className="justify-center">  
            <input className="edit-input" type="text" placeholder="type to search the name" value={search} onChange={ e=> setSearch(e.target.value)}/> 
            <Row className="details-title">
                    <Col md={2} className="col-data"><b>Name</b></Col>
                    <Col md={2}className="col-data">Gender</Col>
                    <Col md={2} className="col-data">Designation</Col>
                    <Col md={2} className="col-data">City</Col>
                    <Col md={2} className="col-data"></Col>
                    <Col md={2} className="col-data"></Col>
                </Row>
                <hr/>
            { loading ? "Loading..." : employeeList ?  (
                
                employeeList.map(emp =>{ return(
                ((emp.name).toLowerCase()).includes(search.toLowerCase()) && <Row className="employee-list" key={emp._id}>

                    <Col md={2} className="col-data"><b className='hide'>Name : </b>{emp.name}</Col>
                    <Col md={2} className="col-data"><b className='hide'>Gender : </b>{emp.gender}</Col>
                    <Col md={2} className="col-data"><b className='hide'>Designation : </b>{emp.designation}</Col>
                    <Col md={2} className="col-data"><b className='hide'>City : </b>{emp.city}</Col>
        
                    <Col md={2}><EditModal value={emp}></EditModal></Col>
                    <Col md={2}><DeleteModal value={emp}/></Col>
                    
                </Row>
        
            ) } )) : " "
            }        
        </div>
    )
}
