const mongoose = require('mongoose')
const validater = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter project name"],
        trim:true
    },
    description:{
        type:String,
        required: [true, "Please explain about it breifly"],
    },
    user:[ {

        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],

    tasks:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Task"
    }],
    
    
    

},{
    timestamps:true
})

/*userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
        return next()
    }

    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.generateToken = async function(){
    const jwtoken = jwt.sign({id:this._id}, process.env.SECRET_KEY)
    console.log(jwtoken)
    return jwtoken;
}*/

module.exports = mongoose.model("Project", projectSchema)