// this module is built-in
var events = require('events')
var eventEmitter = new events.EventEmitter()

var myEventHandler = function() {
	console.log('I hear a scream!');
}

var myEventHandler2 = function() {
	console.log('I hear a new scream!');
}

// define triggers and signals
eventEmitter.on('scream', myEventHandler)
eventEmitter.on('scream-type-2', myEventHandler2)

// try trigger
eventEmitter.emit('scream')
eventEmitter.emit('scream-type-2')
eventEmitter.emit('scream-type-new')
