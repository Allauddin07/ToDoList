import React, { useState } from 'react'

const Sidebar = () => {

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
                                        <a href="#gg">Overview</a></div>
                                    <div className=" "><span><i class="far fa-circle"></i></span>
                                        <a href="#g">Analytic</a></div>

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
                                        <a href="#g">User</a></div>

                                </div>






                            </div>
                        </div>
    
    
    </>
  )
}

export default Sidebar