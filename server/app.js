const express = require('express')
const dotenv = require('dotenv')



dotenv.config()
const PORT = process.env.PORT 

const app = express()

app.get('/', ( req, res)=>{
    res.send("hello world")
})


app.listen(PORT, ()=>{
    console.log(`Server is listening to ${PORT}`)
})