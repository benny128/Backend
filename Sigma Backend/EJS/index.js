const express=require("express");
const app=express();

const port =3002;
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.send("this is home");
})

app.listen(port,()=>{
    console.log(`Tere is working port ${port}`);
});