import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import MyVerticallydModal from './logSpiner';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { forgotPassword, mode, model } from '../Reducer/Authreducer';
import { useEffect } from 'react';





const Forgotpass = () => {

    let { msg, error, loading } = useSelector((state) => {
        return state.auth
    })


    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(true);



    const dispatch = useDispatch()

    const [state, setState] = useState({

        email: ''


    })

    const [st, setSt] = useState({
        ms: '',

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

    const navigt=()=>{

        
    //    notify()
        
         
        // error=''
       
        
        

        
    }

    const sign = async () => {

        await dispatch(forgotPassword(state))

        setState({email:''})
        
        



        // const result = await fetch("http://localhost:8000/forgotPassword", {
        //     method: "post",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(state)
        // })
        // const res = await result.json()


        // console.log(res)

        // if (res.success === true) {

        //     notify(res.message)
        //     navigate('/verifycode');

        //     setState({

        //         email: '',

        //     })



        // }

        // else {

        //     setSt({
        //         msg: res.message,

        //     })


        // }












    }

    // navigt()
    useEffect(()=>{
        if(msg){
            // navigate('/passwordchange')
            notify(msg)
        dispatch(model())
        
        }

    },[msg, dispatch, notify])



    return (
        <>
        <ToastContainer position="top-center"
                autoClose={4000} />

        
       


            <div className="login d-flex justify-content-center  align-items-center">
                <div className='loginbox'>

                    <div className="log d-flex justify-content-center mb-3">
                        <h2>Email verify</h2>
                    </div>



                    {loading &&

                        <MyVerticallydModal
                            show={modalShow}

                        />


                    }
                    {/* {msg && navigt() } */}
                    

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








                        <button onClick={async () => {
                            console.log(`your msg ${msg}`)
                            await sign()
                            console.log(`your msg ${msg}`)
                            if (msg) {
                                navigate('/verifycode');
                            }
                        }} type='submit' className=' send mb-4 '> Send code</button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Forgotpass