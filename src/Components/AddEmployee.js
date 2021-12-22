import React , { useState} from 'react'
import { Button, Col , ListGroup, ListGroupItem, Row , Modal, Form} from "react-bootstrap"
import { addEmployeeAction } from '../actions/employeeAction';
import { useDispatch } from 'react-redux'
export default function AddEmployee() {

  

    const [show, setShow] = useState(false);
    const [name, setName] = useState('')
    const [gender, setGender] = useState('Male')
    const [designation, setDesignation] = useState('')
    const [city, setCity] = useState('Chennai')
    const dispatch = useDispatch()

    const handleClose = () =>{

      setShow(false);

    }
    const handleSave = () => {
      const value = {
        'name' : name,
        'gender' : gender,
        'designation' : designation,
        'city' : city
      }

      dispatch(addEmployeeAction(value))

      setCity("Chennai")
      setDesignation("")
      setGender("Male")
      setName("")
      setShow(false);
    }
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button className='btn btn-primary' onClick={handleShow}>Add Employee</Button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" 
    value={name}
    onChange={ (e) => setName(e.target.value) }
    required={true}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicGender">
    <Form.Label>Gender</Form.Label>
  <Form.Select onChange={ (e)=> setGender(e.target.value)}>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Others">Others</option>
  </Form.Select>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicDesignation">
    <Form.Label>Designation</Form.Label>
    <Form.Control type="text" placeholder="Enter Designation" 
    value={designation}
    onChange={ (e) => setDesignation(e.target.value) }/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicCity">
    <Form.Label>City</Form.Label>
  <Form.Select onChange={ (e)=> setCity(e.target.value)}>
    <option value="Chennai">Chennai</option>
    <option value="Mumbai">Mumbai</option>
    <option value="Erode">Erode</option>
    <option value="Trichy"> Trichy</option>
    <option value="Salem">Salem</option>
  </Form.Select>
  </Form.Group>

 
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
