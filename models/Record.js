const mongoose = require("mongoose")

const recordSchema = new mongoose.Schema({
    amount : {
        type : Number,
        required : [true , "Amount is required"]
    },
    
    type : {
        type : String,
        enum : ["income" , "expense"],
        required : [true , "Type is required"]
    },

    category : {
        type : String,
        required : [true, "Category is required"]
    },

    date : {
        type : Date,
        required : [true , "Date is required"]
    },

    notes: {
        type : String,
        default : ""
    }
});

module.exports = mongoose.model("Record" , recordSchema);