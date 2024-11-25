const express = require('express');
const cors = require('cors')
const {app,server} = require('./socket/socket')
require('dotenv').config();
const db = require('./config/database');
const cookieParser=require("cookie-parser")
const userRoutes = require('./routes/userRoutes');
const messageroutes = require('./routes/messageRoutes')



// const app = express();


const port = process.env.PORT;
//middleware
app.use(express.json())
app.use(cookieParser())
const corOpation={
    origin:'http://localhost:3000',
    credentials:true
}
app.use(cors(corOpation))


//routes
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/message", messageroutes)

//http://localhost:8000/api/v1/user/register
// data base call
db()
server.listen(port,()=>{
    console.log("server is running in port: ", port)
})