import React from 'react'
import {Navigate} from 'react-router-dom'
const Protected = ( props) => {

    const Cmp= props.cmp 

    const authe = JSON.parse(localStorage.getItem('auth'))
  return (
    <React.Fragment>
    
    {authe ? <Cmp/> :<Navigate to="/login" />}
    
    </React.Fragment>
  )
}

export default Protected