var express= require('express')

var app=express();



app.get("/",(req,res)=>{
    res.send("Hi, I am form Admin")
})

app.get("/getAdmin",(req,res)=>{
    res.send({
        "b1":"hi"
    })
})

app.post("/creatAdmin",(req,res)=>{

    res.status(201).send({
        "message":"created"
    })
})


app.listen(4000,()=>{
     console.log("Running on 4000");
})