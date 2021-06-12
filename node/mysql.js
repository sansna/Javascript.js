var my = require('mysql')

var con = my.createConnection({
							  host: '172.17.0.2',
							  port: 3306,
							  user: 'root',
							  password: '',
							  database: 'eastmoney'
})
//console.log(con)

// try connect, callback is called asynchronously
// so the following out is printed first
con.connect(function(err){
	if (err) throw err
	console.log('Connected!')
	sql = "select * from fund_fundmanager limit 1;"
	con.query(sql, function(err, res, fields) {
		if (err) throw err
		// both log object as json format
		//console.log('Result:', res)
		console.log('Result: %j', res)
	})
	con.end()
})
console.log('out')
