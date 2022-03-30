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

const allowedOrigins = ["http://localhost:3000"];
const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            var msg =
                "The CORS policy for this site does not " +
                "allow access from the specified Origin.";
            callback(new Error(msg), false);
        }
    },
    optionsSuccessStatus: 200,
    credentials: true,
};






app.use(cors(
    {
        origin: ["http://localhost:3000"],
        credentials: true
    }
    // corsOptions
))
app.use(cookies())


// app.use(express.json())



app.use(router)
app.use("/project", project)



app.use((error, req, res, next) => {
    res.json({
        success: false, message: error.message
    })
})






app.listen(PORT, () => {
    console.log(`Server is listening to ${process.env.PORT}`)
})