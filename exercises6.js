// Exercise 6
// In a file `exercise6.js`:
// Install the module [axios](https://github.com/axios/axios) and retrieve the html code from `google.com`.
// I created/ wrote a html file to save the outout. By using Prettier on VSCode, you can see the code formatted

const axios = require('axios')
const fs = require('fs')

axios.get('http://google.com')
  .then((response) => {
    fs.writeFile('google.html',  response.data, 'utf-8', (err) => {
      if(err) throw err
    })
    //console.log(response);
  })
  .catch((error) => {
    console.log(error);
 })
