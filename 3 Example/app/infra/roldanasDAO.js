function roldanasDAO(connection) {
    this._connection = connection;
};

roldanasDAO.prototype.listaRoldanas = function (callback) {
    this._connection.query('SELECT * FROM roldonas', callback); //Callback retorna a função
};

roldanasDAO.prototype.insertRoldana = function (roldana, callback) {
    this._connection.query('INSERT INTO roldonas SET ?', roldana, callback);
};

roldanasDAO.prototype.deleteRoldana = function (NOME_FANTASIA, callback) {
    this._connection.query('DELETE FROM nome_tabela WHERE NOME_FANTASIA = ?', NOME_FANTASIA, callback);
};

module.exports = function () {
    return roldanasDAO;
}