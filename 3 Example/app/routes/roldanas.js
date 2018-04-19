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

        // req.checkBody("NOME_FANTASIA", "Nome é obrigatório.").isEmpty();
        // req.checkBody("NOME_FANTASIA", "Data no formato inválido.").matches("**/**/****")
        // req.checkBody("COR", "Cor deve ser branca.").optional().matches("BRANCA")
        // req.checkBody("ALTURA", "Cor deve ser branca.").matches("*.**")
        // req.checkBody("PRECO", "Cor deve ser branca.").matches("***.**")
        // req.checkBody("PESO", "Cor deve ser branca.").matches("**.**")

        roldanasDAO.insertRoldana(roldana, function (error, result) {
            if (error) throw error;
            res.redirect('/catalogo');
        });
        // connection.end();
    });

    app.post('/catalogo', function (req, res) {

        // res.send('Got a DELETE request at /user')

        var roldana = req.body;

        var connection = app.infra.connectionFactory;;
        var roldanasDAO = new app.infra.roldanasDAO(connection);

        roldanasDAO.deleteRoldana(roldana.NOME_FANTASIA, function (error, result) {
            if (error) throw error;
            console.log('deleted');
            res.send('Got a DELETE request at /user')
            // res.redirect('/catalogo');
        });

    });

}