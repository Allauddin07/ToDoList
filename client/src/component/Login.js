import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { model, signin } from '../Reducer/Authreducer';

import { useNavigate } from 'react-router-dom';
import MyVerticallydModal from './logSpiner';
import { useEffect } from 'react';




const Login = () => {

    const { error, loading } = useSelector((state) => {
        return state.auth
    })
    const navigate = useNavigate();

    const [modalShow, setModalShow] = useState(true);



    const dispatch = useDispatch()

    const [state, setState] = useState({

        email: '',
        password: ''

    })



    const handleChange = (e) => {


        setState((state1) => {

            return {
                ...state1,
                [e.target.name]: e.target.value
            }

        })



    }

    const remov=()=>{
        dispatch(model())
    }

    // const navigt=()=>{
    //     navigate('/home');
    // }

    const sign = async () => {


        const st = {
            email: state.email,
            password: state.password
        }

        await dispatch(signin(st))
        
        navigate('/');








    }

    // useEffect(()=>{
    //     dispatch(model())
    // },[dispatch])





    return (
        <>



            <div className="login d-flex justify-content-center  align-items-center">
                <div className='loginbox'>

                    <div className="log d-flex justify-content-center mb-3">
                        <h2>Login</h2>
                    </div>



                    {loading &&
                        
                            <MyVerticallydModal
                                show={modalShow}
                                
                            />
                        

                    }
                    {error &&
                        <div className="alert alert-danger mb-4 text-center " role="alert">
                            <h4>{error}</h4>
                        </div>
                    }







                    <div className='contact_form_class'>
                        <div className='d-flex mb-5 mt-3'>

                            <div className='align-self-center '>
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="form-group  flex-grow-1">
                                <input type="text" name="email" value={state.email} onChange={handleChange} required />
                                <label >Email </label>
                            </div>

                        </div>




                        <div className='d-flex mb-4'>
                            <div className='align-self-center '>
                                <i className="fa-solid fa-lock"></i>
                            </div>
                            <div className="form-group  flex-grow-1">
                                <input type="password" name="password" value={state.password} onChange={handleChange} required />
                                <label >Password </label>
                            </div>

                        </div>

                        <div><NavLink onClick={remov} className="nav-link" to="/forgotpass" exact>
                            
                            Forgot Password
                        </NavLink> </div>

                        <button onClick={() => {
                            sign()
                        }} type='submit' className=' send mb-4 '> Login</button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Login