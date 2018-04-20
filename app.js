var express = require('express');
var request = require('request');
var path = require('path');
var bodyParser = require('body-parser');
var twitterclient = require('./twitterclient');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
	twitterclient.queryTwitter(function(events){
		events.statuses.forEach(function (event) { 
			/*console.log('----------------')
			console.log('Username: ' + event.user.name); 
			console.log('Text: ' + event.text);
			console.log('----------------')
			console.log(event.user);*/
		});
	   	res.render('index', {message1: 'Tweets: ', message2: '...der Woche...', tweets: events.statuses});
   })
});

app.post('/submitted', function (req, res) {
	console.log(req.body);
  	res.render('thanks');
});

app.get('/theevent', function (req, res) {
  	res.render('index');
});

app.get('/signin', function (req, res) {
  	res.render('signin');
});

app.get('/thanks', function (req, res) {
  	res.render('thanks');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});