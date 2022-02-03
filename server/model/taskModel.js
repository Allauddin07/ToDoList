const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        default:" "
    },

    proejcts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
    }],

    users:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    status:{
        type:String,
        enum:["Pending", "Done", "Progress"],
    },

}, {timestamps:true}) 

module.exports = mongoose.model("Task", taskSchema)