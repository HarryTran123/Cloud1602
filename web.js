//Imports
const express = require('express');
const web = express();
const port = process.env.PORT || 3000;
//Static Files
web.use(express.static('public'));
web.use('/css', express.static(__dirname + 'public/css'))
web.use('/js', express.static(__dirname + 'public/js'))
web.use('/scss', express.static(__dirname + 'public/scss'))
web.use('/img', express.static(__dirname + 'public/img'))
web.use('/Aroma Shop-doc', express.static(__dirname + 'public/Aroma Shop-doc'))
web.use('/vendors', express.static(__dirname + 'public/'))
//Running HTML
web.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
web.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
web.get('/cart', (req, res) => {
    res.sendFile(__dirname + '/views/cart.html');
});
web.get('/category', (req, res) => {
    res.sendFile(__dirname + '/views/category.html');
});
web.get('/checkout', (req, res) => {
    res.sendFile(__dirname + '/views/checkout.html');
});
// Listen on port 300
web.listen(port, () => console.info(`Listening on port ${port}`));
