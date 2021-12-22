import React , {useState} from 'react'
import { useDispatch } from 'react-redux';
import { Button, Col , ListGroup, ListGroupItem, Row , Modal, Form} from "react-bootstrap"
import {deleteEmployeeAction } from "../actions/employeeAction"
export default function DeleteModal({value}) {

    const dispatch = useDispatch()

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
      }
      const handleShow = () => setShow(true);

      const handleDelete = (id) => {
          dispatch(deleteEmployeeAction(id))
          console.log('Deleted')
        setShow(false)
      }

    return (
        <div>
            <Button className="col-button" onClick={handleShow} className="btn btn-danger">Delete</Button>
             <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="delete-body">
            <Col>
            <Row>Name : {value.name}</Row>
            <Row>Gender : {value.gender}</Row>
            <Row>Designation : {value.designation}</Row>
            <Row>City : {value.city}</Row>
            </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className="btn btn-danger" onClick={e=> handleDelete(value._id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
             
        </div>
       
    )
}
