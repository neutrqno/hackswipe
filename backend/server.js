const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

let users = []

app.get("/users", (req,res)=>{
    res.json(users)
})

app.post("/users", (req,res)=>{
    const user = req.body
    users.push(user)
    res.json({message:"User added", user})
})

app.listen(5000, ()=>{
    console.log("Backend running on port 5000")
})