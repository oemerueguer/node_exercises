// ## Exercise 3 ([Help - fs](https://nodejs.org/api/fs.html))
// In a file `exercise3.js`:
// Using the `readFile` function, read the file `test.html` and display the content in the console.

//readFile()
const fs = require('fs');

fs.readFile('test.html','utf8', (err, data) => {
  if (err) throw err; // console.log(err)
  console.log(data);
});




