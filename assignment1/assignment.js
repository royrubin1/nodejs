const http = require('http');
//const routes = require('./routes')

const server = http.createServer((req, res) => {
    console.log('Request done');
    const url = req.url;
    const method = req.method
    //if (method = 'POST') {
        
    if (url == "/") {
        res.write('<html><form action="/create-user" method="POST" ><input type="text" name="username"></form><button type="submit" form="username">Send</button></html>');
        return res.end();
    }else if (url == "/users") {
        res.write('<ul><li>User1: David</li><li> User2: Adam</li></ul>');
        return res.end();
    }
    if (url === '/create-user') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end');
    }
});

server.listen(3000);