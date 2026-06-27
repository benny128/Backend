const {sumHandler} = require('./sum');

const request = (req, res) => 
{
    console.log(req.url, req.method);
if (req.url==='/')
    {
     res.setHeader('Content-Type','text/html');
     res.write(`<html>
        <head><title>practice page </title></head>
        <body>
        <h1>Welcome to Calculator</h1>
        <a href='/calculator'>Go to Calculator</a>
        </body>
        </html>`)
        return res.end();
    }
else if (req.url.toLowerCase()==='/calculator')
    {
     res.setHeader('Content-Type','text/html');
     res.write(`
        <html>
          <head><title>practice page </title></head>
             <body>
                 <h1>Calculator</h1>
                 <form action=/calculator-result method="POST">
                     <input type="number" placeholder="Enter first num" name="first"/>
                     <input type="number" placeholder="Enter second num" name="second"/>
                     <input type="submit" value="Sum"/>
                 </form>
              </body>
        </html>`)
        return res.end();
    }
else if(req.url.toLowerCase()==="/calculator-result" && req.method ==='POST'){
        return sumHandler(req, res);
        }
     res.setHeader('Content-Type','text/html');
     res.write(`<html>
        <head><title> practice page </title></head>
             <body>
                 <h1> 404! this page is not exist</h1>
                 <a href=/>Go to HOME</a>
             </body>
        </html>`)
        return res.end();
}

exports.request= request;
