var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var app = express();
app.use('/', express.static('build'));

app.listen(8080, function () {
  console.log('App listening on port 8080!');
});
