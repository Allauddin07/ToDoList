import React, { useState } from 'react'
import '../Style/App.css'
import img from '../images/img1.jpg'
// import { NavDropdown } from 'react-bootstrap';
// import { useState } from 'react'
// import {Link} from 'react-router-dom'
// 
function Home() {
    const [state, setstate] = useState(false)
    const [click, setClick] = useState(false)
    const [change, setChange] = useState(false)

    const changeClick = (e) => {
        setstate(!state)
        setClick(false)
        setChange(false)
    }

    const lick = (e) => {
        setClick(!click)
        setstate(false)
        setChange(false)
    }
    const chang = (e) => {
        setChange(!change)
        setClick(false)
        setstate(false)
    }


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2  g-0">
                        <div className="sidebar d-flex flex-column">
                            <div className="log align-self-center my-5">
                                <span><i className="fas fa-home"></i></span> TickTalk
                            </div>
                            <div className="side ml-6">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <span className=""><i className="fas fa-home "></i></span> Dashboard
                                    </div>

                                    <div onClick={changeClick}>
                                        {state ?
                                            <span><i className='fas fa-chevron-down'></i></span> :
                                            <span><i className='fas fa-chevron-right'></i></span>
                                        }
                                    </div>
                                </div>

                                <div className={state ? " mt-3 change" : "changeClick"}>


                                <div className=" "><span><i class="far fa-circle"></i></span>
                                        <a href="#gg">Home</a></div>
                                    <div className=" "><span><i class="far fa-circle"></i></span>
                                        <a href="#g">Home</a></div>

                                    <div className=" "><span><i class="far fa-circle"></i></span>
                                        <a href="#g">Home</a></div>

                                </div>






                                <div className="d-flex justify-content-between mt-4">
                                    <div>
                                        <span className=""><i className="fas fa-home "></i></span> Apps
                                    </div>

                                    <div onClick={lick}>
                                        {click ?
                                            <span><i className='fas fa-chevron-down'></i></span> :
                                            <span><i className='fas fa-chevron-right'></i></span>
                                        }
                                    </div>
                                </div>

                                <div className={click ? " change mt-3 " : "changeClick"}>
                                    <div className="d-flex  "><span><i class="far fa-circle"></i></span>
                                        <a href="#gg">Home</a></div>
                                    <div className="d-flex  "><span><i class="far fa-circle"></i></span>
                                        <a href="#g">Home</a></div>

                                    <div className="d-flex  "><span><i class="far fa-circle"></i></span>
                                        <a href="#g">Home</a></div>

                                </div>



                                <div className="d-flex justify-content-between mt-4">
                                    <div>
                                        <span className=""><i className="fas fa-home "></i></span> Authentication
                                    </div>

                                    <div onClick={chang}>
                                        {change ?
                                            <span><i className='fas fa-chevron-down'></i></span> :
                                            <span><i className='fas fa-chevron-right'></i></span>
                                        }
                                    </div>
                                </div>

                                <div className={change ? " change mt-3 " : "changeClick"}>
                                    <div className="d-flex ml-4"><span><i class="far fa-circle"></i></span>
                                        <a href="#gg">Users</a></div>
                                    <div className="d-flex ml-4"><span><i class="far fa-circle"></i></span>
                                        <a href="#g">Admin</a></div>

                                    <div className=" d-flex ml-4 "><span><i class="far fa-circle"></i></span>
                                        <a href="#g"></a></div>

                                </div>






                            </div>
                        </div>
                    </div>
                    <div className="col-md-10 gx-0">
                        <div className="header d-flex justify-content-between">
                            <div className=" d-flex logo ">
                                <i className="fas fa-bars py-5 mx-3"></i>
                                <button className="btn btn-info align-self-center"><i className="fas fa-plus"></i> <span className="display-1.3">New Task</span> </button>
                            </div>

                            <div className=" d-flex right ">
                                <span className="align-self-center"><i className="fas fa-search py-3 mx-3 "></i></span>
                                <span className="align-self-center mx-4"><i className="fas fa-bell py-3 mx-3 "></i></span>

                                <div className="d-flex  align-items-center mr-1">
                                    <span>Allauddin</span>
                                    <img className="img-thumbnail thumb-xs mx-2 " src={img} alt="tasvir" />
                                </div>
                            </div>

                        </div>
                        <div className="row mainContaint">

                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Home
