const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req, res, next) => {
    res.send('<form action="/product" method="POST" ><input type="text" name="title" ></input><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});

app.use('/',(req, res, next) => {
    res.send('<h1>Main Page</h1>');
});


const server = http.createServer(app);
server.listen(3000);
