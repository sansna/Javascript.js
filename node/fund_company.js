ax = require('axios')

var page = 1
var url = `https://fund.eastmoney.com/Data/FundDataPortfolio_Interface.aspx?dt=14&mc=returnjson&ft=all&pn=20&pi=${page}&sc=abbname&st=asc`
var pages = 1

var all_infos = {}
var all_data = []

let getPages = (url, identifier) => {
	ax.get(url)
		.then((resp) => {
			let p = eval(resp.data+"\n"+identifier)
			pages = p.pages
		})
		.then(() => {
			for (let i = 1; i <= pages; i++) {
				let page = i
				let url = `https://fund.eastmoney.com/Data/FundDataPortfolio_Interface.aspx?dt=14&mc=returnjson&ft=all&pn=20&pi=${page}&sc=abbname&st=asc`
				ax.get(url)
					.then((resp) => {
						let d = eval(resp.data+'\n'+identifier)
						let data = d.data
						all_infos[i] = data
						if (Object.keys(all_infos).length === pages) {
							for (let j in all_infos) {
								 all_data = all_data.concat(all_infos[j])
							}
							echoHandler()
						}
					})
					.catch((err) => {
						console.log(err)
					})
			}
		})
		.catch(function(err) {
			if (err) console.log(err)
			return 0
		})
}

let echoHandler = () => {
	console.log(all_data.length)
}


//getPages(url, "returnjson")

// use promise to return yet-unresolved resp
promise = new Promise((cb) => {
	var pages
	var count = 0
	var times = 0
	ax.get(url)
		.then((resp) => {
			pages = eval(resp.data+"\nreturnjson").pages
			for (let i = 1; i<= pages; i++) {
				ax.get(url)
					.then((resp) => {
						count += eval(resp.data+"\nreturnjson").data.length
						times += 1
						if (times == pages) {
							cb(count)
						}
					})
			}
		})
})

promise.then((resp) => {
	console.log("then"+ resp)
})
.catch((err) => {
	console.log("catch"+err)
})
