import React, { useEffect, useState } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';
import { getProject } from '../Reducer/Projectreducer';
import { getuser } from '../Reducer/Authreducer';
import MyVerticallydModal from './logSpiner';




function Sidemenu() {




  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {



    animation();
    $(window).on('resize', function () {
      setTimeout(function () { animation(); }, 500);
    });

  }, []);

  const dispatch = useDispatch()

  const user_role = JSON.parse(localStorage.getItem('user'))

  let { loading } = useSelector((state) => {

    return state.project

  })

  // let {  loading } = useSelector((state) => {

  //   return state.auth

  // })


  const [modalShow, setModalShow] = useState(true);



  return (

    <div>


      {loading &&

        <MyVerticallydModal
          show={modalShow}

        />


      }

      <div className="">
        <div className="sidebar-brand">
          <h2><span className='las la-hand-lizard'></span><span>TechTalk </span></h2>

        </div>
        <div className="sidebar-menu" id="navbarSupportedContent">
          <ul>

            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>







            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                {/* <i 
                className="fas fa-tachometer-alt">
                </i> */}
                <span className='las la-igloo'></span>
                Dashboard
              </NavLink>
            </li>

            {
              user_role.role === "admin" && <li className="nav-item">
                <NavLink onClick={() => {

                  dispatch(getuser())


                }}
                  className="nav-link" to="/user" exact>
                  <span className='las la-users'></span>User
                </NavLink>
              </li>
            }



            <li className="nav-item">
              <NavLink onClick={() => {

                dispatch(getProject())

              }} className="nav-link" to="/project" exact>
                <span className='las la-clipboard-list'></span>Project
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/task" exact>
                <span className='las la-clipboard-list'></span>Task
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" exact>
                <span
                  className="far fa-copy">
                </span>Contact Us
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink className="nav-link" to="/login" exact>
                <span
                  className="far fa-copy">
                </span>Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

    </div>





  )
}

export default Sidemenu