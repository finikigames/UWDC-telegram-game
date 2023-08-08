var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors())
app.use(express.static(__dirname + '/public'));
//app.use("/dev", express.static(__dirname + '/develop'));

const port = process.env.PORT || 3000;
app.listen(port);