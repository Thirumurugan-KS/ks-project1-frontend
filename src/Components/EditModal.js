import React , {useState} from 'react'
import { useDispatch } from 'react-redux';
import { Button, Col , ListGroup, ListGroupItem, Row , Modal, Form} from "react-bootstrap"
import {deleteEmployeeAction, editEmployeeAction } from "../actions/employeeAction"
export default function EditModal({value}) {

    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const [id] = useState(value._id)
    const [name, setName] = useState(value.name)
    const [gender, setGender] = useState(value.gender)
    const [designation, setDesignation] = useState(value.designation)
    const [city, setCity] = useState(value.city)

    let valueJson;

    const handleClose = () => {
        setShow(false)
      }
      const handleShow = () => setShow(true);

      const handleEdit = (id) => {

        valueJson = {
            id : id,
            name : name,
            gender : gender,
            designation : designation,
            city : city
        }
        dispatch(editEmployeeAction(valueJson))
        console.log(value)
        setShow(false)
      }

    return (
        <div>
            <Button className="col-button" onClick={handleShow}>Edit</Button>
             <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="delete-body">
            <Col>
            <Row>
                <Col>
                Name :
                </Col>
                <Col>
                <input type="text" className="edit-input" value={name} onChange={ e=>setName(e.target.value)}/>
                </Col>
            </Row>
            <Row>
                <Col>
                Gender :
                </Col>
                <Col>
                <select name="gender" value={gender} onChange={ e=> setGender(e.target.value) }>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
            </select>
                </Col>
            </Row>
            <Row>
                <Col>
                Designation :
                </Col>
                <Col>
                <input type="text" className="edit-input" value={designation} onChange={ e=> setDesignation(e.target.value)}/>
                </Col>
            </Row>
            <Row>
                <Col>
                City :
                </Col>
                <Col>
                <select name="city" value={city} onChange={ e=>setCity(e.target.value)}>
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
              <option value="Erode">Erode</option>
              <option value="Trichy"> Trichy</option>
              <option value="Salem">Salem</option>
            </select>
                </Col>
            </Row>
            
            </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={e=> handleEdit(value._id)}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
             
        </div>
       
    )
}
