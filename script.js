/*
!The Node.js file system module allows you to work with the file system on your computer.
*Common use for the File System module:
- Read files
-Create files
-Update files
-Delete files
-Rename files
*/
// ?The fs.readFile() method is used to read files on your computer.
// let http = require("http");
// let fs = require("fs");
// http
//   .createServer((req, res) => {
//     fs.readFile("./demofile1.html", (err, data) => {
//       res.writeHead(200, { "Content-type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(8080);

/*
?Create files
*The File System module has methods for creating new files:
-fs.appendFile()
-fs.open()
-fs.writeFile()
*/
// ?The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
// let fs = require("fs");
// fs.appendFile("mynewfile1.txt", "Hello Content!", (err) => {
//   if (err) throw errlog;
//   console.log("Saved!");
// });

// ?The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
// let fs = require("fs");
// fs.open("mynewfile2.txt", "w", (err, file) => {
//   if (err) throw err;
//   console.log("Saved!");
// });

// ?The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
// let fs = require("fs");
// fs.writeFile("mynewfile3.txt", "Hello Content!", (err) => {
//   if (err) throw err;
//   console.log("Saved!");
// });

/*
?Update files
*The File System module has methods for updating files:
-fs.appendFile()
-fs.writeFile()
*/
// ?The fs.appendFile() method appends the specified content at the end of the specified file:
// let fs = require("fs");
// fs.appendFile("mynewfile1.txt", "This is my text", (err) => {
//   if (err) throw err;
//   console.log("Updated!");
// });

// ?The fs.writeFile() method replaces the specified file and content:
// let fs = require("fs");
// fs.writeFile("mynewfile3.txt", "This is my text", (err) => {
//   if (err) throw err;
//   console.log("Replaced!");
// });

// ?The fs.unlink() method deletes the specified file:
// let fs = require("fs");
// fs.unlink("mynewfile2.txt", (err) => {
//   if (err) throw err;
//   console.log("File Deleted!");
// });

// ?The fs.rename() method renames the specified file:
// let fs = require("fs");
// fs.rename("mynewfile1.txt", "myrenamefile.txt", (err) => {
//   if (err) throw err;
//   console.log("File Renamed!");
// });
