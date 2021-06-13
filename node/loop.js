// normal
for (var i = 0 ; i < 10; i ++) {
	console.log(i)
}

do {
	console.log(i++)
} while (i < 20)

while (i < 30) {
	console.log(++i)
}

// array loop
a = [1,2,3]
for (i of a) {
	console.log(i)
}
for (i in a) {
	console.log(a[i])
}

// Object loop
a = {
	"a":"b",
	"b":"e",
	"c":"d",
	1: "@",
}
for (i in a) {
	console.log(i, a[i])
}
