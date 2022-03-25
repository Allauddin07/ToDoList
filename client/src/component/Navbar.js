import React from 'react'
import img from '../images/img1.jpg'
import {logout} from '../Reducer/Authreducer'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

function Navbar() {


    const dispatch = useDispatch()
    const navigate = useNavigate();

    // const state =  useSelector((state)=>{
    //     return state.auth
    // })

const log = ()=>{
    
    localStorage.clear()

    

    dispatch(logout())
    navigate('/login');
    
}
const user_role = JSON.parse(localStorage.getItem('user'))

    return (
        <>
        <div>
        <div className="header d-flex justify-content-between">
                <div className=" d-flex logo ">
                    <i className="fas fa-bars py-5 mx-3"></i>
                    
                    <button onClick={log} className="btn btn-info align-self-center"><i className="fas fa-plus"></i> <span className="display-1.3">New Task</span> </button>
                </div>

                <div className=" d-flex right ">
                    <span className="align-self-center"><i className="fas fa-search py-3 mx-3 "></i></span>
                    <span className="align-self-center mx-4"><i className="fas fa-bell py-3 mx-3 "></i></span>

                    <div className="d-flex  align-items-center mr-1">
                        <span>{user_role.name}</span>
                        <img className="img-thumbnail thumb-xs mx-2 " src={img} alt="tasvir" />
                    </div>
                </div>

            </div>
        </div>
            
        </>
    )
}

export default Navbar