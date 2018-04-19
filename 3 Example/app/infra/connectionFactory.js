var mysql = require('mysql');

module.exports = function () {

    return connection = mysql.createConnection({
        host: 'roldana.chtd4y9zgelt.us-east-1.rds.amazonaws.com',
        user: 'root',
        password: 'Pa$$4eit',
        database: 'roldanaDB'
    })
}
