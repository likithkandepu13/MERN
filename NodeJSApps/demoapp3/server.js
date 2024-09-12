// creating server using express module

const express = require("express")
const app = express()

app.get("",(requrest,response)=>{
   response.send("<b>Home Page</b>")
})


app.get("/about",(requrest,response)=>{
   response.send("<b>About Page</b>")
})

app.get("/contact",(requrest,response)=>{
   response.send("<b>contact Page</b>")
})

app.get("/login",(requrest,response)=>{
   response.send("<b>Login Page</b>")
})

// localhost:2014/displayemp where displayemp is uri or endpoint
// uri means endpoint
// uri is a unique resource identifier

app.get("/displayemp",(requrest,response)=>{
   response.send(emp)
})

app.get("*",(requrest,response)=>{
   response.send("<b>Page not found</b>")
})

const port = 2014
app.listen(port, () => {
   console.log(`Server is running at port ${port}`)
})

const emp= {"id":101,"name":"KLEF","gender":"FEMALE"}
