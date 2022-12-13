const mongoose = require('mongoose')

const HackathonSchema=new mongoose.Schema({
    title:{
        type:String
    },
    name:{
        type:String
    },
    image:{
        type:String
    }
})

const Hackathon=mongoose.model('hackathon', HackathonSchema)
module.exports= Hackathon