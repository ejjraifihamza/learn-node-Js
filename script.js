/*
!For start - a bit of theory... but not really boring one. 😃 Node.js itself is a runtime environment for JavaScript. It's open-source and cross-platform. Its development started in 2009, with the first official release in 2011. The idea behind it was simple - to allow JS to run in different environments than the browser. It's nothing that hasn't been done before, just not with that big success. Today its development is overseen by the Node.js foundation with additional help from a big number of contributors. It's used by many big names in the industry and doesn't seem to stop evolving and improving with time.
*Node.js uses asynchronous programming!
?Diffrent between nodeJs and PHP
!Here is how PHP handles a file request:
1. Sends the task to the computer's file system.
2. Waits while the file system opens and reads the file.
3. Returns the content to the client.
4. Ready to handle the next request.
!Here is how Node.js handles a file request:
1. Sends the task to the computer's file system.
2. Ready to handle the next request.
3. When the file system has opened and read the file, the server returns the content to the client.
*Node.js eliminates the waiting, and simply continues with the next request.
*Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.
!What Can Node.js Do?
Node.js can generate dynamic page content
Node.js can create, open, read, write, delete, and close files on the server
Node.js can collect form data
Node.js can add, delete, modify data in your database
!What is a Node.js File?
Node.js files contain tasks that will be executed on certain events
A typical event is someone trying to access a port on the server
Node.js files must be initiated on the server before having any effect
Node.js files have extension ".js"
*/

// ! Simple Example

let http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "test/html" });
    res.end("Hello World!");
  })
  .listen(1000);

// !The code tells the computer to write "Hello World!" if anyone (e.g. a web browser) tries to access your computer on port 1000.
// *Command Line Interface
// ?Node.js files must be initiated in the "Command Line Interface" program of your computer, by typing node <name of file> in this case is node script.js
// *Now, your computer works as a server! If anyone tries to access your computer on port 1000, they will get a "Hello World!" message in return!
// !a file will download on your computer his content is Hello World!
