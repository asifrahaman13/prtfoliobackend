require('dotenv').config();
require('./db/connection')
const bunyan= require("bunyan");
var cors=require('cors')
const Contact=require('./models/contacts')
const Student=require('./models/students')
const Skills=require('./models/skills')
const Participation=require('./models/participations')
const Hackathon=require('./models/hackathons')
const express = require("express");
const app = express();
const compression = require("compression")
app.use(compression());



const PORT=8000;

const port=process.env.PORT || PORT;

app.use(cors());
app.use(express.json());

app.get("/",async(req,res)=>{
   const user= await Student.find();
   res.send(user)
})

app.get("/participations",async(req,res)=>{
    const participation= await Participation.find();
    res.send(participation)
})

app.post("/participations",async(req,res)=>{
    const result=await Participation({participation:req.body.participation,name:req.body.participation})
    await result.save();
    res.send(result)
})


app.post("/contacts",async (req,res)=>{
    const result=await Contact({name:req.body.name,email:req.body.email});
    await result.save();
    res.send(result)
})


app.get("/skills",async (req,res)=>{
    const result=await Skills.find();
    res.send(result)
})


app.get("/hackathon",async (req,res)=>{
    const result=await Hackathon.find();
    res.send(result)
})

app.listen(port,()=>{
    console.log(`Listening on port: ${PORT}`)
})

