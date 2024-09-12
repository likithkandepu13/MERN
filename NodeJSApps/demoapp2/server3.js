//creating server using express module
//express is third party module, so we need to install it using npm install express 

const express=require("express")
const app=express() //app is an object of express module

app.get( "" ,(request,response)=>{
    response.setHeader("Content-Type","text/html")
    response.send("Express Server")
    
})

const port =2023

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})