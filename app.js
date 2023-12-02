const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.render('home');
});

app.get('/about-us', function (req, res) {
	res.render('about-us');
});

app.get('/gallery', function (req, res) {
	res.render('gallery');
});

app.get('/portfolio-details', function (req, res) {
	res.render('portfolio-details');
});

app.get('/portfolio', function (req, res) {
	res.render('portfolio');
});

app.get('/team', function (req, res) {
	res.render('teams');
});

app.get('/venture', function (req, res) {
	res.render('venture');
});

app.get('/contact-us', function (req, res) {
	res.render('contact-us');
});

app.get('/comming-soon', function (req, res) {
	res.render('comming-soon');
});

app.listen(5000, function () {
	console.log('Server started on port http://localhost:5000');
});
