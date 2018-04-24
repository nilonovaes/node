var chai = require('chai');

var expectChai = require('chai').expect;

var superst = require('supertest');

var api = superst("http://localhost:3000");

describe("#Testando Catalogo", function () {

    // before(function () {
    //         api.get('/catalogo')
    //             .end(function (err, req) {
    //                 // console.log(err);
    //             })
    //     }),

    it("É esperado retorno 200 ao acessar a página de catalogo", function (done) {

        api.get('/catalogo')
            .set("Accept", "application/json")
            .end(function (err, res) {
                expectChai(res).not.to.be.empty;
                expectChai(res.statusCode).equal(200);
                done();
            })
    });

    describe("#Testando Post", function () {

        it("É esperado o retorno 302", function (done) {
            api.post('/cadastro')
                .set("Content-Type", "application/json")
                .set("Accept", "application/json")
                .send({
                    "nomeFantasia": "Qualquer valor",
                    "teste": "teste"
                })
                .end(function (err, res) {
                    expectChai(res.statusCode).equal(302);
                    done();
                })
        })

    })

});