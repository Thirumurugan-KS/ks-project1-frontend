import React , { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { employeeAction } from '../actions/employeeAction';
import { Col , ListGroup, ListGroupItem, Row } from "react-bootstrap"
import { Link } from 'react-router-dom';
import '../App.css';
import SideBar from '../Components/SideBar';

export default function HomeScreen() {
 
    return (
        <div className='containermain'>

        <SideBar/>
        <div className='main'>
            <h1>Home Page</h1>
            <p>Kindly go to <Link to='/details'>details page</Link></p>
        </div>
        
        </div>    
    )
}
