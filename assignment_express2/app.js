const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const usersRouter = require('./routes/users');
const mainRouter = require('./routes/main');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRouter);
app.use(usersRouter);


server.listen(8080);