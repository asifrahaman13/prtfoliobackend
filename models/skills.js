const mongoose = require('mongoose');

const SkillsSchema=new mongoose.Schema({
    skill:{
        type:String
    },
    proficiency:{
        type:String
    }
})

const skills=mongoose.model('Skills',SkillsSchema)
module.exports =skills