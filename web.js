var express = require('express');
//console.log("express here");
var fs = require('fs');

var buf = fs.readFileSync("index.html");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
//console.log(process.env.PORT);
app.listen(port, function() {
  console.log("Listening on " + port);
});
