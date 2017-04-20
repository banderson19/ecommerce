// imports
var express = require('express');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

// app
var app = module.exports = express();

// config
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./'));
// go to localhost:5005/#/. no need for live-server, still need nodemon running

// config of database
var connectionString = "postgres://postgres:Lanier19@localhost/ecommerce_project";
var massiveInstance = massive.connectSync({connectionString : connectionString});
app.set('db', massiveInstance);

var controller = require('./controllers/restCtrl.js');
app.get('/products/:productid', controller.grabOne);
app.post('/products', controller.create);
app.get('/products', controller.grab);
app.put('/products/:productid', controller.update);
app.delete('/products/:productid', controller.destroy);




// listening on port. function() is representing a callback, to console.log
var port = 5006;
app.listen(port, function() {
  console.log('listening on port ' + port)
});
