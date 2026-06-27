const http=require('http');

const server =http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
if (req.url==='/'){
 res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>HOME</title></head>');
    res.write('<a href="http://localhost:3000/home">HOME</a>');
    res.write('<br>')
    res.write('<br>')
    res.write('<a href="http://localhost:3000/men">MEN</a>');
    res.write('<br>')
    res.write('<br>')
    res.write('<a href="http://localhost:3000/women">WOMEN</a>');
    res.write('<br>')
    res.write('<br>')
    res.write('<a href="http://localhost:3000/kids">KIDS</a>');
    res.write('<br>') 
    res.write('<br>') 
    res.write('<a href="http://localhost:3000/cart">CART</a>');
    res.write('</body>');
    res.write('</html>');
   return res.end();
}
else if (req.url==='/home'){
 res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>HOME</title></head>');
    res.write('<h1>WELCONE TO HOME</h1>');
    res.write('</body>');
    res.write('</html>');
}
else if (req.url==='/men'){
 res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Men</title></head>');
    res.write('<h1>WELCONE TO MEN SECTION</h1>');
    res.write('</body>');
    res.write('</html>');
}
else if (req.url==='/women'){
 res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Women</title></head>');
    res.write('<h1>WELCONE TO WOMEN SECTION</h1>');
    res.write('</body>');
    res.write('</html>');
}
else if (req.url==='/kids'){
 res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Kids</title></head>');
    res.write('<h1>WELCONE TO Kids section</h1>');
    res.write('</body>');
    res.write('</html>');
}
else if (req.url==='/cart'){
 res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Cart</title></head>');
    res.write('<h1>WELCONE TO Cart</h1>');
    res.write('</body>');
    res.write('</html>');
}

});

const port=3000;
server.listen(port,()=>{
    console.log(`erver running on address http://localhost:${port}`);
});
