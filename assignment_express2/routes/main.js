const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path')

router.get('/',(req, res, next) => {
    console.log(__dirname)
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
    //res.send('<h1>Test<h1>')
});


module.exports = router;