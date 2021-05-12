
// Exercise 5 ([Help - http](https://nodejs.org/api/http.html))

// In a file `exercise5.js`:

// Copy this code and run it in the console. What's going on?

```
var http = require('http');
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});
server.listen(80);
console.log("Server running at http://127.0.0.1:80/");
```
