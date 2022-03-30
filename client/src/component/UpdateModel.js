// import { useEffect } from 'react';
import { useState } from 'react';
import {
    Button, Modal
}
    from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getProject, model, updateProject } from '../Reducer/Projectreducer';
import { useEffect } from 'react';
import MyVerticallydModal from './logSpiner';



function UpdateModel(props) {

    const { error, msg, pro, loading, success } = useSelector((state) => {

        return state.project

    })

    const [state, setState] = useState({


    })

    


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
        dispatch(model())
        props.onHide()
    }




    const createU = async () => {

        dispatch(updateProject(state))


    }
    console.log(state)

    useEffect(() => {

        if (pro) {
            setState({ ...pro })
        }
        if (msg) {
            notify(msg)
            dispatch(model())
            getProject()
            props.onHide()
        }
       
    }, [pro, msg, error])


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
                        Update User
                        {loading &&

                            <MyVerticallydModal
                                show={modalShow}

                            />

                        }

                        {error && <ToastContainer position="top-center"
                            autoClose={5000} />}

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

export default UpdateModel

