module.exports = function (app) {

    app.get('/catalogo', function (req, res) {

        var connection = app.infra.connectionFactory;;
        var roldanasDAO = new app.infra.roldanasDAO(connection);

        roldanasDAO.listaRoldanas(function (error, results) { //Retorno do callback
            if (error) throw error;
            res.render('roldanas/catalogo', {
                resultsHTML: results
            });
        });

        connection.end();
    });

    app.get('/cadastro', function (req, res) {
        res.render('roldanas/cadastro')
    });

    app.post('/cadastro', function (req, res) {

        var roldana = req.body;

        var connection = app.infra.connectionFactory;;
        var roldanasDAO = new app.infra.roldanasDAO(connection);

        roldanasDAO.insertRoldana(roldana, function (error, result) {
            if (error) throw error;
            res.redirect('/catalogo');
        });
        // connection.end();
    });
}