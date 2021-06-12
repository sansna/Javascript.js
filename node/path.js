var http = require('http')
var url = require('url')

http.createServer(function(req, res) {
	var q = url.parse(req.url, true).query
	console.log(q)
	var txt = q.year + " "+ q.month
	res.end(txt)
	console.log(txt,q.day)
}).listen(8080);
