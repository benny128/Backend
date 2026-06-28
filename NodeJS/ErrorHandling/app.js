const http = require('http');
const {requestHandler}=require('./syntax');
const server = http.createServer((req, res)=>{
    console.log(req.url,req.method);
    console.log(requestHandler);
});

const PORT =3001;
server.listen( PORT,() => {
    console.log(`This is the server address http://localhost/:${PORT}`);
});