var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

// POST /api/products

// GET /api/products GET /api/products/:id

// PUT /api/products/:id

// DELETE /api/products/:id

var port = 5000;
app.listen(port, function() {
  console.log('listening on port ' + port)
});
