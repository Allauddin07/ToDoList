const { createUser, getUser, updateUser, deleteUser, userDetail, logIn, logOut } = require('../controller/usercontroller')
const { authenticate, authorized } = require('../middleware/auth')
// const authenticate = require('../middleware/auth')

const router = require('express').Router()

//Create User __Admin
router.route('/create').post(createUser)

//Get User
router.route('/getuser').get(authenticate, getUser)

// Update User by Amdin

router.route('/updateuser/:id').put(authenticate, updateUser).delete(authenticate, authorized("admin"), deleteUser).get(authenticate, userDetail)

// delete user by admin
// 
router.route("/login").post(logIn)
router.route("/logout").get(logOut)











module.exports =router

