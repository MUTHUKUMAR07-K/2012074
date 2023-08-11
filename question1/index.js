const express=require('express')
const mongoose=require('mongoose')
const router=require('./controller/route')
const app=express()

require('dotenv').config()
mongoose.connect(process.env.url);
const db=mongoose.connection
db.on('error',(error)=>{
    console.log('Error');
})
db.once('connected',(connected)=>{
    console.log('Connected');
})

app.use('/api/trains',router)

app.listen(5000,(req,res)=>{
    console.log('Server Listening on port 5000.....')
})
