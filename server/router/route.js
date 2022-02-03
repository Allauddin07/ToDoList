const { createUser, getUser,
    updateUser, deleteUser,
    userDetail, logIn, logOut,
    forgotPassword, verifyCode,
    resetPassword, changeRole } = require('../controller/usercontroller')
const { authenticate, authorized } = require('../middleware/auth')
const { createProject } = require("../controller/projectController")
const router = require('express').Router()

// ----------> User Authentication Route Starting from here ---------> //


//Create User __Admin
router.route('/create').post(createUser)

//Get User
router.route('/getuser').get(authenticate, getUser)

// Update User by Amdin

router.route('/user/:id').put(authenticate, updateUser).delete(authenticate, authorized("admin"), deleteUser).get(authenticate, userDetail)

// login for all

router.route("/login").post(logIn)

//logOut rout for all
router.route("/logout").get(logOut)

//Forgot Password

router.route("/forgotPassword").post(forgotPassword)

// verifyCode  --->

router.route("/verifycode").post(verifyCode)

//Resetting password

router.route("/resetpassword").put(resetPassword)

router.route('/changerole/:id').put(changeRole)




// <-----------Project Route Starting from here---------> //


// router.route("/createP").post(createProject)









module.exports = router

