var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors())
app.use(express.static(__dirname + '/public')); 
app.use(function (req, res, next) {
  req.headers['content-type'] = 'br';
});

const port = process.env.PORT || 3001;
app.listen(port);
