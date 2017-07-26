var express = require('express');
var app = express();
var https = require('https');
//var request = require('request');
var port = process.env.PORT || 8080;

var server = app.listen(port, function () {
	console.log("running on port: %s", port);

})

app.get('/', function (req, res) {
	res.send('howto: </br>/commits/:user - returns array with number of commits everyday</br>/total/:user - returns total number of commits this year');
})

app.get('/total/:user', function (req, res) {
	var options = {
		host: 'github.com',
		port: 443,
		path: '/' + req.params.user,
		method: 'GET',
		headers: {
			accept: 'text/html'
		}
	};
	https.request(options, function(cres){
		console.log('STATUS: ' + res.statusCode);
		// console.log('HEADERS: ' + JSON.stringify(res.headers));
		cres.setEncoding('utf8');
		var body = '';

		cres.on('data', function (chunk) {
		//console.log('BODY: ' + chunk);
			body += chunk;
		});

		cres.on('end', function () {
	  		var counter = 0;
			// get calendar wihtout svg tag
		  	body = body.slice(body.indexOf('js-calendar-graph-svg')+23); 
		  	body = body.slice(0, body.indexOf('</svg>'));

		  	body.split("\n").slice(2).map(c => c.trim()).forEach(c => {
		  		let fill = c.match(/data-count="([0-9]+)"/);
		  		if(fill){
		  			counter += parseInt(fill[1]);
		  		}
		  	});
		  	res.send(JSON.stringify(counter));
		});
		console.log('test');

	}).end();
})

app.get('/commits/:user', function (req, res) {
	var options = {
		host: 'github.com',
		port: 443,
		path: '/' + req.params.user,
		method: 'GET',
		headers: {
			accept: 'text/html'
		}
	};
	https.request(options, function(cres){
		console.log('STATUS: ' + res.statusCode);
		// console.log('HEADERS: ' + JSON.stringify(res.headers));
		cres.setEncoding('utf8');
		var body = '';

		cres.on('data', function (chunk) {
		//console.log('BODY: ' + chunk);
			body += chunk;
		});

		cres.on('end', function () {
			var count = [];
	  		var counter = 0;
			// get calendar wihtout svg tag
		  	body = body.slice(body.indexOf('js-calendar-graph-svg')+23); 
		  	body = body.slice(0, body.indexOf('</svg>'));

		  	body.split("\n").slice(2).map(c => c.trim()).forEach(c => {
		  		let fill = c.match(/data-count="([0-9]+)"/);
		  		if(fill){
		  			count.push(parseInt(fill[1]));
		  			counter++;
		  		}
		  	});
		  	console.log(counter);
		  	res.send(JSON.stringify(count));
		});
		console.log('test');

	}).end();
})
