// const dotenv = require('dotenv');
// dotenv.config();

// const con = require('./conexao');

// var sql = 'select * from aluno';

// con.query(sql, function (err, result, fields){
//     if (err) throw err;
//     console.log('SQL Executado');
//     console.log(result);
// });

const port = 3000;
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const dotenv = require('dotenv');
dotenv.config();

app.get('/exibir_alunos', function (request, res){
    const con = require('./conexao');
    var sql = 'select * from aluno';
    con.query(sql, function (err, result, fields){
        if (err) throw err;
        console.log('SQL Executado!');
        console.log(result);

        res.render('dados', { 'lista_alunos' : result});
    });
});

app.listen(port);