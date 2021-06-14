// => operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// ways of declare functions
function f(a,b) {
	return a+b
}
(a,b) => {
	return a+b
}
(a,b) => a+b

// named function declaration
let func = (a,b) => a+b+10
console.log(func(1,2))

// no param declare
let c = 2
let d = 3
function ff() {
	return c+d
}
() => {
	return c+d
}
() => c+d
let ff2 = () => c+d
console.log("ff2", ff2())

// `arguments` inside a function is implicit binding
function fff(n) {
	console.log(arguments[0])
}
fff(10)
