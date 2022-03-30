const jwt = require("jsonwebtoken")
const User = require("../model/userModel")

//logIn checking feature-----

exports.authenticate = async(req, res, next)=>{

    try {
        console.log("token")
        const toke = req.cookies.token
    console.log(toke)
    if (!toke){
        return res.status(402).json({
            success:false,
            message:"Please logIn first"
        })
    }
    const jt = jwt.verify(toke, process.env.SECRET_KEY)
    req.user = await User.findOne({_id:jt.id})
    console.log(req.user)
    next()
        
    } catch (error) {
        res.status(402).json({
            success:false,
            message:"Something went wrong"
        })
        
    }

    

}

//Admin checking role---------

exports.authorized= (...roles)=>{
    return (req, res, next)=>{
        if (!roles.includes(req.user.role)){
             return res.status(402).json({
                success:false,
                message:"you don't have access to this"
            })
        }

        next()

    }



}


