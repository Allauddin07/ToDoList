import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MyVerticallydModal from './logSpiner';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { passwordconfirm } from '../Reducer/Authreducer';
import { NavLink } from 'react-router-dom';




const PasswordChange = () => {

    const {msg, error, loading } = useSelector((state) => {
        return state.auth
    })
    
    const [modalShow, setModalShow] = useState(true);

let {id, token} =useParams()


    const dispatch = useDispatch()

    const [state, setState] = useState({

        password: '',
        confirmpassword: ''

    })

    const notify = (msg) => toast.success(msg, {
        position: "top-center",
        autoClose: 4000
    });




    const handleChange = (e) => {


        setState((state1) => {

            return {
                ...state1,
                [e.target.name]: e.target.value
            }

        })



    }

    

    const sign =  () => {

        const st={
            state:state,
            id:id,
            token:token
        }

        dispatch(passwordconfirm(st))
        setState({
            password:'',
            confirmpassword:''

        })

        
    //    navigate('/login');

       








    }

    useEffect(()=>{
        if(msg){
            notify()
        }
        
    },[msg])

   





    return (
        <>

<ToastContainer position="top-center"
                autoClose={4000} />



            <div className="login d-flex justify-content-center  align-items-center">
                <div className='loginbox'>

                    <div className="log d-flex justify-content-center mb-3">
                        <h2>Password change form</h2>
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
                                <input type="password" name="password" value={state.password} onChange={handleChange} required />
                                <label >Password </label>
                            </div>

                        </div>




                        <div className='d-flex mb-4'>
                            <div className='align-self-center '>
                                <i className="fa-solid fa-lock"></i>
                            </div>
                            <div className="form-group  flex-grow-1">
                                <input type="password" name="confirmpassword" value={state.confirmpassword} onChange={handleChange} required />
                                <label >Confirm_Password </label>
                            </div>

                        </div>

                        

                        <button onClick={() => {
                            sign()
                        }} type='submit' className=' send mb-4 '> Login</button>

<NavLink className="nav-link" to="/login" exact>
              logIn
              </NavLink>


                        
                    </div>
                </div>


            </div>
        </>
    )
}

export default PasswordChange