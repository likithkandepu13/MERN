//creating http server using http module.

const http=require("http")
const server=http.createServer( (request,response)=>{
    response.writeHead(200,{"Content-Type":"text/plain"})
    response.write("HTTP server with text response")
    response.end()
})

const port=2021
server.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})