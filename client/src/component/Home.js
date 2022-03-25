import React from 'react'
import '../Style/App.css'
import Navbar from '../component/Navbar'
import Sidemenu from './Sidemenu'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'








function Home() {

    const { user } = useSelector((state) => {

        return state.auth

    })
    const user_role = JSON.parse(localStorage.getItem('user'))

    console.log(user_role)





    return (
        <>
            {user_role.role === "admin" ? <React.Fragment>
                <div className="sidebar">


                    <Sidemenu />


                </div>
                <div className="page-content">
                    <Navbar />

                    <div className=" mainContaint">

                        <div className='cards p-3 '>
                            <div className="card-single"><div>
                                <h1>{user.length}</h1>
                                <h1>Users</h1>
                            </div>

                                <div className="align-self-center">
                                    <i className="fa-solid fa-users icon"></i>
                                </div>

                            </div>
                            <div className="card-single">
                                <div>
                                    <h1>0</h1>
                                    <h1>Projects</h1>
                                </div>
                                <div className="align-self-center">
                                    <i className="fa-solid fa-clipboard-list icon"></i>
                                </div>

                            </div>
                            <div className="card-single"><div>
                                <h1>0</h1>
                                <h1>Tasks</h1>
                            </div>
                                <div className="align-self-center">
                                    <i className="fa-solid fa-clipboard-list icon"></i>
                                </div>

                            </div>
                        </div>


                        <div className="container">


                            <Outlet />

                        </div>



















                    </div>
                </div>
            </React.Fragment> : <div>
                <div className="sidebar">


                    <Sidemenu />


                </div>
                <div className="page-content">
                    <Navbar />

                    <div className=" mainContaint">

                        {/* <div className='cards p-3 '>
                            <div className="card-single"><div>
                                <h1>{user.length}</h1>
                                <h1>Users</h1>
                            </div>

                                <div className="align-self-center">
                                    <i className="fa-solid fa-users icon"></i>
                                </div>

                            </div>
                            <div className="card-single">
                                <div>
                                    <h1>0</h1>
                                    <h1>Projects</h1>
                                </div>
                                <div className="align-self-center">
                                    <i className="fa-solid fa-clipboard-list icon"></i>
                                </div>

                            </div>
                            <div className="card-single"><div>
                                <h1>0</h1>
                                <h1>Tasks</h1>
                            </div>
                                <div className="align-self-center">
                                    <i className="fa-solid fa-clipboard-list icon"></i>
                                </div>

                            </div>
                        </div> */}


                        <div className="container">


                            <Outlet />

                        </div>



















                    </div>
                </div>
            </div>









            }


            {/* <div className="sidebar">

                        
                        <Sidemenu/>

                        
                    </div>
                    <div className="page-content">
                        <Navbar />

                        <div className=" mainContaint">

                            <div className='cards p-3 '>
                                <div className="card-single"><div>
                                    <h1>{user.length}</h1>
                                    <h1>Users</h1>
                                </div>

                                <div className="align-self-center">
                                <i className="fa-solid fa-users icon"></i>
                                </div>
                                
                                </div>
                                <div className="card-single">
                                    <div>
                                    <h1>0</h1>
                                    <h1>Projects</h1>
                                </div>
                                <div className="align-self-center">
                                <i className="fa-solid fa-clipboard-list icon"></i>
                                </div>
                               
                                </div>
                                <div className="card-single"><div>
                                    <h1>0</h1>
                                    <h1>Tasks</h1>
                                </div>
                                <div className="align-self-center">
                                <i className="fa-solid fa-clipboard-list icon"></i>
                                </div>
                                
                                </div>
                            </div>


                          <div className="container">

                          
                          <Outlet/>

                          </div>

                            







                            









                        </div>
                    </div> */}




        </>
    )
}

export default Home
