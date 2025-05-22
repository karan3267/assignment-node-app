const express= require('express')
const app=express()

const port=3000

app.length('/',(req,res)=>{
    res.send("Hello from NodeJS API")
})

app.listen(port,()=>{
    console.log(`Server started on Port: ${port}`)
})