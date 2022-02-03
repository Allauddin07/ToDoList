const mongoose = require('mongoose')
const validater = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        trim:true
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validater.isEmail, "Invalid email"]

    },
    role: {
        type: String,
        default: "user",
        //  enum:["admin", "user", "superuser"]

    },
    password: {
        type: String,
        minLength: [6, "password should be at least 6 charater"],
        maxLength: [10, "password should be at least 10 charater"],
        required: [true, "please enter your password"],
        trim: true,
        select: false,

    },
    // timestamps: {
    //     createdAt: 'created_at',
    //     updatedAt: 'updated_at'
    //   }

})

userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
        return next()
    }

    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.generateToken = async function(){
    const jwtoken = jwt.sign({id:this._id}, process.env.SECRET_KEY)
    console.log(jwtoken)
    return jwtoken;
}

module.exports = mongoose.model("User", userSchema)