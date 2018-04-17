var http = require('http');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render("index");
});

app.get('/editar', function (req, res) {
    res.render("editar");
});


app.listen(3000, function () {
    console.log("Server rurning")
});