// modify package.json's mongodb version to meet server mgodb version.
var mgo = require('mongodb')

var mgc = mgo.MongoClient
var url = "mongodb://127.0.0.1:27017/local"

mgc.connect(url, function(err, db) {
	if (err) throw err
	console.log('connected!')
	db.collection('startup_log').findOne({}, function(err, res) {
		if (err) throw err
		console.log("%j\n",res)
	})

	// mgo append options usage
	//db.collection('startup_log').find().limit(1).toArray(function(err, res) {
	//	if (err) throw err
	//	console.log(res)
	//})
	//db.close()
})
console.log("out")
