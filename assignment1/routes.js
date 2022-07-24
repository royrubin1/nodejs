const fs = require('fs');
const requestHandler = (req, res) => {
    const url = req.url;
    if (url == "/") {
        res.write('<html><h1>Hello</h1></html>');
        return res.end();
    }else if (url == "/friends") {
        res.write('<html><h1>Friends</h1></html>');
        return res.end();
    }
}
module.exports = requestHandler;