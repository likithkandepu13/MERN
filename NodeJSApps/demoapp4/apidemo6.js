// axios api demo with async/await 

const apiuri    = "https://jsonplaceholder.typicode.com/users"

const fetchdata=async()=>{
    try{
        const response = await fetch(apiuri)
        const result =await response.json()
        console.log(result)
    }
    catch(e){
        console.log(e.message)
    }
}
fetchdata()