const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/tictalk').then(()=>{

console.log("connection is successfull")

}).catch(()=>{
    console.log('No__ Connection')
})