var express = require('express');
var https = require("https");
var fs = require("fs");
var cors = require('cors');

var app = express();

app.use(cors())

https
  .createServer(
		// Provide the private and public key to the server by reading each
		// file's content with the readFileSync() method.
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(80, () => {
    console.log("serever is runing at port 80");
  });

app.use(express.static(__dirname + '/public'));