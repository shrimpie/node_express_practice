var express = require('express');

var app = express();

// You can load data like this.
var dataFile = require('./data/data.json');

// You can specify port too.
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {

	var info = '';
	dataFile.speakers.forEach(function(item) {
		info += `
		<li>
		  <h2>${item.name}</h2>
		  <p>${item.summary}</p>
		</li>
		`;
	});

	res.send(`
		<h1>Roux Academy Meetups</h1>
		${info}
	`);

});

var server = app.listen(app.get('port'), function() {
	console.log("Listening on port " + app.get('port'));
});


// // node uses require to load modules.
// var http = require("http");

// // the primitive way to create server.
// var myServer = http.createServer(function(req, res) {

// 	res.writeHead(200, {"Content-Type" : "text/html"});

// 	res.write("<h1>Roux Meetups</h1>");

// 	res.end();
// });

// myServer.listen(3000);
// console.log("Server listening at localhost on port 3000");


