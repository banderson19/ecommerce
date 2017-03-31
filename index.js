// imports
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

// app
var app = module.exports = express();

// config
app.use(bodyParser.json());
app.use(cors());

// config of database
var connectionString = "postgres://postgres:Lanier19@localhost/ecommerce_project";
var massiveInstance = massive.connectSync({connectionString : connectionString});
app.set('db', massiveInstance);

var controller = require('./productCtrl.js');
app.get('/products/:id', controller.grabOne);
app.post('/products', controller.create);
app.get('/products', controller.grab);
app.put('/products/:id', controller.update);
app.delete('/products/:id', controller.destroy);

// listening on port
var port = 5005;
app.listen(port, function() {
  console.log('listening on port ' + port)
});
