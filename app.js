var express = require('express');
var request = require('request');
var path = require('path');


var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.get('/templated', function (req, res) {
	res.render('index', {message1: "hallowelt", message2: "YAHOOOO"});
});

app.get('/templatedAndFormatted', function (req, res) {
  request('http://localhost:8080/header', function (error, response, body) {
	    res.render('templated', {header: body});
	})
});

app.get('/usersList', function (req, res) {
	request('http://localhost:8080/userList', function (error, response, body) {
	    res.render('foreach_template', {users: JSON.parse(body)});
	})
});

app.get('/header', function (req, res) {
	request('http://localhost:8080/header', function (error, response, body) {
	    res.send(body);
	})
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});