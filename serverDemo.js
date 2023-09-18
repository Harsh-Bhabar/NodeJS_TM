// const http = require('http');
// const path = require('path');
// const fs = require('fs');

// const PORT = process.env.PORT || 8081;

// const server = http.createServer((req, res) =>{
// 	// if(req.url === '/'){
// 	// 	fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data)=>{
// 	// 		if(err){
// 	// 			throw err;
// 	// 		}
// 	// 		res.writeHead(200, { 'Content-Type': 'text/html' });
// 	// 		res.write(data);
// 	// 		res.end();
// 	// 	})
// 	// }
// 	// else if (req.url === '/api/users') {
// 	// 	const users = [
// 	// 		{
// 	// 			name: "Harsh",
// 	// 			age: 25
// 	// 		}, {
// 	// 			name: "Ayush",
// 	// 			age: 25
// 	// 		}, {
// 	// 			name: "Mrinal",
// 	// 			age: 25
// 	// 		},
// 	// 	];
// 	// 	res.writeHead(200, {'Content-Type' : 'application/json'});
// 	// 	res.end(JSON.stringify(users));
// 	// 	// res.end();
// 	// }


// 	// Build file path
// 	let filePath = path.join(
// 		__dirname,
// 		"public",
// 		req.url === "/" ? "index.html" : req.url
// 	);

// 	// Extension of file
// 	let extname = path.extname(filePath);

// 	// Initial content type
// 	let contentType = "text/html";

// 	// Check ext and set content type
// 	switch (extname) {
// 		case ".js":
// 			contentType = "text/javascript";
// 			break;
// 		case ".css":
// 			contentType = "text/css";
// 			break;
// 		case ".json":
// 			contentType = "application/json";
// 			break;
// 		case ".png":
// 			contentType = "image/png";
// 			break;
// 		case ".jpg":
// 			contentType = "image/jpg";
// 			break;
// 	}

// 	// Check if contentType is text/html but no .html file extension
// 	if (contentType == "text/html" && extname == "") filePath += ".html";

// 	// log the filePath
// 	console.log(filePath);

// 	// Read File
// 	fs.readFile(filePath, (err, content) => {
// 		if (err) {
// 			if (err.code == "ENOENT") {
// 				// Page not found
// 				fs.readFile(
// 					path.join(__dirname, "public", "ErrorPage.html"),
// 					(err, content) => {
// 						res.writeHead(404, { "Content-Type": "text/html" });
// 						res.end(content, "utf8");
// 					}
// 				);
// 			} else {
// 				//  Some server error
// 				res.writeHead(500);
// 				res.end(`Server Error: ${err.code}`);
// 			}
// 		} else {
// 			// Success
// 			res.writeHead(200, { "Content-Type": contentType });
// 			res.end(content, "utf8");
// 		}
// 	})


// 	// console.log("filepath - ext - ", filePath, " ", extName);
// 	// res.end();

// });

// server.listen(PORT, ()=>{console.log("server running on port - ", PORT)});