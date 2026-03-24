import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
   <div>
    <ul>
        <li>
            <NavLink to='/' className={({isActive})=>isActive?"active":""}>Dashboard</NavLink><br></br>
    <NavLink to='/Createbill' className={({isActive})=>isActive?"active":""}>Createbill</NavLink> <br></br>
    <NavLink to='/Editmenue' className={({isActive})=>isActive?"active":""}>Editmenue</NavLink><br/>
    <NavLink to='/Settings' className={({isActive})=>isActive?"active":""}>Settings</NavLink><br/>
        </li>
    </ul>
   </div>
  )
}

export default Navbar