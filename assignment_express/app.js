const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
server.listen(8080);
/*
app.use(function (req, res, next) {
    console.log('First function');
    next();
  })
app.use(function (req, res, next) {
    console.log('Second function');
})*/

app.use('/users', function (req, res, next) {
    res.send('<h1>Users page</h1>')
  })

  app.use('/', function (req, res, next) {
    res.send('<h1>Main page</h1>')
  })