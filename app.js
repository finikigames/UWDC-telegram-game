var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public')); 

const port = process.env.PORT || 3001;
app.listen(port);