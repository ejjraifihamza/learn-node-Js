/*
?Upload files
The Formidable Module
*There is a very good module for working with file uploads, called "Formidable".
-The Formidable module can be downloaded and installed using NPM: npm install formidable
-After you have downloaded the Formidable module, you can include the module in any application: let formidable = require('formidable')
*/

// Now you are ready to make a web page in Node.js that lets the user upload files to your computer:
// !Step 1: Create an Upload Form
// Create a Node.js file that writes an HTML form, with an upload field:
// ?Example (This code will produce an HTML form:)

// let http = require("http");
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-type": "text/html" });
//     res.write(
//       '<form action="fileupload" method="post" enctype="multipart/form-data">'
//     );
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write("</form>");
//     return res.end();
//   })
//   .listen(8080);

// !Step 2: Parse the Uploaded File
// Include the Formidable module to be able to parse the uploaded file once it reaches the server.
// When the file is uploaded and parsed, it gets placed on a temporary folder on your computer.
// ?Example (The file will be uploaded, and placed on a temporary folder:)

// let http = require("http");
// let formidable = require("formidable");

// http
//   .createServer((req, res) => {
//     if (req.url == "/fileuploade") {
//       let form = new formidable.IncomingForm();
//       form.parse(req, (err, fields, fiels) => {
//         res.write("File uploaded");
//         res.end();
//       });
//     } else {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(
//         '<form action="fileupload" method="post" enctype="multipart/form-data">'
//       );
//       res.write('<input type="file" name="filetoupload"><br>');
//       res.write('<input type="submit">');
//       res.write("</form>");
//       return res.end();
//     }
//   })
//   .listen(8080);

/*
!Step 3: Save the File
When a file is successfully uploaded to the server, it is placed on a temporary folder.

The path to this directory can be found in the "files" object, passed as the third argument in the parse() method's callback function.

To move the file to the folder of your choice, use the File System module, and rename the file:
*/

let http = require("http");
let formidable = require("formidable");
let fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url == "/fileupload") {
      let form = new formidable.IncomingForm();
      form.parse(req, (err, fields, files) => {
        let oldPath = files.filetoupload.filepath;
        let newPath = `C:/Users/Youcode/${files.filetoupload.originalFilename}`;
        fs.rename(oldPath, newPath, (err) => {
          if (err) throw err;
          res.write("File uploaded and moved!");
          res.end();
        });
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write("</form>");
      return res.end();
    }
  })
  .listen(8080);
