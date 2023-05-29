var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors())
app.use(express.static(__dirname + '/public')); 
app.use(function (req, res, next) {
  res.set('Bypass-Tunnel-Reminder', 'text/plain');
  req.headers['content-type'] = 'br';
});

const port = process.env.PORT || 3000;
app.listen(port);
