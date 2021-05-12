// ## Exercise 2 ([Help - fs](https://nodejs.org/api/fs.html))
// In a file `exercise2.js`:
// Using the `writeFile` function, write `hello` in a file called `test.html`.

const fs = require('fs');

fs.writeFile('test.html', 'hello', (err) => {
  if (err) throw err;
  console.log('Saved!');
});
