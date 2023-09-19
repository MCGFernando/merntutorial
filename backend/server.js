const express = require('express')
const router = require('./routes/workout')
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

/* Server */
app.listen(process.env.PORT, ()=> console.log('Listenning in port ' + process.env.PORT))