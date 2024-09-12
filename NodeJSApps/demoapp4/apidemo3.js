// axios api demo with async/await 


const axios = require("axios")
const apiuri    = "https://jsonplaceholder.typicode.com/users"
const fetchdata = async() => {
    try{
        const response = await axios.get(apiuri)
        console.log(response.data)
    }
    catch(e){
        console.log(e.message)
    }
}


fetchdata()  //function call