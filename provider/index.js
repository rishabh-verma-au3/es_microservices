var express= require('express')

var app=express();


app.get("/",(req,res)=>{
    res.send("Hi, I am form Provider")
})

app.get("/getProvider",(req,res)=>{
    res.send({
        "b1":"hi"
    })
})


app.post("/creatProvider",(req,res)=>{

    res.status(201).send({
        "message":"created"
    })
})


app.listen(3000,()=>{
     console.log("Running on 6000");
})