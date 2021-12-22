import React from 'react'
import DisplayEmployee from '../Components/DisplayEmployee';
import AddEmployee from '../Components/AddEmployee';
export default function MainSide() {
    return (
        <div className='main-detail'>
            
            <h4>Employees Details</h4>
    
            <AddEmployee/>
            <br/>
            <DisplayEmployee/>
        </div>
    )
}
