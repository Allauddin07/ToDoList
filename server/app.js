require('express').config()
const dotenv = require('dotenv')



const PORT = process.env.PORT 

const app = express()

app.get('/', ( req, res)=>{
    res.send("hello world")
})


app.listen(PORT, ()=>{
    console.log(`Server is listening to ${PORT}`)
})