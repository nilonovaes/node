function roldanasDAO(connection) {
    this._connection = connection;
};

roldanasDAO.prototype.listaRoldanas = function (callback) {
    this._connection.query('SELECT * FROM roldonas', callback); //Callback retorna a função
};

roldanasDAO.prototype.insertRoldana = function (roldana, callback) {
    this._connection.query('INSERT INTO roldonas SET ?', roldana, callback);
};

module.exports = function () {
    return roldanasDAO;
}