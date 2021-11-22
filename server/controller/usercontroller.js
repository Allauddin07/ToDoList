const User = require('../model/userModel')
const catchError = require("../middleware/catchEroor")
const bcrypt = require("bcryptjs")
// const cookies = require("cookie-parser")

//Creating user ---Admin Only
exports.createUser = async (req, res) => {

    const { name, email, password } = req.body;

    const user = await User.findOne({ email })
    if (user) {
        res.status(401).json({ success: false, message: "User already exit with this name" })
    }


    else {

        const created = await User.create({ name, email, password })
        res.status(200).json({ success: true, message: "User created succefully " })
    }


}

// getting all user
exports.getUser = async (req, res, next) => {
    const user = await User.find()
    res.status(200).json({
        success: true,
        message: user
    })


}
// Updating user --Amin Only
exports.updateUser = async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(501).json({
            success: false,
            message: "User not Found"
        })
    }
    else {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })

        res.status(200).json({
            success: true,
            message: user
        })


    }

}

// Deleting user --Admin Only
exports.deleteUser = async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(501).json({
            success: false,
            message: "User not Found"
        })
    }
    else {
        await user.remove()

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })


    }

}

// User Detail-----
exports.userDetail = async (req, res) => {

    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(501).json({
            success: false,
            message: "User not Found"
        })
    }
    else {


        res.status(200).json({
            success: true,
            message: user
        })


    }

}

//LogIn Feature for all------

exports.logIn=async(req, res)=>{
   
    const {email, password} =req.body
    if(!email || !password){
        res.status(501).json({
            success:false,
            message:"Please enter all fields"
        })
    }
    else{
        const user = await User.findOne({email}).select("+password")
        if (!user){
            res.status(501).json({
                success:false,
                message:"No user found with this Eamil"
            })
        }
        else{
            const match =await bcrypt.compare(password, user.password)
            if(!match){
                res.status(501).json({
                    success:false,
                    message:"Invalid LogIn"
                })
            }
            else{
                const token = await user.generateToken()
                const option = {
                    
                    httpOnly:true
                }
                res.status(200).cookie("token", token, option).json({
                    success:true,
                    message:"logIn successfully"
                })
            }
            
        }

    }


}


//logout feature

exports.logOut=async(req, res)=>{
    res.clearCookie("token")
    res.status(200).json({success:true,
    message:"logout successfully"})

}



