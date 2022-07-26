const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path')

router.get('/users',(req, res, next) => {
    console.log(__dirname)
    res.sendFile(path.join(rootDir, 'views', 'users.html'));
    //res.send('<h1>Test<h1>')
});


module.exports = router;