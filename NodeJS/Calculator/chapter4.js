const server =http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
if (req.url==='/'){
 res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Coding area</title></head>');
    res.write('<body><h1> Enter your Details</h1> ');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" placeholder="username" name="username">');
    res.write('<input type="text" placeholder="enter your e-mail" name="Email">');
    res.write('<level for ="male">Male</>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<level for="female">Female</level>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<button id="btn">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
   return res.end();
}
   else if(req.url.toLowerCase()==="/submit-details" && req.method=="POST"){
    fs.writeFileSync('user.txt','dk');
    res.statusCode=302;
    res.setHeader('Location','/');
   return res.end();
   }
});

const port=3000;
server.listen(port,()=>{
    console.log(`erver running on address http://localhost:${port}`);
});
