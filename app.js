var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors())
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 80;
app.listen(port);