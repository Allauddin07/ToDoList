import React from 'react'
import {  NavDropdown } from 'react-bootstrap';


function Profile() {
    return (
        <>
<NavDropdown
    title={
        <span>
            <i className='fas fa-newspaper'></i> 
        </span>
    }
    id='collasible-nav-dropdown'>
    <NavDropdown.Item href='#action/3.1'>Action 1</NavDropdown.Item>
    <NavDropdown.Item href='#action/3.3'>Action 2</NavDropdown.Item>
</NavDropdown>
        </>
    )
}

export default Profile
