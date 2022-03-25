import React, { useEffect } from 'react'
// import '../Style/App.css'
// import './Style/App.css'
import { useDispatch } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './component/Home'
import {
    
    Routes as Switch,
    Route,
    
} from "react-router-dom";
import Login from './component/Login'
import { add_token, getuser } from './Reducer/Authreducer';
import Protected from './component/Protected';
import Project from './component/Project';
import User from './component/User';
import Task from './component/Task';
// import Random from './component/Random';
// import './Style/App.css'
// import $ from 'jquery';
import Main from './component/Main';
import Forgotpass from './component/Forgotpass';

import PasswordChange from './component/PasswordChange';
import { getProject } from './Reducer/Projectreducer';


function App() {













    // const { token } = useSelector((state) => {
    //     return state.auth
    // })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getuser())
        dispatch(getProject())

        dispatch(add_token())


    }, [])


    return (
        <>
            {/* <Home/> */}
            <Switch>

                <Route exact path='/login' element={<Login />} />
                <Route exact path='/forgotpass' element={<Forgotpass />} />
                
                <Route exact path='/passwordchange/:id/:token' element={<PasswordChange />} />


                <Route exact path='/' element={<Protected cmp={Home} />}  >
                    <Route index  element={<Protected cmp={Main} />}></Route>
                    <Route path="user" element={<Protected cmp={User} />}></Route>
                    <Route path="project" element={<Protected cmp={Project} />}></Route>
                    <Route path="task" element={<Protected cmp={Task} />}></Route>

                </Route>


                {/* <Route exact path='/user' element={<Protected cmp={User} />} />
                <Route exact path='/project' element={<Protected cmp={Project} />} />
                <Route exact path='/task' element={<Protected cmp={Task} />} />
                <Route exact path='/contact' element={<Protected cmp={Random} />} /> */}

            </Switch>

        </>







    )
}

export default App
