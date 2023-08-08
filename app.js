var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors())
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;
app.listen(port);