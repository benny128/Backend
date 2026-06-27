const http = require('http');
const {request}= require('./handler');
const server = http.createServer(request);

const PORT =3000;
server.listen( PORT,() => {
    console.log(`This is the server address http://localhost/:${PORT}`);
})