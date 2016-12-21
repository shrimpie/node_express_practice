// node uses require to load modules.
var http = require("http");

// the primitive way to create server.
var myServer = http.createServer(function(req, res) {

	res.writeHead(200, {"Content-Type" : "text/html"});

	res.write("<h1>Roux Meetups</h1>");

	res.end();
});

myServer.listen(3000);
console.log("Server listening at localhost on port 3000");