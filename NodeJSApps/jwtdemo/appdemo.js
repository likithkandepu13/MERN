const express=require("express") 
const {MongoClient, Collection}=require("mongodb") 
const jwt=require("jsonwebtoken") 
 
 
const app=express() 
 
app.use(express.json())//to parse JSON data 
 
 
const dburl = "mongodb://localhost:27017"; 
const dbname = "jwtdemo14"; 
 
const client = new MongoClient(dburl); 
client.connect().then(() => { 
    console.log("Connected to DB Successfully"); 
}).catch((err) => { 
    console.log(err.message); 
}); 
 
const db=client.db(dbname) 
const collection=db.collection("emp") 
const generateToken = (user) => { 
    return jwt.sign(user, "secret_key", { expiresIn: "1h" }); 
} 
//sign means signature  
//provide any  
const verifytoken = (req, res, next) => { 
    const authHeader = req.headers['authorization']; 
    if (!authHeader)  
    { 
        return res.status(401).send("Access Denied"); 
    } 
    const token = authHeader.split(' ')[1]; // For Removing 'Bearer' prefix 
    jwt.verify(token, "secret_key", (err, decoded) =>  
    { 
        if (err)  
        { 
            return res.status(403).send("Invalid Token"); 
        } 
        req.user = decoded; 
        next(); 
    }); 
} 
 
const authorize = (role) => (req, res, next) => { 
    if (req.user && req.user.role === role) { 
        next(); 
    } else { 
        res.status(403).send("Unauthorized"); 
    } 
}; 
app.post("/login", (req, res) =>  
{ 
    const { username, password } = req.body; 
    if (username === "admin" && password === "admin")  
    { 
        const token = generateToken({ username, role: "admin" }); 
        res.json({ token }); 
    }  
    else if (username === "user" && password === "user")  
    { 
        const token = generateToken({ username, role: "user" }); 
        res.json({ token }); 
    }  
    else  
    { 
        res.status(401).json({ error: "Invalid credentials" }); 
    } 
}); 
 
app.post("/addemp",verifytoken,authorize("admin"),async(req,res)=>{ 
    try 
    { 
        const input=await req.body 
        await collection.insertOne(input) 
        res.status(200).send("Employee Added Successfully") 
 
    } 
    catch(e) 
    { 
        res.status(500).send(e.message) 
    } 
}) 
app.post("/viewemps",verifytoken,authorize("user"),async(req,res)=>{ 
    try{ 
        const employes=await collection.find().toArray() 
        if(employes.length==0){ 
            res.status(200).send("NO DATA FOUND") 
        } 
        else{
            res.status(200).send(employes)
        }
        
 
    } 
    catch(e){ 
        res.status(500).send(e.message) 
    } 
 
}) 
 
app.get("*",(req,res)=>{
    try
    {
        res.status(200).send("Page Not Found")
    }
    catch(e)
    {
        res.status(500).send(e.message)
    }
})
 
const port=2014 
 
 
app.listen(port,()=>{ 
    console.log("server is running at port :"+port) 
})