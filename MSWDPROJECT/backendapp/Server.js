const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

// mongoDb compass connection
// const dburl = "mongodb://localhost:27017/demoproject14"
const dburl=process.env.mongdburl
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)
});


//mongoDb atlas connection
// const dburl = "mongodb+srv://admin:admin@cluster0.04eqecv.mongodb.net/demoproject14?retryWrites=true&w=majority"
// mongoose.connect(dburl).then(() => {
//     console.log("Connected to DB Successfully")
// }).catch((err) => {
//     console.log(err.message)
// });


const app = express() 
app.use(cors())
app.use(express.json())  // to parse JSON data

const adminrouter = require("./routes/adminroutes")
const jobseekerrouter = require("./routes/jobseekerroutes")
const recruiterrouter = require("./routes/recruiterroutes")

app.use("",adminrouter) // to include all admin routes
app.use("",jobseekerrouter) // to include all job seeker routes
app.use("",recruiterrouter) // to include all recruiter routes

const port=process.env.PORT || 2014
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})