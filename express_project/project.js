const http = require('http');
const express = require('express');
const app = express();

app.use('/add-product',(req, res, next) => {
    console.log('in another middleware!');
    res.send(<form action="/product" method="POST" ><input type="text" name="title" ></input><button type="submit">Add Product</button></form>);
});

app.use('/product', (req, res, next) => {
    res.redirect()
});

app.use('/',(req, res, next) => {
    console.log('in another middleware!');
    res.send('<h1>Main Page</h1>');
});


const server = http.createServer(app);
server.listen(3000);
