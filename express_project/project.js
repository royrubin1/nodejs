const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');5
const shopRoutes = require('./routes/shop')
const server = http.createServer(app);
const path = require('path');
const rootDir = require('./util/path')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    //res.status(404).send('<h1>Page not found</h1>')
    res.status(404).sendFile(path.join(rootDir,'views', '404.html'));
});

server.listen(3000);
