const http=require('http');

const server=http.createServer((req, res)=>{
    console.log(req);
})

const PORT=3000;
server.listen(PORT,()=>{
    console.log(`This is the address of server its working in server http://localhost/:${PORT}`);
});