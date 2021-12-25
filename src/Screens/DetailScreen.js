import React from 'react'
import SideBar from '../Components/SideBar';
import MainSide from '../Components/MainSide';

export default function DetailScreen() {
    return (
        <div className='containermain'>
        <SideBar value="employee"/>
        <MainSide/>
        </div>    
        
    )
}
