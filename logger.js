const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter{
	log(msg){
		this.emit('msg', {id:uuid.v4(), msg});
	};
}

module.exports = Logger;


// index 


// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('msg', (data) => console.log('Called Listener', data));
// logger.log("Hello world");