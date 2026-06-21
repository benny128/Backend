// ---------------------------------------GETTING START WITH EXPRESS---------------------------------------

const express=require("express");
const app=express();

const port=3001;

app.listen(port,()=>{
    console.log(`App is listing port ${port}`);
})


// ---------------------------------------HANDLING REQUEST---------------------------------------

const express=require("express");
const app=express();

const port=3001;

app.listen(port,()=>{
    console.log(`App is listing port ${port}`);
})

app.use((req,res)=>{
    console.log(`app id using address ${port}`)
})

// --------------------------------------- SENDING A RESPONSE---------------------------------------

const express=require("express");
const app=express();

const port=3001;

app.listen(port,()=>{
    console.log(`App is listing port ${port}`);
})

app.use((req,res)=>{
   // console.log(req);
    console.log(`app id using address ${port}`);
    res.send("this is a basic response");
})