var http = require('http');

var config = {
    hostname: 'localhost',
    port: 3000,
    path: '/cadastro',
    method: 'POST',
    headers:{
        'Accept': 'Application/json',
        'Content-type': 'Application/json' 
    }
};

const postData = {
    NOME_FANTASIA: 'Dagminha',
    DATA_FABRICACAO: '01/01/1999',
    COR: 'Branca',
    ALTURA: '1.69',
    PRECO: '1.00',
    PESO: '1.00'
};