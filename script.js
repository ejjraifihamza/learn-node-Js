/*
!What is NPM?
*NPM is a package manager for Node.js packages, or modules if you like.
?The NPM program is installed on your computer when you install Node.js
What is a Package?
A package in Node.js contains all the files you need for a module.

Modules are JavaScript libraries you can include in your project.
!Download a Package
Downloading a package is very easy.

Open the command line interface and tell NPM to download the package you want.

I want to download a package called "upper-case":
npm install upper-case
Now you have downloaded and installed your first package!
NPM creates a folder named "node_modules", where the package will be placed. All packages you install in the future will be placed in this folder.
!Using a Package
Once the package is installed, it is ready to use.

Include the "upper-case" package the same way you include any other module:
let uc = require('upper-case')
Create a Node.js file that will convert the output "Hello World!" into upper-case letters:
*/
// ?Example
let http = require("http");
let uc = require("upper-case");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(uc.upperCase("Hello World!"));
    res.end();
  })
  .listen(8080);
