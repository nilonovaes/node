module.exports = function (app) {

    app.get('/catalogo', function (req, res) {

        var connection = app.infra.connectionFactory;;
        var roldanasDAO = new app.infra.roldanasDAO(connection);

        roldanasDAO.listaRoldanas(function (error, results) { //Retorno do callback
            if (error) throw error;

            res.format({
                html: function () {
                    res.render('roldanas/catalogo', {
                        resultsHTML: results
                    });
                },
                json: function () {
                    res.json(results);
                }
            })
        });

        // connection.end();
    });

    app.get('/cadastro', function (req, res) {
        res.render('roldanas/cadastro')
    });

    app.post('/cadastro', function (req, res) {

        var roldana = req.body;

        var connection = app.infra.connectionFactory;;
        var roldanasDAO = new app.infra.roldanasDAO(connection);

        // req.assert("NOME_FANTASIA", "Nome é obrigatório.").notEmpty();
        // var errors = req.validationErrors();
        // console.log(errors);

        // req.assert("DATA_FABRICACAO", "Data no formato inválido.").matches("**/**/****")
        // var errors = req.validationErrors();
        // console.log(errors);
        // req.checkBody("COR", "Cor deve ser branca.").optional().matches("BRANCA")
        // req.checkBody("ALTURA", "Cor deve ser branca.").matches("*.**")
        // req.checkBody("PRECO", "Cor deve ser branca.").matches("***.**")
        // req.checkBody("PESO", "Cor deve ser branca.").matches("**.**")

        if (!errors) {

            roldanasDAO.insertRoldana(roldana, function (error, result) {
                if (error) throw error;
                res.redirect('/catalogo');
            });
        }
        // connection.end();
    });

    // app.post('/catalogo', function (req, res) {

    //     // res.send('Got a DELETE request at /user')

    //     var roldana = req.body;

    //     var connection = app.infra.connectionFactory;;
    //     var roldanasDAO = new app.infra.roldanasDAO(connection);

    //     roldanasDAO.deleteRoldana(roldana.NOME_FANTASIA, function (error, result) {
    //         if (error) throw error;
    //         console.log('deleted');
    //         res.send('Got a DELETE request at /user')
    //         // res.redirect('/catalogo');
    //     });
    // });

}