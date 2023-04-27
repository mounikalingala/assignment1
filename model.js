const mongoose = require("mongoose")

let Userdetails = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique:true,
    }
})

module.exports=mongoose.model("Userdetails",Userdetails)