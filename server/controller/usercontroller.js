const User = require('../model/userModel')
const Opt = require('../model/otp')
const catchError = require("../middleware/catchEroor")
const bcrypt = require("bcryptjs")
const sendEmail = require("../middleware/mailer")
const jwt = require("jsonwebtoken")
// const cookies = require("cookie-parser")

//Creating user ---Admin Only
exports.createUser = async (req, res) => {

    const { name, email, password, role } = req.body;

    const user = await User.findOne({ email })
    if (user) {
        res.status(401).json({ success: false, message: "User already exit with this name" })
    }


    else {

        const created = await User.create({ name, email, password, role })
        res.cookie("tokennn", "token hai bhai")
        res.status(200).json({ success: true, message: "User created succefully " })
        
    }


}

// getting all user
exports.getUser = async (req, res, next) => {
    const user = await User.find()
    res.cookie("tokennn", "token hai bhai")
    res.status(200).json({
        success: true,
        message: user
    })


}
// Updating user --Amin Only
exports.updateUser = async (req, res) => {

    console.log(req.params.id)
    console.log(req.body)

    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(501).json({
            success: false,
            message: "User not Found"
        })
    }
    else {
        console.log(req.body)
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

exports.logIn = async (req, res) => {

    console.log(req.body)

    const { email, password } = req.body
    if (!email || !password) {
        res.status(501).json({
            success: false,
            message: "Please enter all fields"
        })
    }
    else {
        const user = await User.findOne({ email }).select("+password")
        if (!user) {
            res.status(501).json({
                success: false,
                message: "Invalid logIn"
            })
        }
        else {
            const match = await bcrypt.compare(password, user.password)
            if (!match) {
                res.status(501).json({
                    success: false,
                    message: "Invalid logIn"
                })
            }
            else {
                const token = await user.generateToken()
                const option = {

                    httpOnly: true,
                    maxAge: 360000,
                    sameSite: 'lax'
                }
                
                res.status(200).cookie("token", token, option).json({
                    success: true,
                    token,
                    message: "logIn successfully",
                    user
                })
            }

        }

    }


}

//logout feature

exports.logOut = async (req, res) => {
    res.clearCookie("token")
    res.status(200).json({
        success: true,
        message: "logout successfully"
    })

}

// Forgot password--------->

exports.forgotPassword = async (req, res) => {

    console.log(req.body)

    const { email } = req.body
    if (!email) {
        res.status(403).json({
            success: false,
            message: "Please enter your email"
        })
    }
    else {

        const user = await User.findOne({ email }).select('+password')
        console.log(user)
        if (!user) {
            res.status(403).json({
                success: false,
                message: "Not found with this email"
            })
        }
        else {
            // const opt = Math.floor(Math.random() * 10000 + 1)
            let secret = process.env.SECURE;
            let payload = {
                id: user._id,
                email: user.email

            }
            let token = jwt.sign(payload, secret, { expiresIn: '15m' })
            const link = `http://localhost:3001/passwordchange/${user.id}/${token}`
            console.log(link)




            console.log(user.email)
            const message = `Your code is \n\n ${link} \n\n if you have not requested this email, just simply gnore it`
            await sendEmail({
                email: user.email,
                subject: "TickTalkweb",
                message
            })
            // const option = {
            //     httpOnly: true
            // }
            // res.cookie("pass", opt, option)
            // res.cookie("email", user.email, option)
            res.status(200).json({
                success: true,
                message: "Email sent successfully"
            })
        }
    }


}

// Veryfy code------>

exports.verifyCode = async (req, res) => {

    const { id, token } = req.params
    console.log(id)
    console.log(token)
    // console.log(req.body)
    const user = await User.findById(id).select('+password')
    if (!user) {
        res.status(401).json({
            success: false,
            message: "No user exits with this id"
        })



    }
    else {
        let secret = process.env.SECURE + user.password
        let match = jwt.verify(secret, token)

        if (!match) {
            res.status(402).json({
                success: false,
                message: "Please contact to your Admin"
            })
        }
        else {

            res.status(402).json({
                success: true,
                message: "You can change your password now"
            })

            
        }
    }
}

//resetCode------------>
exports.resetPassword = async (req, res) => {

    try {
        const { password, confirmpassword } = req.body
    let { id, token } = req.params
    
    console.log(id)
    console.log(token)
    console.log(req.body)
    const user = await User.findById(id).select('+password')
    console.log(user)
    if (!user) {
        res.status(401).json({
            success: false,
            message: "No user exits with this id"
        })



    }
    else {
        let secret = process.env.SECURE
        let match =  jwt.verify(token, secret)

        if (!match) {
            res.status(402).json({
                success: false,
                message: "Please contact to your Admin"
            })
        }
        else {



            if (!password || !confirmpassword) {
                res.status(402).json({
                    success: false,
                    message: "please fill all fields"
                })
            }
            else {
                if (password !== confirmpassword) {
                    res.status(402).json({
                        success: false,
                        message: "Password is not matching"
                    })

                }
                else {
                    // const user = await User.findOne({ email })

                    user.password = password
                    await user.save()

                    res.status(200).json({
                        success: true,
                        message: `Pasword reset successfuly${user}`
                    })

                }

            }
        }




}
        
    } catch (error) {

        console.log(error)
        
    }

    
}

exports.changeRole = async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {

        res.status(402).json({
            success: false,
            message: "user not found"
        })

    }
    else {
        user.role = req.body.role
        await user.save()
        res.status(200).json({
            success: true,
            message: "made Admin Successfully"
        })
    }

}



