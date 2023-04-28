const express = require("express");
const mongoose=require("mongoose")
const cors = require("cors")
const Userdetails=require("./model")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({ origin: "*" }))


mongoose.connect("mongodb+srv://mounika:vV07o6HOA9WkVB00@cluster0.4qioyol.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("DBconnected"))

app.post("/adduser", async(req, res) => {
    const { username, email } = req.body
    try {
        const newUser = new Userdetails({ username, email })
        newUser.save()
        return res.json(await Userdetails.find)
    } catch (error) {
        console.log(error.message)
    }
    
    
})

app.listen(3003, (req, res) => {
    console.log("server running")
})
