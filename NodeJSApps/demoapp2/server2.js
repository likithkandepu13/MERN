const http=require("http")
const server=http.createServer( (request,response)=>{
    response.writeHead(200,{"Content-Type":"text/html"})
    response.write("<b>HTTP server with html response</b><br/>")
    response.write("http module is inbuilt")
    response.end()
})

const port=2022
server.listen(port,()=>{
    console.log(`Server is running at port ${port}`)

})