var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.htm');
});

app.get('/search', function (req, res) {
  res.send('vegaCurry!');
});

app.get('/articles', function (req, res) {
    res.json([
        { name: "Dusch DAS", price: "EUR 0,50" },
        { name: "Alpro Soya Pudding", price: "EUR 1,99" },
        { name: "Alpro Soya Yoghurt", price: "EUR 1,69" },
        { name: "Julian", price: "unbezahlbar" }
    ]);
});

app.listen(3000);
