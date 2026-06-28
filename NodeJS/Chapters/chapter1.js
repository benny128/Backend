console.log("Hi this is a welcomeing page");

const fs =require('fs');
fs.writeFile('Doc.txt',"Hi this the new text file to do the some work",(err)=>{
    if (err){
        console.log("there occupide an error");
    }
    else{
        console.log ("this console server is working and the work is done")
    }

})