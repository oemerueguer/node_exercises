// Exercise 4 ([Help - fs](https://nodejs.org/api/fs.html))
// In a file `exercise4.js`:
// Write the work done in the previous exercises in ES5 or ES6 (depending which version you used).

// Explanation: you need to add function,  delete =>,  and add throw to err

const fs = require('fs');

fs.readFile('test.html','utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});



