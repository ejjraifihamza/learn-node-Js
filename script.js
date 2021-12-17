/* 
!What is a Module in Node.js?
*Consider modules to be the same as JavaScript libraries.
*A set of functions you want to include in your application.
?Node.js has a set of built-in modules which you can use without any further installation, you can find them in this link https://www.w3schools.com/nodejs/ref_modules.asp 
!Include Modules:
To include a module, use the require() function with the name of the module:
let http = require('http') Now your application has access to the HTTP module, and is able to create a server:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

!Create Your Own Modules
You can create your own modules, and easily include them in your applications.
The following example creates a module that returns a date and time object: './myfirstmodule.js'
*/
// !Include Your Own Module
// *Use the module "myfirstmodule" in a Node.js file:
let http = require("http");
let dt = require("./myfirstmodule");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(`the date and time are currently ${dt.myDateTime()}`);
  })
  .listen(8080);
