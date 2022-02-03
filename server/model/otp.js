const mongoose = require("mongoose")

const optSchema = new mongoose.Schema({
    email:String,
    opt:Number,
    expires:Number
}, {timestamps:true})

module.exports=mongoose.model("Opt", optSchema, 'Opt')