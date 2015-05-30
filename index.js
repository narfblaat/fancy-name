var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.htm');
});

app.get('/search', function (req, res) {
  res.send('vegaCurry!');
});


app.listen(3000);
