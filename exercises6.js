// Exercise 6
// In a file `exercise6.js`:
// Install the module [axios](https://github.com/axios/axios) and retrieve the html code from `google.com`.

const axios = require('axios');

axios.get('http://google.com')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
 });
