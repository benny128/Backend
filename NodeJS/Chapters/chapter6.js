const sumHandler =(req, res) => {
    console.log("1.In the sum page",req.url);
    const body=[];
    let result;
    req.on('data',chunk => {
        body.push(chunk);
        console.log("2.Chunk Came")
    });
    req.on('end',()=>{
        console.log("3.End Came")
        const bodyStr=Buffer.concat(body).toString();
        const params=new URLSearchParams(bodyStr);
        const bodyObj=Object.fromEntries(params);
        result=Number(bodyObj.first) + Number(bodyObj.second);
        console.log(result);
    });
    console.log("4. Request handler");
    res.setHeader('Content-Type','text/html');
    res.write(`<html>
        <head><title> practice page </title></head>
            <body>
             <h1>Your sum is ${result}</h1>
            </body>
        </html>`)
     return res.end();
  
}

exports.sumHandler=sumHandler;