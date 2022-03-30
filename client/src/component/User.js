import React, { useState } from 'react'
import { confirm } from 'react-bootstrap-confirmation';

import '../Style/App.css'
import { dell, remove_uerD, getuser, updateUser, model } from '../Reducer/Authreducer';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import MyVerticallyCenteredModal from './Model';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const User = () => {
    const dispatch = useDispatch()
    const [modalShow, setModalShow] = useState(false);
    const [Show, setShow] = useState(false);





    const options = {
        title: 'Delete',
        okText: 'Yes',
        cancelText: 'No'


    }

    const { user } = useSelector((state) => {

        return state.auth

    })

    

    const display = (id) => {
        const usr =user.find((usr)=>{
            return (usr._id===id)
        })
        console.log(usr)
        const result = confirm(`Are you sure? you want to delete ${usr.name}`, options);
        return result

    };

   

    const [state, setState] = useState(
        {
            id: null,
            name: null,
            email: null,
            role: null


        }
    )



    const deleteUser = async (id) => {
        const val = await display(id)
        if (val === true) {

            dispatch(dell(id))
            dispatch(getuser())
        }

    }

    const updtUser = async (id) => {
        const result = await fetch(`http://localhost:8000/user/${id}`, {
            method: "get"

        })
        const res = await result.json()

        console.log(res.message)

        setState({
            id: res.message._id,
            name: res.message.name,
            email: res.message.email,
            role: res.message.role
        })









        setModalShow(true)

    }

    const handleChange = (e) => {



        setState((state) => {

            return {
                ...state,
                [e.target.name]: e.target.value
            }

        })



    }

    const r_userD = () => {

        dispatch(remove_uerD())
        setState({

            name: '',
            email: '',
            role: ''
        })

        setModalShow(false)


    }

    const updateU = async () => {

        const st = {
            id: state.id,
            body: state

        }



        await dispatch(updateUser(st))
        await dispatch(getuser())
        setModalShow(false)


    }






    return (
        <>

            <MyVerticallyCenteredModal
                show={Show}
                onHide={() => setShow(false)}
                onShow={() => setShow(true)}
            />

            <ToastContainer position="top-center"
                autoClose={5000} />
            
          




            <div className=" mainContaint">

                {/* {loading &&
                        <div class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>

                    } */}




                <div className="container">
                    <div className>
                        <div className="project">
                            <div className="card">
                                <div className="card-header ">
                                    {/* <h3>User</h3> */}
                                    {/* <button>sell all <span class="las la-arrow-right"></span></button> */}






                                    <div className='contact_form_class  flex-grow-1'>
                                        <div className='search'>


                                            <div class="form-group  ">
                                                <input type="text" name="search" />
                                                <label >Search </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div className=" d-flex logo ">


                                        <button className="btn btn-info align-self-center" onClick={() =>{ 
                                            setShow(true)
                                            dispatch(model())
                                        
                                        }}><i className="fas fa-plus"></i> <span className="display-1.3">New user</span> </button>
                                    </div>








                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table width='100%'>
                                            <thead>
                                                <tr>
                                                    <td>Name</td>
                                                    <td>Phone</td>
                                                    <td>Eamil</td>
                                                    <td>Role</td>
                                                    <td>Action</td>
                                                   
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    user.map((item, id) => {
                                                        return (
                                                            <tr key={item._id}>
                                                                <td>{item.name}</td>
                                                                <td>0225165668</td>
                                                                <td>{item.email}</td>
                                                                <td>{item.role}</td>
                                                                <td><Button onClick={() => {


                                                                    deleteUser(item._id)

                                                                }} > Delete

                                                                </Button>
                                                                    <Button variant="primary" onClick={
                                                                        () => {
                                                                            updtUser(item._id)

                                                                        }

                                                                    }>
                                                                        update
                                                                    </Button>
                                                                    <i className="fa-solid fa-pencil"></i></td>
                                                            </tr>)
                                                    })
                                                }





                                            </tbody>

                                        </table>



                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>


            </div>











            <Modal
                show={modalShow}

                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <div className='contact_form_class'>
                        <div className='d-flex mb-5 mt-3'>

                            <div className='align-self-center '>
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div class="form-group  flex-grow-1">
                                <input type="text" name="name" Value={state.name} onChange={handleChange} />

                            </div>

                        </div>

                        <div className='d-flex mb-5 mt-3'>

                            <div className='align-self-center '>
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div class="form-group  flex-grow-1">
                                <input type="text" name="email" Value={state.email} onChange={handleChange} />

                            </div>

                        </div>






                        <div className='d-flex mb-4'>
                            <div className='align-self-center '>
                                <i class="fa-solid fa-lock"></i>
                            </div>
                            <div class="form-group  flex-grow-1">


                                <select Value={state.role}
                                    name="role" onChange={handleChange}>
                                    <option > {state.role}</option>
                                    <option >{state.role === "admin" ? 'user' : 'admin'} </option>
                                </select>

                            </div>

                        </div>




                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={r_userD} >Close</Button>
                    <Button variant="primary" onClick={() => {

                        updateU()
                    }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>















        </>
    )
}

export default User