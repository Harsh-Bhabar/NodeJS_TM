const fs = require('fs');
const path = require('path');

// mkdir
// fs.mkdir(path.join(__dirname, 'test2'), (err) => {
// 	if (err) {
// 		console.log("An error occurred.");
// 		throw err;
// 	}
// 	console.log("Folder created.");
// });

// write file

// fs.writeFile(path.join(__dirname, 'test2', 'hello.txt'), "Hello word", (err) => {
// 	if (err) {
// 		console.log("An error occurred.");
// 		throw err;
// 	}
// 	console.log("Folder created.");
// });

// append data in a file 

// fs.appendFile(path.join(__dirname, 'test2', 'hello.txt'), "Hello word - 2", (err) => {
// 	if (err) {
// 		console.log("An error occurred.");
// 		throw err;
// 	}
// 	console.log("Folder created.");
// });

// read file 

fs.readFile(path.join(__dirname, 'test2', 'hello.txt'), 'utf8', (err, data)=>{
	if(err){
		throw err;
	}
	console.log(data);
})