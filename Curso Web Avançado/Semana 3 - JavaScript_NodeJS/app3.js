const port = 3000;
const express = require('express');
const app = express();

app.set("view engine", 'ejs');

// app.get('/', function(request, res){
//     res.sendFile(__dirname +"/views/dois.html");
// });

app.get('/aa', function(request, res){
    res.render('exemplo', {'nome': 'gustavo', 'clientes': ['suzane', 'camilla']});
});

app.listen(port);