var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var app = express();
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();
var port = process.env.PORT;
var ip = process.env.IP;
 console.log('Listening on port: '+ port);
  app.use(express.static(path.join(__dirname + "/client")));
  app.use(bodyParser.json());
  app.set('view engine','html');
  app.post('/submit',function(req,res){
    transporter.sendMail({
     from:req.body.email,
     to: 'ajinkyadeshmukh9@gmail.com',
     subject:'message from portfolio',
     text:req.body.message
    });
    console.log("Sent");
    res.send(200);
  });
  app.listen(port);
