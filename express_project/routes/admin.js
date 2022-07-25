const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(__dirname, '..','views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});

/*router.use('/',(req, res, next) => {
    res.send('<h1>Main Page</h1>');
});*/

module.exports = router