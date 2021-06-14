var exp = require('express')
var app = exp()

app.get('/', function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'})
	res.write('Hello world!')
	res.end()
	// or res.send("Hello world!")
})
app.listen(3333, ()=>{
	console.log('Listing port 3333')
})
