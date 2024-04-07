const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<p>GUSTAVO</p>');
    res.write('<p>BRENDON</p>');
    res.write('<p>GOMES</p>');
    res.write('<p>PIMENTA</p>');
    res.write('</body>');
    res.end('</html>');
});

server.listen(port, hostname, () => {
    console.log(`Server runing at http://${hostname}:${port}/`)
});
