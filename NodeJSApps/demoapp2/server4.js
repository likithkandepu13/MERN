//creating server using express module
//express is third party module, so we need to install it using npm install express 

const express=require("express")
const app=express() //app is an object of express module

app.get( "" ,(request,response)=>{
    
    response.send("<h1>Hello MSWD</h1><br/>")
    
    
})

const port =2024

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})