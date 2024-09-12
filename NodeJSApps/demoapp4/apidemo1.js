//axios api with then catch 

const axios = require("axios")
const apiurl = "https://jsonplaceholder.typicode.com/users"

axios.get(apiurl)
.then((response)=>{
  //console.log(response.data)
    const users = response.data
    console.log(users)
}).catch((error)=>{
   console.log(error.message)
})