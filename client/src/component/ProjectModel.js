// import { useEffect } from 'react';
import { useState } from 'react';
import {
    Button, Modal
}
    from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getuser, model } from '../Reducer/Authreducer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createProject, getProject } from '../Reducer/Projectreducer';
import { useEffect } from 'react';
import MyVerticallydModal from './logSpiner';



function ProjectModel(props) {



    const [state, setState] = useState({
        name: '',
        description: ''

    })

    const { error, msg, loading, success } = useSelector((state) => {

        return state.project

    })




    // const { msg, error, success, loading } = useSelector((state) => {
    //     return state.auth
    // })



    const notify = (mg) => toast.success(mg, {
        position: "top-center",
        autoClose: 5000
    });

    const noti = (mg) => toast.error(mg, {
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
    const [modalShow, setModalShow] = useState(true);


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

        dispatch(createProject(state))


    }

    useEffect(() => {

        if (msg) {

            dispatch(getuser())
            setState({
                name: '',
                description: '',

            })
            props.onHide()
            dispatch(getProject())
            notify(msg)
            dispatch(model())

        }
        if(error){
            noti(error)
            dispatch(model())
            
        }

        



    }, [msg, notify, noti, dispatch, setState, error, props])




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

                        
                        {/* {st.msg && <div className="alert alert-danger mb-4 text-center " role="alert">
                            <h4>{msg}</h4>
                        </div>} */}

                        {loading &&

                            <MyVerticallydModal
                                show={modalShow}

                            />


                        }

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
                                <input type="text" name="description" Value={state.description} onChange={handleChange} />
                                <label >Description </label>
                            </div>

                        </div>


                        {/* <div className='d-flex mb-5 mt-3'>

                            <div className='align-self-center '>
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="form-group  flex-grow-1">
                                <input type="password" name="password" Value={state.password} onChange={handleChange} />
                                <label >Password </label>
                            </div>

                        </div> */}






                        {/* <div className='d-flex mb-4'>
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

                        </div> */}




                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={hide}>Cancel</Button>
                    <Button variant="primary" onClick={() => {

                        createU()
                        
                    }}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProjectModel

