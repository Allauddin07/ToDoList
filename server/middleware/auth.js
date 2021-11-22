const jwt = require("jsonwebtoken")
const User = require("../model/userModel")
exports.authenticate = async(req, res, next)=>{

    const toke = req.cookies.token
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

}

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


