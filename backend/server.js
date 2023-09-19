const express = require('express')
const router = require('./routes/workout')
const mongoose = require('mongoose')
require('dotenv').config()


const app = express()

/* Middleware */
app.use(express.json())
app.use('/', (req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

/* Routes */

app.use('/api/workouts',router)

/* Database Connection */
mongoose.connect(process.env.MONG_URI ).then(()=>{

    /* Server */
    app.listen(process.env.PORT, ()=> console.log('Connected to de db & Listenning in port ' + process.env.PORT))
}).catch((error)=>{
    console.log(error)
})
