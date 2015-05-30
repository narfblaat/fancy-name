var express = require('express');
var app = express();

var pg = require('pg');
var conString = "postgres://Katrin:@localhost/Katrin";

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.htm');
});

app.get('/search', function (req, res) {
  res.send('vegaCurry!');
});

app.get('/articles', function (req, res) {

    pg.connect(conString, function (err, client) {
        if (err) {
            res.json({ error: "da ist was schiefgelaufen" });
            return;
        }
        client.query("SELECT * FROM articles", function (err, result) {
            if (err) {
                res.json({ error: "could not execute query" });
                return;
            }
            res.json(result.rows);
        });
    });

});

app.listen(3000);
