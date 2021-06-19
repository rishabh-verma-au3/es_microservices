var express= require('express')

var app=express();


app.get("/",(req,res)=>{
     res.send("Hi, I am form Buyer")
})


app.get("/getBuyer",(req,res)=>{
     res.send({
         "b1":"hi"
     })
})

app.post("/creatBuyer",(req,res)=>{

    res.status(201).send({
        "message":"created"
    })
})

app.listen(5000,()=>{
     console.log("Running on 5000");
})