const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    role : {
        type : String,
        enum : ["viewer" , "analyst" , "admin"],
        default : "viewer"
    },
    active : {
        type : Boolean,
        default : true
    }
});

module.exports = mongoose.model("User" , userSchema);