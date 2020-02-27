const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('./index.html')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('website', 'text/html');
    res.end(index);
});

server.listen(port,hostname, function(){
    console.log("Server running at http://" + hostname + ':' + port)
})