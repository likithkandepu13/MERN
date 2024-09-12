//axios api with then catch using map function

const apiurl = "https://jsonplaceholder.typicode.com/users"
const fetchdata = ()=>{
    fetch(apiurl).then((response) => {
        return response.json()
    }).then((result) => {
      //  console.log(result)
      const users=result
      users.map((u,index)=>{
        console.log("User: "+(index+1))
        //console.log(u)
        console.log("User Id: "+u.id)
        console.log("User Name: "+u.name)
        console.log("User Email: "+u.email)
        console.log("username: "+u.username)
        console.log("User Address: "+u.address.city)
    })
    }).catch((err) => {
        console.log(err.message)
    });
}
fetchdata()//function call