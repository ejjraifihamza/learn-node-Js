/*
!The Nodemailer Module
The Nodemailer module makes it easy to send emails from your computer.

The Nodemailer module can be downloaded and installed using npm: npm install nodemailer
After you have downloaded the Nodemailer module, you can include the module in any application:
let nodemailer = require('nodemailer')
*/
/*
!Send an Email
Now you are ready to send emails from your server.

Use the username and password from your selected email provider to send an email. 
This example will show you how to use your Gmail account to send an email:
*/
// *Example:
let nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com",
    pass: "yourpassword",
  },
});

let mailOptions = {
  from: "youremail@gmail.com",
  to: "camenor151@veb27.com",
  subject: "Sending Email using NodeJs",
  text: "That was easy!",
};
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Email send: ${info.response}`);
  }
});

// *To send an email to more than one receiver, add them to the "to" property of the mailOptions object, separated by commas:
/*
let mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
}
*/

// *To send HTML formatted text in your email, use the "html" property instead of the "text" property:
/*
let mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
}
*/
