const express = require('express');
const router = express.Router();



router.get('/add-product',(req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST" ><input type="text" name="title" ></input><button type="submit">Add Product</button></form>');
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});

/*router.use('/',(req, res, next) => {
    res.send('<h1>Main Page</h1>');
});*/

module.exports = router