const http=require('http');
const fs =require('fs');

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


// const http=require('http');

// const server =http.createServer((req,res)=>{
//     console.log(req.url,req.method,req.headers);
// if (req.url==='/'){
//  res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>HOME</title></head>');
//     res.write('<a href="http://localhost:3000/home">HOME</a>');
//     res.write('<br>')
//     res.write('<br>')
//     res.write('<a href="http://localhost:3000/men">MEN</a>');
//     res.write('<br>')
//     res.write('<br>')
//     res.write('<a href="http://localhost:3000/women">WOMEN</a>');
//     res.write('<br>')
//     res.write('<br>')
//     res.write('<a href="http://localhost:3000/kids">KIDS</a>');
//     res.write('<br>') 
//     res.write('<br>') 
//     res.write('<a href="http://localhost:3000/cart">CART</a>');
//     res.write('</body>');
//     res.write('</html>');
//    return res.end();
// }
// else if (req.url==='/home'){
//  res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>HOME</title></head>');
//     res.write('<h1>WELCONE TO HOME</h1>');
//     res.write('</body>');
//     res.write('</html>');
// }
// else if (req.url==='/men'){
//  res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>Men</title></head>');
//     res.write('<h1>WELCONE TO MEN SECTION</h1>');
//     res.write('</body>');
//     res.write('</html>');
// }
// else if (req.url==='/women'){
//  res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>Women</title></head>');
//     res.write('<h1>WELCONE TO WOMEN SECTION</h1>');
//     res.write('</body>');
//     res.write('</html>');
// }
// else if (req.url==='/kids'){
//  res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>Kids</title></head>');
//     res.write('<h1>WELCONE TO Kids section</h1>');
//     res.write('</body>');
//     res.write('</html>');
// }
// else if (req.url==='/cart'){
//  res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>Cart</title></head>');
//     res.write('<h1>WELCONE TO Cart</h1>');
//     res.write('</body>');
//     res.write('</html>');
// }

// });

// const port=3000;
// server.listen(port,()=>{
//     console.log(`erver running on address http://localhost:${port}`);
// });