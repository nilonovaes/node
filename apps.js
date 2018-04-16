var http = require('http');

var server = http.createServer(function (req, res) {

    if (req.url === "/editar") {
        res.end('<html><body><h1>ALOOOO 2</h1></body></html>');
    } else {
        res.end('<html><body><h1>ALOOOO</h1></body></html>');
    }



});

server.listen(3000);


console.log('Servidor no ar');

// aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
// ssssssssssssssss