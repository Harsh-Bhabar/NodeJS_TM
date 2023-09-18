const path = require('path');

// file & dir name
console.log(__filename)
console.log(__dirname);

//base name 
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

// extension 
console.log(path.extname(__filename));

// path obj
console.log(path.parse(__filename));

//join
console.log(path.join(__dirname, 'test', 'hello.txt'));

