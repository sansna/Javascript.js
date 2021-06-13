var a
// undefined, lack of value, of unknown value
if (a) {
	console.log("ok")
} else {
	console.log("?", a)
}

var b = null
// null, value absence, later will have value
if (b) {
	console.log("ok")
} else {
	console.log("??", b)
}

var c = 1
if (c) {
	console.log("ok")
} else {
	console.log("??", c)
}
