
const express= require('express')
const cors=require('cors');
const app=express()                        // using app to call the method in express
const { db } = require('./db/db');
const {readdirSync} = require('fs')

require('dotenv').config()
const port = process.env.port

                                             // middlewares- software used for communication between applications

app.use(express.json())                       //app.use()- used to mount the specification of middlware . want all the data stored in json 
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))               // readdirsync-read the folder routes, since have multiple files ...we map

const server =() =>{
db()
 app.listen(port,()=>{
     console.log('listening to port :',port)
 })
}

server()