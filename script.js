/*
!The Built-in HTTP Module
*Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
*To include the HTTP module, use the require() method:
? let http = require('http')
*Node.js as a Web Server
The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
Use the createServer() methode to create an HTTP server:
*Example:
let http = require('http')
*create a server object
http.createServer((req, res) => {
  res.write('Hello World!') // write a response to the client 
  res.end() // end the response
}).listen(8080) // the server object listen on port 8080
? the function passed into http.createServer() method, will be execute when someone tries to access the computer on port 8080
*add the http header
if the response from the http server supposed to be displayed as HTML, you should include an HTTP header with correct content type:
*Example:
let http = require('http')
http.createServer((req, res) => {
  res.writeHead(200, {'Content-type':'text/html'}) // Header
  res.write('Hello World!')
  res.end()
}).listen(8080)
?the first argument of res.writeHead() method is status code 200 means that all is ok, the second argument is an object containing the response headers.
*/
// ! Read the Query String
// ?the function passed into http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).
// ?this object has a property called 'url' which holds the part of the url that comes after the domain name:
// ! see req.url:
let http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(req.url);
    res.end();
  })
  .listen(8000);

// ! Split the Query String
// *There are built-in modules to easily split the query string into readable parts, such as the URL module.
// Example: split the query string into readable parts:
let url = require("url");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    let q = url.parse(req.url, true).query;
    let txt = `${q.year} ${q.month}`;
    res.write(txt);
    res.end();
  })
  .listen(8080);
