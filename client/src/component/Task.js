import React from 'react'

import '../Style/App.css'

const Task = () => {
  return (
<>
            
                
           
        
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


                        <button className="btn btn-info align-self-center" ><i className="fas fa-plus"></i> <span className="display-1.3">New task</span> </button>
                    </div>








                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table width='100%'>
                            <thead>
                                <tr>
                                    <td>Task Name</td>
                                    <td>Project</td>
                                    <td>User</td>
                                    <td>Start Date</td>
                                    <td>Deadline</td>
                                    <td>Progress</td>
                                   
                                </tr>
                            </thead>
                            <tbody>

                                {/* {
                                    project.map((item, id) => {
                                        return (
                                            <tr key={item._id}>
                                                <td>{item.name}</td>
                                                <td>0225165668</td>
                                                <td>{item.email}</td>
                                                <td>{item.role}</td>
                                                <td><Button  > Delete

                                                </Button>
                                                    <Button variant="primary" >
                                                        update
                                                    </Button>
                                                    <i className="fa-solid fa-pencil"></i></td>
                                            </tr>)
                                    })
                                } */}





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

export default Task