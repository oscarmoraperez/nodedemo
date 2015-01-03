/*
var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-type':'text/plain'});
	response.end('hello');	
}).listen(8080,'127.0.0.1');

console.log('WEB SERVER LAUNCHED!!');
*/

var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
	fs.readFile('index.html', function(err, data) {
			response.writeHead(200, {'Content-type':'text/html'});
			response.end(data);	
	});
}).listen(8080,'127.0.0.1');

console.log('WEB SERVER LAUNCHED !!');
