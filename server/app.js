require('dotenv').config()
require("./database/connection")
const express = require('express')
const app = express()
require('express-async-errors');
const cookies = require("cookie-parser")
const PORT = process.env.PORT 
const router = require('./router/route')
const project = require('./router/projectRouter')
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.json())

app.use(cors(
    {
    origin:["http://localhost:3000"],
    credentials:true
}
))

app.use(cookies())

// app.use(express.json())



app.use(router)
app.use("/project", project )



app.use((error, req, res, next)=>{
    res.json({success:false, message: error.message
    })
})






app.listen(PORT, ()=>{
    console.log(`Server is listening to ${process.env.PORT}`)
})