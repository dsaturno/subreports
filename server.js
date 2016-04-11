var express = require('express');
var app = express();
var port = 8000;

app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.send( __dirname + '/index.html');
})

app.listen(port, function() {
  console.log('Listening on port ' + port);
})
