const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL ,{ useNewUrlParser: true,useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error)=>console.error('Error'))
db.once('open', ()=>console.log('DB Connected'))

app.use(express.json())

const subscriberRouter = require('./router/subscribers')
app.use('/subscribers', subscriberRouter)

app.listen(3000, ()=>{
    console.log('Server Started')
})