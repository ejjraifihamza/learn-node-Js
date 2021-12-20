/*
!Node.js File Server
Now we know how to parse the query string, and in the file server chapter we learned how to make Node.js behave as a file server. 
Let us combine the two, and serve the file requested by the client.
*/
// ?Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:
let http = require("http");
let fs = require("fs");
let url = require("url");
http
  .createServer((req, res) => {
    let q = url.parse(req.url, true);
    let filename = `.${q.pathname}`;
    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
