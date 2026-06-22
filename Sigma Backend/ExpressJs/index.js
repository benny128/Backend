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
    res.send({
        name:"Durgesh",
        age:21,
    });
    res.send('<h1>Fruits<ul><li>apple</li><li>banana</li><li>orange</li></ul></h1>');
})

// --------------------------------------- ROUTING ---------------------------------------

const express=require("express");
const app=express();

const port=3001;

app.listen(port,()=>{
    console.log(`App is listing port ${port}`);
})
 app.get("/",(req,res)=>{
    res.send("You connect with root path");
 });
 app.get("/apple",(req,res)=>{
    res.send("You connect with apple path");
 });
 app.get("/orange",(req,res)=>{
    res.send("You connect with orange path");
 });
 app.get("*",(req,res)=>{
    res.send("You connect with home path");
 });

// --------------------------------------- PARAMETERS ---------------------------------------


const express=require("express");
const app=express();

const port=3001;

app.listen(port,()=>{
    console.log(`App is listing port ${port}`);
})
 app.get("/",(req,res)=>{
    res.send("You connect with root path");
});

//-------------------------------------
app.get("/:username:id",(req,res)=>{
    let {username,id}=req.params;
    let htmlstr=`<h1>Welcome to page of @ ${username}</h1>`;
    res.send(htmlstr);
});
//-------------------------------------
app.get("/:search",(req,res)=>{
    console.log(req.query);
    let htmlstr=`<h1>Welcome to search section.</h1>`;
    res.send("no result");
});