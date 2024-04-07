const port = 3000;
const express = require('express');
const app = express();

app.get('/', function(request, res){
    res.sendFile(__dirname +"/views/um.html");
});

app.get('/cadastro', function(request, res){
    res.sendFile(__dirname +"/views/cadastro.html");
});

app.listen(port);