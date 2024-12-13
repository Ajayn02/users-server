require('dotenv').config()
const cors=require('cors')
const express=require('express')
require('./connection/db')
const route=require('./Routes/route')


const server=express()


server.use(cors())
server.use(express.json())
server.use(route)


const PORT= 3000 || process.env.PORT

server.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
    
})

server.get('/',(req,res)=>{
    res.send('<h1>Welcome to server</h1>')
})


