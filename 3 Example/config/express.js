var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

consign({
        cwd: 'app',
        extensions: ['.js', '.json', '.node'],
        verbose: false
    })
    .include('infra')
    .then('routes')
    .into(app);

module.exports = function () {
    return app;
}