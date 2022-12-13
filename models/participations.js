const mongoose=require('mongoose');

const ParticipationSchema=new mongoose.Schema({
    participation:{
        type:String
    },
    name:{
        type:String
    }
})

const participation=mongoose.model('participation',ParticipationSchema)
module.exports=participation