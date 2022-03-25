// import { useEffect } from 'react';
import { useState } from 'react';
import {
    Button, Modal
}
    from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getuser, model } from '../Reducer/Authreducer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyVerticallyCenteredModal(props) {



    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        role: 'user',
    })

    const [st, setSt] = useState({
        msg: '',

    })


    // const { msg, error, success, loading } = useSelector((state) => {
    //     return state.auth
    // })



    const notify = (mg) => toast.success(mg, {
        position: "top-center",
        autoClose: 5000
    });


    const handleChange = (e) => {


        setState((state1) => {

            return {
                ...state1,
                [e.target.name]: e.target.value
            }

        })



    }

    const dispatch = useDispatch()


    const hide = () => {




        props.onHide()
        setState({
            name: '',
            email: '',
            password: '',
            role: 'user'
        })
        dispatch(model())


    }





    const createU = async () => {


        const result = await fetch("http://localhost:8000/create", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(state)
        })
        const res = await result.json()


        console.log(res)

        if (res.success === true) {

            dispatch(getuser())
            setState({
                name: '',
                email: '',
                password: '',
                role: 'user'
            })
            props.onHide()
            notify(res.message)
            dispatch(model())



        }

        else {

            setSt({
                msg: res.message,

            })
            props.onShow()


        }



























    }




    return (

        <>



            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create User

                        {st.msg && <div className="alert alert-danger mb-4 text-center " role="alert">
                            <h4>{st.msg}</h4>
                        </div>}

                        {/* {st.msg && <div className="alert alert-danger mb-4 text-center " role="alert">
                            <h4>{msg}</h4>
                        </div>} */}

                        {/* {
                            loading && <div className="spinner-border text-primary  " role="status">
                                <i className="sr-only">Please wait...</i>
                            </div>
                        } */}

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='contact_form_class'>
                        <div className='d-flex mb-5 mt-3'>

                            <div className='align-self-center '>
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="form-group  flex-grow-1">
                                <input type="text" name="name" Value={state.name} onChange={handleChange} />
                                <label >Name </label>
                            </div>

                        </div>

                        <div className='d-flex mb-5 mt-3'>

                            <div className='align-self-center '>
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="form-group  flex-grow-1">
                                <input type="text" name="email" Value={state.email} onChange={handleChange} />
                                <label >Email </label>
                            </div>

                        </div>


                        <div className='d-flex mb-5 mt-3'>

                            <div className='align-self-center '>
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="form-group  flex-grow-1">
                                <input type="password" name="password" Value={state.password} onChange={handleChange} />
                                <label >Password </label>
                            </div>

                        </div>






                        <div className='d-flex mb-4'>
                            <div className='align-self-center '>
                                <i className="fa-solid fa-lock"></i>
                            </div>
                            <div className="form-group  flex-grow-1">


                                <select Value={state.role}
                                    name="role" onChange={handleChange}>
                                    <option > user</option>
                                    <option >admin </option>
                                </select>

                            </div>

                        </div>




                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={hide}>Cancel</Button>
                    <Button variant="primary" onClick={() => {
                        
                        createU()
                        setSt({msg:''})

                    }}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MyVerticallyCenteredModal

