const EventEmitter = require('events');

//create class
class MyEmitter extends EventEmitter{};

// init obj
const myEmitter = new MyEmitter();

// event Listenet 
myEmitter.on('event', ()=>{
	console.log("Event fired");
})

myEmitter.emit('event');
myEmitter.emit('event');