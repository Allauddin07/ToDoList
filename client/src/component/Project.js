import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Modal } from 'react-bootstrap';

import '../Style/App.css'
import ProjectModel from './ProjectModel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { model } from '../Reducer/Authreducer';
import { useState } from 'react';





const Project = () => {

    const { project } = useSelector((state) => {

        return state.project

    })
    const [modalShow, setModalShow] = useState(false);

    const dispatch = useDispatch()




    return (
        <>

            <ProjectModel
                show={modalShow}
                onHide={() => setModalShow(false)}
                onShow={() => setModalShow(true)}
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


                                            <div className="form-group  ">
                                                <input type="text" name="search" />
                                                <label >Search </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div className=" d-flex logo ">


                                        <button className="btn btn-info align-self-center" onClick={
                                            () => {
                                            setModalShow(true)
                                            dispatch(model())
                                        }
                                        } >
                                            <i className="fas fa-plus"></i> <span className="display-1.3">New project</span> </button>
                                    </div>








                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table width='100%'>
                                            <thead>
                                                <tr>
                                                    <td>Project Name</td>
                                                    <td>Client</td>
                                                    <td>Start Date</td>
                                                    <td>Deadline</td>
                                                    <td>Progress</td>

                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    project.map((item, id) => {
                                                        return (
                                                            <tr key={item._id}>
                                                                <td>{item.name}</td>
                                                                <td>0225165668</td>
                                                                <td>{item.description}</td>
                                                                <td>something</td>
                                                                <td>going</td>
                                                                <td><Button  > Delete

                                                                </Button>
                                                                    <Button variant="primary" >
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












        </>
    )
}

export default Project