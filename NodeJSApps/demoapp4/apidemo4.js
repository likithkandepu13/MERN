//fetch api with then catch 

const apiurl="https://jsonplaceholder.typicode.com/users"
fetch(apiurl).then((response) => {
    return response.json()
}).then((result) => {
  //  console.log(result)
  const users=result
  console.log(users)
}).catch((err) => {
    console.log(err.message)
});