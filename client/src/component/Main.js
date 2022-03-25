import React from 'react'

const Main = () => {
  return (
    <>
    
    <div className='recent-grid'>
                <div className="project">
                    <div className="card">
                        <div className="card-header">
                            <h3>Recent Projects</h3>
                             <button>sell all <span className="las la-arrow-right"></span></button> 

                        </div>


                        <div className="card-body">
                            <div className="table-responsive">
                                <table width='100%'>
                                    <thead>
                                        <tr>
                                            <td>Project-title</td>
                                            <td>Task-Title</td>
                                            <td>Status</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> UI Design</td>
                                            <td>UI Team</td>
                                            <td><span class="status purple">
                                                </span>need support
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>web development</td>
                                            <td>frontend</td>
                                            <td><span class="status pink">
                                                </span>in progress
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ushop app</td>
                                            <td>M Team</td>
                                            <td><span class="status orange ">
                                                </span>Done
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="customers">
                    <div className="card">
                        <div className="card-header">
                            <h3>New User</h3>
                             <button>sell all <span className="las la-arrow-right"></span></button> 
                        </div>
                        <div className="card_body">
                            <div className="customer">
                                <div className="info">
                                    <img src="" width="40px" height="40px" alt=""/>
                                    <div>
                                        <h4>Allauddin</h4>
                                        <small>frontend developer</small>
                                    </div>
                                </div>
                                <div className="contact">
                                    <span className="las la-user-circle"></span>
                                    <span className="las la-user-comment"></span>
                                    <span className="las la-user-phone"></span>
                                </div>
                            </div>
                            <div className="customer">
                                <div className="info">
                                    <img src="" width="40px" height="40px" alt=""/>
                                    <div>
                                        <h4>Ashish</h4>
                                        <small>Writer</small>
                                    </div>
                                </div>
                                <div className="contact">
                                    <span className="las la-user-circle"></span>
                                    <span className="las la-user-comment"></span>
                                    <span className="las la-user-phone"></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

    </>
  )
}

export default Main