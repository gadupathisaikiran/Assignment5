const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    res.writeHead("200",{'Content-Type': 'text/plain'})
    res.end("Welcome to Dominos!")
    
})

app.get("/contact",(req,res)=>{
    res.json({  
        phone: '18602100000', 
        email: 'guestcaredominos@jublfood.com' 
    }
    )
    res.writeHead("200",{'Content-Type': 'text/plain'})
})
app.get("*",(req,res)=>{
    
   res.end("error 404") 
   res.writeHead("404")
})

app.listen(8082,()=>{
    console.log("server is started")
})