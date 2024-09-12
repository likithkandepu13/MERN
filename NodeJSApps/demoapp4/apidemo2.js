//axios api with then catch using map function


const axios = require("axios")
const apiurl = "https://jsonplaceholder.typicode.com/users"

axios.get(apiurl).then((response)=>{
  //console.log(response.data)
    const users = response.data
    users.map((u,index)=>{
        console.log("User: "+(index+1))
        //console.log(u)
        console.log("User Id: "+u.id)
        console.log("User Name: "+u.name)
        console.log("User Email: "+u.email)
        console.log("username: "+u.username)
        console.log("User Address: "+u.address.city)
    })
}).catch((error)=>{
   console.log(error.message)
})