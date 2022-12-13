const mongoose=require('mongoose');

const StudentSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    }
})

const Student=new mongoose.model("studentcollection",StudentSchema);

module.exports = Student
