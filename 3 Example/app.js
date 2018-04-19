var express = require('./config/express');
var app = require('./config/express')();

var roldanasRoutes = require('./app/routes/roldanas')(app);

// process.env.AAA
app.listen(3000, function () {
    console.log('started');
})